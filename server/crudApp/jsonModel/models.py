from django.db import models
import uuid

# Create your models here.
class FinancialData(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateField()
    trade_code = models.CharField(max_length=10)
    high = models.DecimalField(max_digits=5, decimal_places=2)
    low = models.DecimalField(max_digits=5, decimal_places=2)
    open = models.DecimalField(max_digits=5, decimal_places=2)
    close = models.DecimalField(max_digits=5, decimal_places=2)
    volume = models.IntegerField()
