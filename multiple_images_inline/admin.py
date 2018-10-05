from django.contrib import admin

class MultipleImagesInlines(admin.ModelAdmin):

    class Media:
        js = (
            '/static/multiple_images_inline/multiple_images_inline.js',
            )