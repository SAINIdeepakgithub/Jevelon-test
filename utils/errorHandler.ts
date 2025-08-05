// Comprehensive error handling utilities

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
}

export interface ErrorResponse {
  success: false;
  error: string;
  details?: unknown;
}

// Error types
export enum ErrorType {
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  UNKNOWN = 'UNKNOWN'
}

// Error handler class
export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorLog: Array<{ timestamp: Date; error: unknown; context?: string }> = [];

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  // Handle API errors
  static handleApiError(error: unknown, context?: string): ApiError {
    const handler = ErrorHandler.getInstance();
    handler.logError(error, context);

    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const data = error.response.data;

      switch (status) {
        case 400:
          return {
            message: data?.error || 'Invalid request. Please check your input.',
            status,
            code: ErrorType.VALIDATION
          };
        case 401:
          return {
            message: 'Authentication required. Please log in.',
            status,
            code: ErrorType.AUTHENTICATION
          };
        case 403:
          return {
            message: 'Access denied. You don\'t have permission for this action.',
            status,
            code: ErrorType.AUTHORIZATION
          };
        case 404:
          return {
            message: 'Resource not found.',
            status,
            code: ErrorType.NOT_FOUND
          };
        case 500:
          return {
            message: 'Server error. Please try again later.',
            status,
            code: ErrorType.SERVER_ERROR
          };
        default:
          return {
            message: data?.error || 'An unexpected error occurred.',
            status,
            code: ErrorType.UNKNOWN
          };
      }
    } else if (error.request) {
      // Network error
      return {
        message: 'Network error. Please check your internet connection.',
        code: ErrorType.NETWORK
      };
    } else {
      // Other errors
      return {
        message: error.message || 'An unexpected error occurred.',
        code: ErrorType.UNKNOWN
      };
    }
  }

  // Handle form validation errors
  static handleValidationError(errors: Record<string, string[]>): ApiError {
    const errorMessages = Object.values(errors).flat();
    return {
      message: errorMessages.join(', '),
      code: ErrorType.VALIDATION,
      details: errors
    };
  }

  // Log error for debugging
  private logError(error: unknown, context?: string): void {
    const logEntry = {
      timestamp: new Date(),
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      },
      context
    };

    this.errorLog.push(logEntry);

    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', logEntry);
    }

    // Keep only last 100 errors to prevent memory leaks
    if (this.errorLog.length > 100) {
      this.errorLog = this.errorLog.slice(-100);
    }
  }

  // Get error logs (for debugging)
  static getErrorLog(): Array<{ timestamp: Date; error: unknown; context?: string }> {
    return ErrorHandler.getInstance().errorLog;
  }

  // Clear error logs
  static clearErrorLog(): void {
    ErrorHandler.getInstance().errorLog = [];
  }

  // Show user-friendly error message
  static showErrorMessage(error: ApiError): void {
    // You can integrate this with your toast/notification system
    console.error('User Error:', error.message);
    
    // For now, we'll use alert, but you should replace this with a proper notification system
    alert(error.message);
  }

  // Retry function with exponential backoff
  static async retryWithBackoff<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
  ): Promise<T> {
    let lastError: unknown;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;
        
        if (attempt === maxRetries) {
          throw error;
        }

        // Calculate delay with exponential backoff
        const delay = baseDelay * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    throw lastError;
  }
}

// Utility function to wrap async operations with error handling
export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  context?: string
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    const apiError = ErrorHandler.handleApiError(error, context);
    ErrorHandler.showErrorMessage(apiError);
    throw apiError;
  }
}

// Utility function for form validation
export function validateFormData<T extends Record<string, unknown>>(
  data: T,
  validationRules: Record<keyof T, (value: unknown) => string | null>
): Record<keyof T, string> {
  const errors: Record<keyof T, string> = {} as Record<keyof T, string>;

  for (const [field, validator] of Object.entries(validationRules)) {
    const error = validator(data[field as keyof T]);
    if (error) {
      errors[field as keyof T] = error;
    }
  }

  return errors;
}

// Common validation rules
export const validationRules = {
  required: (value: unknown) => (!value || value.toString().trim() === '') ? 'This field is required' : null,
  email: (value: string) => {
    if (!value) return null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(value) ? 'Please enter a valid email address' : null;
  },
  minLength: (min: number) => (value: string) => {
    if (!value) return null;
    return value.length < min ? `Must be at least ${min} characters` : null;
  },
  maxLength: (max: number) => (value: string) => {
    if (!value) return null;
    return value.length > max ? `Must be no more than ${max} characters` : null;
  },
  phone: (value: string) => {
    if (!value) return null;
    const phoneRegex = /^\+?\d{1,3}\s?\d{10}$/;
    return !phoneRegex.test(value.replace(/\s/g, '')) ? 'Please enter a valid phone number' : null;
  }
}; 