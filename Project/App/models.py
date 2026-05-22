from django.db import models

# Create your models here.
class Categoria(models.Model):
    Nombre = models.CharField(max_length=50)
    Descripcion = models.TextField(blank=True)

    def __str__(self):
        return self.Nombre


class Producto(models.Model):
    Nombre = models.CharField(max_length=100)
    Precio = models.DecimalField(max_digits=10, decimal_places=2)
    Stock = models.PositiveIntegerField()
    Descripcion = models.TextField()
    Categoria = models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE,
        related_name="productos"
    )

    def __str__(self):
        return self.Nombre


class ImagenProducto(models.Model):
    Producto = models.ForeignKey(
        Producto,
        on_delete=models.CASCADE,
        related_name="imagenes"
    )
    Imagen = models.ImageField(upload_to="productos/")

    def __str__(self):
        return f"Imagen de {self.Producto.Nombre}"


class Pedido(models.Model):
    Fecha = models.DateTimeField(auto_now_add=True)

    ESTADOS = [
        ('PENDIENTE', 'Pendiente'),
        ('PAGADO', 'Pagado'),
        ('ENVIADO', 'Enviado'),
        ('ENTREGADO', 'Entregado'),
    ]

    Estado = models.CharField(
        max_length=20,
        choices=ESTADOS,
        default='PENDIENTE'
    )

    Total = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    def __str__(self):
        return f"Pedido #{self.id}"


class DetallePedido(models.Model):
    Pedido = models.ForeignKey(
        Pedido,
        on_delete=models.CASCADE,
        related_name="detalles"
    )

    Producto = models.ForeignKey(
        Producto,
        on_delete=models.CASCADE
    )

    Cantidad = models.PositiveIntegerField()
    PrecioUnitario = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    Subtotal = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    def __str__(self):
        return f"{self.Producto.Nombre} x {self.Cantidad}"