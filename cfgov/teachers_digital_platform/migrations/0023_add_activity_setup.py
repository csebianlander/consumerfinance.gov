# Generated by Django 2.2.16 on 2020-11-24 00:36

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teachers_digital_platform', '0022_modify_on_delete_for_django2'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActivitySetUp',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_setup', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True)),
                ('card_order', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True)),
                ('facet_setup', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True)),
            ],
        ),
    ]
