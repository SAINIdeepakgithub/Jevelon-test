// Consultation Scheduling Service
// This file contains utilities for handling consultation booking requests

export interface ConsultationRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  preferredDate: Date;
  preferredTime: string;
  additionalNotes?: string;
}

export interface EmailService {
  sendConsultationConfirmation: (consultation: ConsultationRequest) => Promise<void>;
  sendAdminNotification: (consultation: ConsultationRequest) => Promise<void>;
}

export interface CalendarService {
  createEvent: (consultation: ConsultationRequest) => Promise<string>;
}

export interface CRMService {
  createLead: (consultation: ConsultationRequest) => Promise<string>;
}

// Mock implementations - replace with actual service integrations
export class MockEmailService implements EmailService {
  async sendConsultationConfirmation(consultation: ConsultationRequest): Promise<void> {
    console.log('Sending confirmation email to:', consultation.email);
    console.log('Email content:', {
      subject: 'Consultation Confirmed - Jevelon Technologies',
      body: `Hi ${consultation.name},\n\nYour consultation has been scheduled for ${consultation.preferredDate.toDateString()} at ${consultation.preferredTime} IST.\n\nWe'll send you a calendar invite shortly.\n\nBest regards,\nJevelon Technologies Team`
    });
    
    // In production, integrate with:
    // - SendGrid: https://sendgrid.com/
    // - Mailgun: https://www.mailgun.com/
    // - AWS SES: https://aws.amazon.com/ses/
    // - Resend: https://resend.com/
  }

  async sendAdminNotification(consultation: ConsultationRequest): Promise<void> {
    console.log('Sending admin notification for new consultation request');
    console.log('Admin email content:', {
      subject: 'New Consultation Request',
      body: `New consultation request from ${consultation.name} (${consultation.email}) for ${consultation.projectType}`
    });
  }
}

export class MockCalendarService implements CalendarService {
  async createEvent(consultation: ConsultationRequest): Promise<string> {
    console.log('Creating calendar event for consultation');
    
    // In production, integrate with:
    // - Google Calendar API: https://developers.google.com/calendar
    // - Microsoft Graph API (Outlook): https://docs.microsoft.com/en-us/graph/api/resources/event
    // - Calendly API: https://developer.calendly.com/
    // - Acuity Scheduling API: https://developers.acuityscheduling.com/
    
    return 'mock-event-id-123';
  }
}

export class MockCRMService implements CRMService {
  async createLead(consultation: ConsultationRequest): Promise<string> {
    console.log('Creating lead in CRM system');
    
    // In production, integrate with:
    // - HubSpot: https://developers.hubspot.com/
    // - Salesforce: https://developer.salesforce.com/
    // - Pipedrive: https://developers.pipedrive.com/
    // - Zoho CRM: https://www.zoho.com/crm/developer/
    
    return 'mock-lead-id-456';
  }
}

// Main consultation service
export class ConsultationService {
  private emailService: EmailService;
  private calendarService: CalendarService;
  private crmService: CRMService;

  constructor(
    emailService: EmailService = new MockEmailService(),
    calendarService: CalendarService = new MockCalendarService(),
    crmService: CRMService = new MockCRMService()
  ) {
    this.emailService = emailService;
    this.calendarService = calendarService;
    this.crmService = crmService;
  }

  async scheduleConsultation(consultation: ConsultationRequest): Promise<{
    success: boolean;
    eventId?: string;
    leadId?: string;
    error?: string;
  }> {
    try {
      // Validate consultation data
      if (!this.validateConsultation(consultation)) {
        throw new Error('Invalid consultation data');
      }

      // Send to Django API
      const apiUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/consultation/schedule/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: consultation.name,
          email: consultation.email,
          phone: consultation.phone,
          company: consultation.company,
          project_type: consultation.projectType,
          preferred_date: consultation.preferredDate.toISOString().split('T')[0],
          preferred_time: consultation.preferredTime,
          additional_notes: consultation.additionalNotes
        }),
      });

      const result = await response.json();

      if (result.success) {
        return {
          success: true,
          eventId: result.consultation_id?.toString()
        };
      } else {
        return {
          success: false,
          error: result.error || 'Failed to schedule consultation'
        };
      }
    } catch (error) {
      console.error('Error scheduling consultation:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  private validateConsultation(consultation: ConsultationRequest): boolean {
    return !!(
      consultation.name &&
      consultation.email &&
      consultation.projectType &&
      consultation.preferredDate &&
      consultation.preferredTime
    );
  }
}

// Utility functions for different integration approaches
export const integrationOptions = {
  // Option 1: Simple Email Integration
  emailOnly: async (consultation: ConsultationRequest) => {
    const emailService = new MockEmailService();
    await emailService.sendConsultationConfirmation(consultation);
    await emailService.sendAdminNotification(consultation);
    return { success: true };
  },

  // Option 2: Calendly Integration
  calendly: {
    // Replace with your Calendly link
    bookingLink: 'https://calendly.com/your-company/consultation',
    
    // Or use Calendly API for programmatic booking
    getApiKey: () => typeof process !== 'undefined' ? process.env.CALENDLY_API_KEY : undefined,
    getEventTypeUuid: () => typeof process !== 'undefined' ? process.env.CALENDLY_EVENT_TYPE_UUID : undefined
  },

  // Option 3: Google Calendar Integration
  googleCalendar: {
    // Requires Google Calendar API setup
    getClientId: () => typeof process !== 'undefined' ? process.env.GOOGLE_CLIENT_ID : undefined,
    getClientSecret: () => typeof process !== 'undefined' ? process.env.GOOGLE_CLIENT_SECRET : undefined,
    getRedirectUri: () => typeof process !== 'undefined' ? process.env.GOOGLE_REDIRECT_URI : undefined
  },

  // Option 4: HubSpot Integration
  hubspot: {
    getApiKey: () => typeof process !== 'undefined' ? process.env.HUBSPOT_API_KEY : undefined,
    getPortalId: () => typeof process !== 'undefined' ? process.env.HUBSPOT_PORTAL_ID : undefined
  }
};

// Example usage with different services
export const createConsultationService = (type: 'mock' | 'email-only' | 'full') => {
  switch (type) {
    case 'email-only':
      return new ConsultationService(new MockEmailService());
    case 'full':
      return new ConsultationService(
        new MockEmailService(),
        new MockCalendarService(),
        new MockCRMService()
      );
    default:
      return new ConsultationService();
  }
}; 