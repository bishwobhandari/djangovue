from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import exceptions

class UserSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=65, min_length=8, write_only=True)
    email=serializers.EmailField(min_length=8, )
    first_name=serializers.CharField(max_length=65, min_length=2)
    last_name=serializers.CharField(max_length=65, min_length=2)

    class Meta:
        model=User
        fields=['username', 'first_name', 'last_name', 'email', 'password']

    def create(self, validated_data):
        print("create method")
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        print("validate method", data)
        username = data.get("username","")
        password = data.get("password","")

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                if user.is_active:
                    data['user']= user
                else:
                    raise exceptions.ValidationError("user is not active")
            else:
                raise exceptions.AuthenticationFailed("Login failed")
        else:
            raise exceptions.ValidationError("must provide username and  password")
        return data