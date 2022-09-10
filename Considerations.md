
I. Database design:
-----------------------

Approach1: This is the finalized approach. 2 database tables- 1.Users and 2. Courses.

Approach2: This design suggest to use 3 data tables- 1. Users 2.Joined Courses 3. Created courses

Rationale: Earlier at the start of design, I thought to create 3 database tables- User, Joined course, Created course but to reduce data redundancy and data complexity, I have considered to use appraoch-1 which has only 2 tables-1. Users as a datatable where we can store all the user details and courses joined (in CSV format) as part of Users database table and 2.Courses database table stores course information and users in CSV format. Approach-2 is disadvantageous as two tables for created courses and Joined courses create a redundancy and complexity to maintain and use data. Hence, I opted approach-1 as my final database design.

Finalized database tables ( schema):
----------------------------------------------

1.Users
-------

Name
Email (PK)
Password (Hashed)
Createdcourses :[](contains course ids which are created by user)
JoinedCourses:[](contains course ids which are joined by user)


2. Courses: 
-----------
Title
Subject
capacity
Creator
StartDate
StartTime
EndDate
EndTime
Users:[](contains users who are enrolled including creator)



II. Security Considerations:
-----------------------

1.Unique Email ID:
------------------
 For any user to login and perform the activities, I have considered Email as a primary key for Users table so that user should have an unique email id to signup and login. 
 
2.Hashed Password:
-------------------
 Password for every user to login is stored in a hashed format inline to the Email in the Users database table which is secure enough.

3. Invalid users cant login to the application which restricts unauthorized users to login and perform.

III.Readability:
----------------
The application is designed in such a way that user should not feel discomfort while using the app,That's why responsive web design also used to ensure users can use the application despite of mobile,laptop or tab.

IV.Maintability:
---------------
1.clean and consistent coding standard. 
2.Used user readable and sensible names. 
3.Clear and concise. 
4.Minimized complex conditional and nested logic

V.Scalability
-------------
Doesn't limited the no.of sessions created by User.

