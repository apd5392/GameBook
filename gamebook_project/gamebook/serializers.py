from rest_framework import serializers
from .models import Game, Review, User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    games = serializers.HyperlinkedRelatedField(
        view_name='game_detail',
        many=True,
        read_only=True
    )
    class Meta:
       model = User
       fields = ('userName', 'firstName', 'lastName', 'email', 'games',)

class GameSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )
    class Meta:
        model = Game
        fields = ('user', 'title', 'genre', 'console',)

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    review = serializers.HyperlinkedRelatedField(
        view_name='game_detail',
        read_only=True
    )
    class Meta:
        model = Review
        fields = ('user', 'game', 'content', 'like',)
