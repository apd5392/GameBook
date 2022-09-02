from django.db import models

CONSOLE_CHOICES = [
    ('xbox one', 'Xbox One'),
    ('xbox series x', 'Xbox Series X'),
    ('xbox series s', 'Xbox Series s'),
    ('ps4', 'PS4'),
    ('ps5', 'PS5'),
    ('nintendo switch', 'Nintendo Switch'),
    ('pc', 'PC'),
]

# Create your models here.


class User(models.Model):
    userName = models.CharField(max_length=100)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.userName


class Game(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='games')
    title = models.CharField(max_length=100, default='no game title')
    genre = models.CharField(max_length=100, default='no game genre')
    console = models.CharField(max_length=100, choices= CONSOLE_CHOICES, default="Choose Console")

    def __str__(self):
        return self.title


class Review(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='reviews')
    game = models.ForeignKey(
        Game, on_delete=models.CASCADE, related_name='game_reviews')
    content = models.TextField(blank=False)
    like = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.content
