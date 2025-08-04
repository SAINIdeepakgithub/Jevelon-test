from django.db import models

# Create your models here.

class Consultation(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    project_type = models.CharField(max_length=50)
    preferred_date = models.DateField()
    preferred_time = models.CharField(max_length=20)
    additional_notes = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    email_sent = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.name} - {self.project_type}"
    
    class Meta:
        ordering = ['-created_at']
