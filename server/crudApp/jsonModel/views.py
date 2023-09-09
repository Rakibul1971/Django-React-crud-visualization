from django.shortcuts import render
from jsonModel.models import FinancialData
from .serializers import FinancialDataSerializer
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.renderers import TemplateHTMLRenderer
from django.http import HttpResponse

# Create your views here.

#def showMe(request):
    #return HttpResponse('<h1> I can Show you Bro!</h1>')

#def financial_report(request):
    #data = FinancialData.objects.all()
    #return render (request, 'reports/rs.html', {'fDa': data})

class finacialInfo(APIView):
    def get(self,request, pk=None,format=None):
        
        if pk is not None:
            #complex data
            fData = FinancialData.objects.get(id=pk)
            #python dict
            serializer = FinancialDataSerializer(fData)
            return Response(serializer.data)
            
        #complex data
        fData = FinancialData.objects.all()
        #python dict
        serializer = FinancialDataSerializer(fData, many=True)
        return Response(serializer.data)


    def post(self,request,format=None): 
        serializer = FinancialDataSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Successfully Insert Data'})
        return Response(serializer.errors)
    
    def put(self,request, pk, format=None):
       
        fData = FinancialData.objects.get(id=pk)
        serializer = FinancialDataSerializer(fData, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Successfully Updated Data'})
        return Response(serializer.errors)
    def patch(self,request, pk, format=None):
        id = pk
        fData = FinancialData.objects.get(id=pk)
        serializer = FinancialDataSerializer(fData, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Partially Update Data'})
        return Response(serializer.errors)
    
    def delete(self,request, pk, format=None):
        id = pk
        fData = FinancialData.objects.get(id=pk)
        fData.delete()
        return Response({'msg':'Successfully Deleted Data'})



