# Generated by Django 4.0.3 on 2022-07-19 22:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("parks_rest", "0006_alter_park_address"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="park",
            name="address",
        ),
    ]
