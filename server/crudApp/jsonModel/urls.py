from django.urls import path
from . import views
urlpatterns = [
    #path('',views.showMe),
    #path('fd/',views.financial_report),
    path('',views.finacialInfo.as_view(), name = 'financial'),
    path('<int:pk>/',views.finacialInfo.as_view(), name = 'financial'),
]
