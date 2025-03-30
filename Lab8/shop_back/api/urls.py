from django.urls import path
from .views import category_list, category_detail, product_list, product_detail, products_by_category


urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:id>/', category_detail),

    path('products/', product_list),
    path('products/<int:id>/', product_detail),
    path('categories/<int:category_id>/products/', products_by_category),
]