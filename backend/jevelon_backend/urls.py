"""
URL configuration for jevelon_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse, HttpResponse
from django.conf import settings
from django.conf.urls.static import static
import os

def health_check(request):
    try:
        # Test database connection
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            db_status = "connected"
    except Exception as e:
        db_status = f"error: {str(e)}"
    
    return JsonResponse({
        'status': 'ok',
        'message': 'Jevelon Backend is running',
        'debug': settings.DEBUG,
        'allowed_hosts': settings.ALLOWED_HOSTS,
        'cors_origins': settings.CORS_ALLOWED_ORIGINS,
        'database_status': db_status,
        'static_root': str(settings.STATIC_ROOT),
        'static_url': settings.STATIC_URL,
        'endpoints': {
            'admin': '/admin/',
            'contact': '/api/contact/submit/',
            'support': '/api/support/submit/',
            'consultation': '/api/consultation/schedule/'
        }
    })

def test_endpoint(request):
    return JsonResponse({
        'status': 'success',
        'message': 'Test endpoint working',
        'method': request.method,
        'headers': dict(request.headers)
    })

def favicon_handler(request):
    """Handle favicon requests to prevent 400 errors"""
    return HttpResponse(status=204)  # No content response

urlpatterns = [
    path('', health_check, name='health_check'),
    path('test/', test_endpoint, name='test_endpoint'),
    path('favicon.ico', favicon_handler, name='favicon'),
    path('admin/', admin.site.urls),
    path('api/contact/', include('contact.urls')),
    path('api/consultation/', include('consultation.urls')),
    path('api/support/', include('support.urls')),
]

# Serve static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
