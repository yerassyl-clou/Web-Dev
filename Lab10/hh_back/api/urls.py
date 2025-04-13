from django.urls import path

from .views import vacancy_detail, companies_list, company_detail, vacancies_by_company, \
    vacancies_list, top_ten_vacancies

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', vacancies_by_company),

    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten_vacancies),
]