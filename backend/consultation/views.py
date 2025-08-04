from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Consultation
from .serializers import ConsultationSerializer
from datetime import datetime
import json

@api_view(['POST'])
@permission_classes([AllowAny])
def schedule_consultation(request):
    """Handle consultation booking requests"""
    try:
        # Create consultation record
        serializer = ConsultationSerializer(data=request.data)
        if serializer.is_valid():
            consultation = serializer.save()
            
            # Send confirmation email to client
            client_email_sent = False
            try:
                client_message = f"""
                Dear {consultation.name},
                
                Your consultation has been successfully scheduled!
                
                📅 Date: {consultation.preferred_date}
                ⏰ Time: {consultation.preferred_time}
                📋 Project Type: {consultation.project_type}
                
                We'll send you a calendar invite shortly with meeting details.
                
                If you need to reschedule, please contact us at hello@jevelon.com
                
                Best regards,
                Jevelon Technologies Team
                """
                
                send_mail(
                    subject='Consultation Confirmed - Jevelon Technologies',
                    message=client_message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[consultation.email],
                    fail_silently=False,
                )
                
                client_email_sent = True
                print(f"✅ Client confirmation email sent to {consultation.email}")
                
            except Exception as e:
                print(f"❌ Error sending client email: {e}")
                client_email_sent = False
            
            # Send notification to admin
            admin_email_sent = False
            try:
                admin_message = f"""
                New consultation request received:
                
                👤 Name: {consultation.name}
                📧 Email: {consultation.email}
                📞 Phone: {consultation.phone or 'Not provided'}
                🏢 Company: {consultation.company or 'Not provided'}
                📋 Project Type: {consultation.project_type}
                📅 Preferred Date: {consultation.preferred_date}
                ⏰ Preferred Time: {consultation.preferred_time}
                📝 Notes: {consultation.additional_notes or 'None'}
                
                Please follow up with the client.
                """
                
                send_mail(
                    subject='New Consultation Request - Jevelon Technologies',
                    message=admin_message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.ADMIN_EMAIL],
                    fail_silently=False,
                )
                
                admin_email_sent = True
                print(f"✅ Admin notification email sent to {settings.ADMIN_EMAIL}")
                
            except Exception as e:
                print(f"❌ Error sending admin email: {e}")
                admin_email_sent = False
            
            # Mark email as sent only if both emails were successful
            consultation.email_sent = client_email_sent and admin_email_sent
            consultation.save()
            
            return Response({
                'success': True,
                'message': 'Consultation scheduled successfully',
                'consultation_id': consultation.id
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
