from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from .models import Vacancy, Company


def companies_list(request):
    companies = Company.objects.all()
    return JsonResponse([c.to_json() for c in companies], safe=False)


def company_detail(request, company_id):
    company = get_object_or_404(Company, id=company_id)  # Change company_id to id
    return JsonResponse(company.to_json())

def vacancies_by_company(request, category_id):
    vacancies = Vacancy.objects.filter(category_id=category_id)
    return JsonResponse([v.to_json() for v in vacancies], safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse([v.to_json() for v in vacancies], safe=False)

def vacancies_detail(request, vacancy_id):
    vacancy = get_object_or_404(Vacancy, id=vacancy_id)
    return JsonResponse(vacancy.to_json())

def top_ten_vacancies(request): #sorted by salary
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse([v.to_json() for v in vacancies], safe=False)