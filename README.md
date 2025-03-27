# Quiz-4-Semi-Final-Group-D API

## Project Description
This is a Node.js API for **Group D** of the **Quiz-4 Semi-Final**. The API is designed to manage exams with basic CRUD operations, including adding, retrieving, and updating exam records.

## Table of Contents
Contributors  
API Documentation  
Setup Instructions

## Contributors
Chan: Added Get `/exams` endpoint (returns a list of exams).  
Carungay: Added Post `/exams` endpoint (adds a new exam to an array).  
Cobol: Added Update `/exams/:id` endpoint (updates an exam based on ID).

## API Documentation

### Endpoints

1. **GET /exam-group**
   - **Description**: A placeholder route to confirm the API is running.
   - **Response**:
     ```json
     {
       "message": "Group D API"
     }
     ```

2. **GET /exams**
   - **Description**: Returns a list of exams.
   - **Response**:
     ```json
     [
       {
         "id": 1,
         "name": "Math Exam"
       },
       {
         "id": 2,
         "name": "Science Exam"
       }
     ]
     ```

3. **POST /exams**
   - **Description**: Adds a new exam to the exams array.
   - **Request Body**:
     ```json
     {
       "name": "New Exam"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Exam added successfully"
     }
     ```

4. **PUT /exams/:id**
   - **Description**: Updates the exam with the given ID.
   - **Request Body**:
     ```json
     {
       "name": "Updated Exam Name"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Exam updated successfully"
     }
     ```

## Setup Instructions

### 1. Clone the repository
   ```bash
   git clone https://github.com/<your_username>/Quiz-4-Semi-Final-Group-D-api.git
   cd Quiz-4-Semi-Final-Group-D-api
