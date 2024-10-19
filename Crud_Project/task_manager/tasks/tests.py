from rest_framework.test import APITestCase
from rest_framework import status
from .models import Task

class TaskTests(APITestCase):
    def test_create_task(self):
        url = '/api/tasks/'
        data = {'title': 'Test Task', 'description': 'Test Description', 'status': 'Pending'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_tasks(self):
        Task.objects.create(title="Test Task", description="Test Description", status="Pending")
        url = '/api/tasks/'
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
