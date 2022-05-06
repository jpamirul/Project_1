from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializers import BudgetSerializer
from .models import Budget

class BudgetDetails(APIView):
    def get(self, request):
        budget = Budget.objects.all()
        serializer = BudgetSerializer(budget, many=True)

        return Response(serializer.data)

class BudgetInput(APIView):
    def post(self, request):
        serializer = BudgetSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)

        else:
            return Response('Error with input')

class BudgetUpdate(APIView):
    def patch(self, request, pk):
        budget = Budget.objects.get(id=pk)
        serializer = BudgetSerializer(instance=budget, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

class BudgetDelete(APIView):
    def delete(self, request, pk):
        budget = Budget.objects.get(id=pk)
        budget.delete()

        return Response('Budget input has been deleted')

class pieBudgetDetails(APIView):
    def get(self, request, pk):
        budget = Budget.objects.get(date=pk)
        serializer = BudgetSerializer(budget, many=False)

        return Response(serializer.data)
