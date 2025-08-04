from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'service', 'created_at', 'email_sent']
    list_filter = ['service', 'email_sent', 'created_at']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
