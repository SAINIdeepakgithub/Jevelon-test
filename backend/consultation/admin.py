from django.contrib import admin
from .models import Consultation

@admin.register(Consultation)
class ConsultationAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'project_type', 'preferred_date', 'status', 'email_sent']
    list_filter = ['status', 'project_type', 'email_sent', 'created_at']
    search_fields = ['name', 'email', 'company', 'additional_notes']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
