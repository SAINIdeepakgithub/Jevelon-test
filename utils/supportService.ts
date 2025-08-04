import axios from 'axios';

export interface SupportTicket {
  id?: string;
  name: string;
  email: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'bug' | 'feature' | 'performance' | 'security' | 'other';
  subject: string;
  message: string;
  status?: 'open' | 'in_progress' | 'resolved' | 'closed';
  created_at?: string;
  updated_at?: string;
}

export interface SupportTicketResponse {
  success: boolean;
  message: string;
  ticket_id?: string;
  errors?: any;
  error?: string;
}

class SupportService {
  private baseUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000/api/support';

  async submitSupportTicket(ticketData: SupportTicket): Promise<SupportTicketResponse> {
    try {
      const response = await axios.post(`${this.baseUrl}/submit/`, ticketData);
      return response.data;
    } catch (error: any) {
      console.error('Error submitting support ticket:', error);
      if (error.response) {
        return error.response.data;
      }
      return {
        success: false,
        message: 'Network error occurred. Please try again.',
        error: 'Network error occurred. Please try again.'
      };
    }
  }

  async getSupportTickets(): Promise<SupportTicket[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/tickets/`);
      return response.data.tickets || [];
    } catch (error) {
      console.error('Error fetching support tickets:', error);
      return [];
    }
  }
}

export const supportService = new SupportService(); 