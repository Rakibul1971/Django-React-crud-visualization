from django.contrib import admin
from jsonModel.models import FinancialData

# Register your models here.
class FinancialDataAdmin(admin.ModelAdmin):
    list_display=('id','date','trade_code','high','low','open','close','volume')
admin.site.register(FinancialData, FinancialDataAdmin)

