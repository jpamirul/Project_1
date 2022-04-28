from rest_framework import serializers
from .models import Budget

class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = '__all__'

    def validate_inFlow(self, value):
        if int(value) < 0:
            raise serializers.ValidationError('Please enter a non-negative number')

    def validate_inFlow(self, value):
        if int(value) < 0:
            raise serializers.ValidationError('Please enter a non-negative number')

        return value