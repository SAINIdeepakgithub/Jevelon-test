from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    service = models.CharField(max_length=50)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    email_sent = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.name} - {self.service}"
    
    class Meta:
        ordering = ['-created_at']
