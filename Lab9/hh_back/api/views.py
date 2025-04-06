from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404

from .models import Company, Vacancy


def companies_list(request):
    companies = Company.objects.all()
    return JsonResponse([c.to_json() for c in companies], safe=False)

def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    return JsonResponse(company.to_json())

def vacancies_by_company(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    return JsonResponse([v.to_json() for v in vacancies], safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse([v.to_json() for v in vacancies], safe=False)

def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    return JsonResponse(vacancy.to_json())

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse([v.to_json() for v in vacancies], safe=False)