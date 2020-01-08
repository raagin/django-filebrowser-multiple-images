import os
from setuptools import setup, find_packages


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()

setup(
    name='django-filebrowser-multiple-images',
    version='1.0.2',
    description='''Add Multiple Images in Inline Model with Django Filebrowser. 
                    Allow to add multiple images if "image" field exists in inline model''',
    long_description=read('README.md'),
    url='',
    download_url='',
    author='Yura Raagin',
    author_email='y.raagin@gmail.com',
    license='BSD',
    packages=find_packages(),
    include_package_data=True,
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Framework :: Django :: 1.11/2',
        'Intended Audience :: Developers',
        'License :: MIT',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
    ],
    zip_safe=False,
    install_requires=[],
)
