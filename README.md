# Project is unmantained!

## Add Multiple Images in Inline Model with Django Filebrowser

Allow to add multiple images in django-filebrowser module if "image" field exists in inline model.

## Installation

```bash
pip install git+https://github.com/raagin/django-filebrowser-multiple-images.git
```

## Requirements

Same as for  https://github.com/sehmaschine/django-filebrowser/


## Using

Add 'multiple_images_inline' in INSTALLED_APPS in django settings.
Before "filebrowser"
```python
INSTALLED_APPS = [
	...
	'multiple_images_inline',
	'filebrowser',
	...
]
```

You need 'image' field in your model that you what to use as inline model in admin.py!

Add MultipleImagesInlines module to your main admin model not in inline model.

```python
from multiple_images_inline.admin import MultipleImagesInlines

class YourModelAdmin(MultipleImagesInlines):
	pass
```

Then you should see 'Add multiple images' button in inlines.

## TODO

when user add/remove inline by tradinional way it should reflect on "add multyple" button (set_multiple_button_href)
