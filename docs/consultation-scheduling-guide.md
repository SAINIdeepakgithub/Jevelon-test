# Consultation Scheduling Implementation Guide

This guide explains how to implement consultation scheduling functionality for the Jevelon Technologies website.

## Current Implementation

The consultation scheduling system is now implemented with:

1. **Modal Form**: A comprehensive booking form with date/time selection
2. **Service Layer**: A modular service architecture for different integrations
3. **Mock Services**: Working prototypes that can be replaced with real integrations

## Integration Options

### Option 1: Simple Email Integration (Easiest)

**Best for**: Quick setup, low volume
**Cost**: Free to low cost
**Setup time**: 1-2 hours

```typescript
// Use the existing MockEmailService or integrate with:
// - SendGrid (free tier: 100 emails/day)
// - Mailgun (free tier: 5,000 emails/month)
// - AWS SES (very cheap)
// - Resend (free tier: 3,000 emails/month)
```

**Steps**:
1. Sign up for an email service
2. Replace `MockEmailService` with real implementation
3. Configure email templates
4. Test the flow

### Option 2: Calendly Integration (Recommended for MVP)

**Best for**: Professional booking experience, no development needed
**Cost**: Free tier available
**Setup time**: 30 minutes

**Steps**:
1. Create a Calendly account
2. Set up your availability
3. Replace the modal with a Calendly embed:

```tsx
// Replace the modal with this:
<iframe
  src="https://calendly.com/your-company/consultation"
  width="100%"
  height="700px"
  frameBorder="0"
/>
```

**Or use Calendly API for custom integration**:
```typescript
// Install: npm install @calendly/api
import { CalendlyApi } from '@calendly/api';

const calendly = new CalendlyApi({
  apiKey: process.env.CALENDLY_API_KEY
});

// Create booking programmatically
const booking = await calendly.schedulingLinks.create({
  eventType: process.env.CALENDLY_EVENT_TYPE_UUID,
  maxEventCount: 1
});
```

### Option 3: Google Calendar Integration

**Best for**: Full control, automatic calendar invites
**Cost**: Free
**Setup time**: 2-4 hours

**Steps**:
1. Set up Google Cloud Project
2. Enable Google Calendar API
3. Create OAuth 2.0 credentials
4. Implement Google Calendar service

```typescript
// Install: npm install googleapis
import { google } from 'googleapis';

class GoogleCalendarService implements CalendarService {
  private calendar = google.calendar('v3');
  private auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  async createEvent(consultation: ConsultationRequest): Promise<string> {
    const event = {
      summary: `Consultation with ${consultation.name}`,
      description: `Project: ${consultation.projectType}\nNotes: ${consultation.additionalNotes}`,
      start: {
        dateTime: this.combineDateAndTime(consultation.preferredDate, consultation.preferredTime),
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: this.combineDateAndTime(consultation.preferredDate, consultation.preferredTime, 30),
        timeZone: 'Asia/Kolkata',
      },
      attendees: [
        { email: consultation.email },
        { email: 'admin@jevelon.com' } // Your admin email
      ],
    };

    const response = await this.calendar.events.insert({
      auth: this.auth,
      calendarId: 'primary',
      resource: event,
      sendUpdates: 'all',
    });

    return response.data.id!;
  }
}
```

### Option 4: HubSpot Integration

**Best for**: Lead management, CRM integration
**Cost**: Free tier available
**Setup time**: 2-3 hours

**Steps**:
1. Create HubSpot account
2. Get API key
3. Implement HubSpot service

```typescript
// Install: npm install @hubspot/api-client
import { Client } from '@hubspot/api-client';

class HubSpotService implements CRMService {
  private client = new Client({ accessToken: process.env.HUBSPOT_API_KEY });

  async createLead(consultation: ConsultationRequest): Promise<string> {
    const properties = {
      firstname: consultation.name.split(' ')[0],
      lastname: consultation.name.split(' ').slice(1).join(' '),
      email: consultation.email,
      phone: consultation.phone,
      company: consultation.company,
      project_type: consultation.projectType,
      consultation_date: consultation.preferredDate.toISOString(),
      consultation_time: consultation.preferredTime,
      notes: consultation.additionalNotes,
    };

    const response = await this.client.crm.contacts.basicApi.create({ properties });
    return response.id;
  }
}
```

### Option 5: Full-Stack Solution with Backend

**Best for**: Complete control, custom features
**Cost**: Server hosting costs
**Setup time**: 1-2 weeks

**Backend options**:
- **Node.js/Express**: Quick setup, JavaScript/TypeScript
- **Python/Django**: Robust, great for business logic
- **PHP/Laravel**: Easy hosting, good for small businesses
- **Next.js API Routes**: Full-stack React solution

**Database options**:
- **PostgreSQL**: Robust, scalable
- **MongoDB**: Flexible, JSON-like
- **Supabase**: PostgreSQL with real-time features
- **Firebase**: NoSQL, real-time, easy setup

## Recommended Implementation Path

### Phase 1: Quick Start (Week 1)
1. Use Calendly integration
2. Set up email notifications
3. Test the complete flow

### Phase 2: Custom Integration (Week 2-3)
1. Implement Google Calendar integration
2. Add email service (SendGrid/Resend)
3. Create admin dashboard

### Phase 3: Advanced Features (Week 4+)
1. Add CRM integration (HubSpot)
2. Implement analytics
3. Add automated follow-ups

## Environment Variables

Create a `.env` file with these variables:

```env
# Email Service (choose one)
SENDGRID_API_KEY=your_sendgrid_key
MAILGUN_API_KEY=your_mailgun_key
RESEND_API_KEY=your_resend_key

# Google Calendar
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback

# Calendly
CALENDLY_API_KEY=your_calendly_key
CALENDLY_EVENT_TYPE_UUID=your_event_type_uuid

# HubSpot
HUBSPOT_API_KEY=your_hubspot_key
HUBSPOT_PORTAL_ID=your_portal_id

# Admin Email
ADMIN_EMAIL=admin@jevelon.com
```

## Testing the Implementation

1. **Test the form**: Fill out all fields and submit
2. **Check console logs**: Verify service calls are working
3. **Test email delivery**: Check if confirmation emails are sent
4. **Test calendar integration**: Verify events are created
5. **Test CRM integration**: Check if leads are created

## Security Considerations

1. **Input validation**: All form inputs are validated
2. **Rate limiting**: Implement to prevent spam
3. **CSRF protection**: Use CSRF tokens
4. **Data encryption**: Encrypt sensitive data
5. **GDPR compliance**: Handle data deletion requests

## Monitoring and Analytics

Track these metrics:
- Consultation requests per day/week
- Conversion rate (requests to actual consultations)
- Popular time slots
- Most requested project types
- Email delivery success rate

## Troubleshooting

### Common Issues:

1. **Calendar events not created**: Check API credentials and permissions
2. **Emails not sent**: Verify email service configuration
3. **Form validation errors**: Check required field validation
4. **Time zone issues**: Ensure consistent timezone handling

### Debug Steps:

1. Check browser console for errors
2. Verify API keys are correct
3. Test API endpoints separately
4. Check email service logs
5. Verify calendar permissions

## Next Steps

1. Choose your preferred integration approach
2. Set up the required services and APIs
3. Replace mock services with real implementations
4. Test the complete flow
5. Deploy and monitor

For questions or support, contact the development team at dev@jevelon.com 