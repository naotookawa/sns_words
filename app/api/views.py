# api/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def hello_view(request):
    if request.method == 'POST':
        return JsonResponse({'message': 'hello'})
    return JsonResponse({'error': 'Invalid method'}, status=405)