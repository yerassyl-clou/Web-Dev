from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Category, Product

def category_list(request):
    categories = Category.objects.all()
    return JsonResponse([c.to_json() for c in categories], safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category.to_json())


def product_list(request):
    products = Product.objects.all()
    return JsonResponse([p.to_json() for p in products], safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product.to_json())

def products_by_category(request, category_id):
    products = Product.objects.filter(category_id=category_id)
    return JsonResponse([p.to_json() for p in products], safe=False)