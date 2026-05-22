# Harry Potter

Aplicación web desarrollada con Django que presenta información sobre el universo de Harry Potter, incluyendo personajes, casas y hechizos.

## Requisitos

- Python 3.13 o superior
- Django 6.0.5

## Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd Harry-Potter/Project
```

Instalar las dependencias del proyecto:

```bash
pip install -r Requirements.txt
```

## Ejecución

Aplicar migraciones:

```bash
python manage.py migrate
```

Iniciar el servidor de desarrollo:

```bash
python manage.py runserver
```

Abrir en el navegador:

```text
http://127.0.0.1:8000/
```

## Estructura del proyecto

```text
Project/
│
├── App/
│   ├── static/
│   ├── templates/
│   ├── views.py
│   ├── models.py
│   └── urls.py
│
├── Media/
│
├── Project/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── manage.py
├── db.sqlite3
├── Requirements.txt
└── Readme.md
```

## Tecnologías utilizadas

- Python
- Django
- Django REST Framework
- Django CKEditor
- HTML5
- CSS3
- JavaScript
- Pillow

## Autor

Pablo Gareis

## Aviso Legal

Este proyecto fue desarrollado exclusivamente con fines educativos y de aprendizaje.

Harry Potter, sus personajes, nombres, casas, hechizos, imágenes y demás elementos relacionados son propiedad intelectual de sus respectivos titulares de derechos. Este proyecto no tiene fines comerciales ni pretende infringir derechos de autor, marcas registradas ni cualquier otro derecho de propiedad intelectual.

Todo el contenido utilizado tiene como único propósito la práctica, el aprendizaje y la demostración de habilidades de desarrollo web mediante Django.

## Licencia

Este repositorio se distribuye únicamente con fines educativos y académicos.

No se autoriza el uso comercial de recursos protegidos por derechos de autor que puedan encontrarse incluidos o referenciados en el proyecto.