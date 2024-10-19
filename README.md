Task Manager
Requirements
Python 3.x: Make sure you have Python 3 installed. Check by running python --version in your terminal.
Django: A web framework for building applications.
Django REST Framework: A toolkit for creating APIs.
Setup
1. Clone the repository
Open your terminal and run:
bash
Copy code
git clone <repository-url>
Replace <repository-url> with the link to your project.
2. Install dependencies
Navigate to the project folder:
bash
Copy code
cd task_manager
Install the required packages:
bash
Copy code
pip install django djangorestframework
3. Migrate the database
Set up the database with:
bash
Copy code
python manage.py migrate
4. Run the server
Start the development server:
bash
Copy code
python manage.py runserver
Open your browser and go to http://127.0.0.1:8000/ to see your application.
Usage
API Access: Use http://127.0.0.1:8000/api/tasks/ to manage tasks.
HTML Page: Open your HTML file in a browser to create and view tasks.
