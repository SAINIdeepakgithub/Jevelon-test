from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact
from .serializers import ContactSerializer
import json

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_contact(request):
    """Handle contact form submissions"""
    try:
        # Create contact record
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            
            # Send email notification to admin
            email_sent = False
            try:
                admin_message = f"""
                New contact form submission:
                
                Name: {contact.name}
                Email: {contact.email}
                Service: {contact.service}
                Message: {contact.message}
                
                Please respond within 24 hours.
                """
                
                send_mail(
                    subject='New Contact Form Submission - Jevelon Technologies',
                    message=admin_message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.ADMIN_EMAIL],
                    fail_silently=False,
                )
                
                email_sent = True
                print(f"✅ Email sent successfully to {settings.ADMIN_EMAIL}")
                
            except Exception as e:
                print(f"❌ Error sending email: {e}")
                email_sent = False
            
            # Update email_sent status
            contact.email_sent = email_sent
            contact.save()
            
            return Response({
                'success': True,
                'message': 'Contact form submitted successfully'
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                'success': False,
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
            
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
