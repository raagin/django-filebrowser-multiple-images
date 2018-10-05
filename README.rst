Add Multiple Images Iniline in Django Filebrowser
=================================================
Allow to add multiple images in django-filebrowser module if "image" field exists in inline model.

Installation
------------

```
pip install https://github.com/raagin/django-filebrowser-multiple-images.git
```

Requirements
------------
Same as for  https://github.com/sehmaschine/django-filebrowser/


Using
-----
Add 'multiple_images_inline' in INSTALLED_APPS in django settings
You need 'image' field in your inline model

in admin.py add MultipleImagesInlines module to your main admin model not in inline model.

```
from multiple_images_inline.admin import MultipleImagesInlines

class YourModelAdmin(MultipleImagesInlines):
	pass
```

Then you should see 'Add multiple images' button in inlines.
