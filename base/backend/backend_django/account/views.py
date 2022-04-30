from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializers import AccountSerializers
from .models import Account

class GetUser(APIView):
    def get(self, request, pk):
        account = Account.objects.get(id=pk)
        serializer = AccountSerializers(account, many=False)

        return Response(serializer.data)

class RegisterUser(APIView):
    def post(self, request):
        serializer = AccountSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)

        else:
            return Response('Error with creating user')

        return Response(serializer.data)



from django.shortcuts import render

# Create your views here.
