#Quick Setup Guide for Django Task Management Project
Prerequisites
Install Python (3.x) and pip.
1. Project Setup
Install Django using pip.
Create a new Django project named task_manager.
Inside the project, create a new app named tasks and add it to the project's settings.
2. Create the Task Model
Define a Task model with fields for title, description, and status (Pending or Completed).
Run the necessary migrations to create the database table for the Task model.
3. Set Up CRUD Views
Create views to handle:
Listing all tasks.
Creating a new task.
Updating an existing task.
Deleting a task.
Set up URL patterns to map these views to specific URLs in the app.
4. Create HTML Templates
Create templates for:
Displaying the list of tasks.
A form for creating a new task.
A form for updating an existing task.
Place these templates in a dedicated folder inside the tasks app.
5. Run the Project
Start the Django development server.
Access the application in your web browser at http://127.0.0.1:8000/tasks/.
