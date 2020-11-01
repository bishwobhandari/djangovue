from django.shortcuts import render
from django.conf import settings
from django.contrib import auth
from django.contrib.auth import login as django_login, logout as django_logout

from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication

from .serializers import UserSerializer, LoginSerializer
# Create your views here.

class RegisterView(GenericAPIView):
    serializer_class = UserSerializer
    def post(self, request):
        print(request.data)
        serializer =UserSerializer(data=request.data)
        print(serializer.is_valid())
        print(serializer.errors)
        if serializer.is_valid():
            print("valid serializer")
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        django_login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token":token.key}, status=status.HTTP_200_OK)
        
        

class LogoutView(APIView):
    authentication_classes=(TokenAuthentication, )

    def post(self, request):
        request.user.auth_token.delete()
        django_logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)