from django.contrib import admin
from seotr.models import (
    KeywordsTr,
    HomeSeoTr,
    SliderImage,
    
)


SEO_FIELDS = ('seo_title', 'meta_description', 'meta_keywords')

admin.site.site_header = 'ESTE SAĞLIK'

admin.site.register(KeywordsTr)


@admin.register(HomeSeoTr)
class HomeSeoTrAdmin(admin.ModelAdmin):
    fields = ('cover_image', ) + SEO_FIELDS

admin.site.register(SliderImage)
