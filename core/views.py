from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'core/index.html')

def pagLoginHtml(request):
    return render(request, 'core/pagLoginHtml.html')

def carrito(request):
    return render(request, 'core/Carrito_1.html')

def misCompras(request):
    return render(request, 'core/Mis_compras_1.html')    

def seguimientoDespacho(request):
    return render(request, 'core/Seguimiento_despacho.html')

def suscripciones(request):
    return render(request, 'core/sus.html')  

def crudHtml(request):
    return render(request, 'core/crudHtml.html')    

def promociones(request):
    return render(request, 'core/crudPromHtml.html')

def agregarProducto(request):
    return render(request, 'core/AgregarProducto.html')

def agregarDescuento(request):
    return render(request, 'core/agregarDesc.html')    