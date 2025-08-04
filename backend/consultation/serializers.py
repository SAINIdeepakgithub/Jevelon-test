from rest_framework import serializers
from .models import Consultation

class ConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultation
        fields = [
            'id', 'name', 'email', 'phone', 'company', 'project_type',
            'preferred_date', 'preferred_time', 'additional_notes',
            'status', 'created_at'
        ]
        read_only_fields = ['id', 'status', 'created_at'] 