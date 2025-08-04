from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import SupportTicket
from .serializers import SupportTicketSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_support_ticket(request):
    """Handle support ticket submissions"""
    try:
        # Create support ticket record
        serializer = SupportTicketSerializer(data=request.data)
        if serializer.is_valid():
            ticket = serializer.save()
            
            # Send email notification to admin
            email_sent = False
            try:
                admin_message = f"""
                New support ticket submitted:
                
                Ticket ID: {ticket.id}
                Name: {ticket.name}
                Email: {ticket.email}
                Priority: {ticket.get_priority_display()}
                Category: {ticket.get_category_display()}
                Subject: {ticket.subject}
                Message: {ticket.message}
                
                Please respond within the appropriate timeframe based on priority.
                """
                
                send_mail(
                    subject=f'New Support Ticket #{ticket.id} - {ticket.subject}',
                    message=admin_message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.ADMIN_EMAIL],
                    fail_silently=False,
                )
                
                email_sent = True
                print(f"✅ Support ticket email sent successfully to {settings.ADMIN_EMAIL}")
                
            except Exception as e:
                print(f"❌ Error sending support ticket email: {e}")
                email_sent = False
            
            # Update email_sent status
            ticket.email_sent = email_sent
            ticket.save()
            
            return Response({
                'success': True,
                'message': 'Support ticket submitted successfully',
                'ticket_id': ticket.id
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

@api_view(['GET'])
@permission_classes([AllowAny])
def get_support_tickets(request):
    """Get all support tickets (for admin purposes)"""
    try:
        tickets = SupportTicket.objects.all()
        serializer = SupportTicketSerializer(tickets, many=True)
        return Response({
            'success': True,
            'tickets': serializer.data
        }, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
