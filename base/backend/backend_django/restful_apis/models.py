from django.db import models

# Create your models here.

class Budget(models.Model):
    inFlow = models.PositiveIntegerField()
    outFlow = models.PositiveIntegerField()
    balanceFlow = models.IntegerField(default=0)
    date = models.DateField()

    def __str__(self):
        return self.inFlow, self.outFlow