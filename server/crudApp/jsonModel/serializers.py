from rest_framework import serializers
from .models import FinancialData

class FinancialDataSerializer(serializers.ModelSerializer):
     class Meta:
          model = FinancialData
          fields = ['id','date','trade_code','high','low','open','close','volume']
