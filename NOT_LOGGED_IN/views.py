from django.shortcuts import render

def landing_page(request):
    return render(request, 'NOT_LOGGED_IN/landing_page.html')

# Create your views here.
