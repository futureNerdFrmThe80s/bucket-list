# Generated by Django 4.0.3 on 2022-08-02 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_rest', '0008_alter_account_parks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='parks',
            field=models.ManyToManyField(default=None, null=True, related_name='Accounts', serialize=False, to='users_rest.parkvo'),
        ),
    ]
