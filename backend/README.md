# Jevelon Technologies Backend

Django REST API backend for Jevelon Technologies website.

## Features

- **Contact Form API** - Handle contact form submissions
- **Consultation Booking API** - Schedule client consultations
- **Email Notifications** - SendGrid integration for email alerts
- **Admin Panel** - Django admin for managing submissions
- **CORS Support** - Cross-origin requests for frontend integration

## Tech Stack

- **Django 5.0** - Web framework
- **Django REST Framework** - API framework
- **PostgreSQL** - Database (via Render)
- **SendGrid** - Email service
- **Render** - Hosting platform

## Setup Instructions

### 1. Clone and Setup Virtual Environment

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Environment Variables

Create a `.env` file in the backend directory:

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
SENDGRID_API_KEY=your-sendgrid-api-key
```

### 4. Database Setup

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
```

### 5. Run Development Server

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`

## API Endpoints

### Contact Form
- **POST** `/api/contact/submit/`
  - Submit contact form
  - Sends email notification to admin

### Consultation Booking
- **POST** `/api/consultation/schedule/`
  - Schedule consultation
  - Sends confirmation email to client
  - Sends notification email to admin

## Admin Panel

Access the admin panel at `http://localhost:8000/admin/`

- **Contact Submissions** - View and manage contact form submissions
- **Consultations** - View and manage consultation bookings

## Deployment

### Render Deployment

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `gunicorn jevelon_backend.wsgi:application`
5. Add environment variables in Render dashboard

### Environment Variables for Production

```env
SECRET_KEY=your-production-secret-key
DEBUG=False
ALLOWED_HOSTS=.onrender.com,your-domain.com
DATABASE_URL=postgresql://... (from Render)
SENDGRID_API_KEY=your-sendgrid-api-key
```

## Database Models

### Contact
- `name` - Client name
- `email` - Client email
- `service` - Service interested in
- `message` - Client message
- `created_at` - Submission timestamp
- `email_sent` - Email notification status

### Consultation
- `name` - Client name
- `email` - Client email
- `phone` - Client phone (optional)
- `company` - Client company (optional)
- `project_type` - Type of project
- `preferred_date` - Preferred consultation date
- `preferred_time` - Preferred consultation time
- `additional_notes` - Additional notes (optional)
- `status` - Consultation status (pending/confirmed/completed/cancelled)
- `created_at` - Booking timestamp
- `email_sent` - Email notification status

## Email Configuration

The backend uses SendGrid for email notifications:

1. **Client Confirmation** - Sent to client when consultation is booked
2. **Admin Notification** - Sent to admin for new submissions

To configure SendGrid:
1. Create a SendGrid account
2. Generate an API key
3. Add the API key to environment variables
4. Update admin email addresses in views.py

## Development

### Running Tests
```bash
python manage.py test
```

### Creating New Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Shell Access
```bash
python manage.py shell
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests
4. Submit a pull request

## License

MIT License 