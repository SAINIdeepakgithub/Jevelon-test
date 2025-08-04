from django.contrib import admin
from .models import SupportTicket

@admin.register(SupportTicket)
class SupportTicketAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'priority', 'category', 'subject', 'status', 'created_at']
    list_filter = ['priority', 'category', 'status', 'created_at']
    search_fields = ['name', 'email', 'subject', 'message']
    readonly_fields = ['created_at', 'updated_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'email', 'subject', 'message')
        }),
        ('Ticket Details', {
            'fields': ('priority', 'category', 'status')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
        ('Email Status', {
            'fields': ('email_sent',),
            'classes': ('collapse',)
        }),
    )
