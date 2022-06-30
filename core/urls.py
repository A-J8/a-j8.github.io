from unittest.mock import patch
from django.urls import path
from .views import *

urlpatterns = [
    path('', index,name="index"),
    path('pagLoginHtml', pagLoginHtml ,name="pagLoginHtml"),
    path('carrito', carrito ,name="carrito"),
    path('misCompras', misCompras ,name="misCompras"),
    path('seguimientoDespacho', seguimientoDespacho ,name="seguimientoDespacho"),
    path('suscripciones', suscripciones ,name="suscripciones"),
    path('crudHtml', crudHtml ,name="crudHtml"),
    path('promociones', promociones ,name="promociones"),
    path('agregarProducto', agregarProducto ,name="agregarProducto"),
    path('agregarDescuento', agregarDescuento ,name="agregarDescuento"),
]