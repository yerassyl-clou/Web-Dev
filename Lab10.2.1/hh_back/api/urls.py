from django.urls import path

from .views import companies_list, company_detail, vacancies_by_company, VacancyDetailAPIView, TopTenVacancyListAPIView, VacancyListAPIView

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', vacancies_by_company),

    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', TopTenVacancyListAPIView.as_view()),
]