# Generated by Django 4.0.3 on 2022-07-19 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("parks_rest", "0005_alter_park_address_alter_park_city_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="park",
            name="address",
            field=models.CharField(max_length=250),
        ),
    ]
