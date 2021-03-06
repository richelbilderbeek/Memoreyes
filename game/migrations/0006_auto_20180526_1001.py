# Generated by Django 2.0.3 on 2018-05-26 09:01

from django.db import migrations, models
import game.models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0005_game_joinid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='joinid',
            field=models.IntegerField(default=game.models.generate_game_id),
        ),
        migrations.AlterField(
            model_name='game',
            name='opencard1',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='opencard2',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='player1_score',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='game',
            name='player2_score',
            field=models.IntegerField(default=0),
        ),
    ]
