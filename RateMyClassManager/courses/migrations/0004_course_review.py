# Generated by Django 2.1.7 on 2019-04-09 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_remove_course_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='review',
            field=models.CharField(max_length=1000, null=True),
        ),
    ]