# Generated by Django 4.1 on 2022-09-02 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gamebook', '0002_game_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='like',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]