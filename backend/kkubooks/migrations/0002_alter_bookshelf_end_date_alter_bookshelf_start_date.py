# Generated by Django 4.0.3 on 2022-03-23 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kkubooks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookshelf',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='bookshelf',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
