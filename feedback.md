# Sustainable Development Goal 3 (Good Health and Well-being).

# Problem Statement:

Reducing Harmful Alcohol Consumption Among Young Adults Using Data-Driven Interventions

# Specific Problem:

Excessive alcohol consumption among young adults (ages 18-30) is a major public health issue, leading to increased risks of chronic diseases, accidents, and mental health disorders. Traditional awareness and intervention programs have had limited success in reducing harmful drinking habits within this demographic.

# How Data Can Address This Problem:

A data-driven approach can provide personalized insights and interventions to help young adults make informed decisions about alcohol consumption. By collecting and analyzing data on drinking habits, mental health assessments, and lifestyle factors, the application can offer targeted support and recommendations.

# Solution Overview:

1. Personalized Self-Assessment Tools:

Users can regularly input their alcohol consumption data, including type, quantity, and context (e.g., social setting, stress relief).
The application can provide real-time feedback on their drinking habits and how they compare to healthy guidelines. 2. Predictive Analytics for Risk Assessment:

Using data such as past consumption patterns, self-reported mental health, and lifestyle choices, the application can assess the risk of developing alcohol-related health issues.
This risk assessment can be used to trigger interventions, such as recommendations for reducing intake, seeking counseling, or educational content. 3. Data-Driven Goal Setting:

The application can help users set realistic goals for reducing alcohol consumption based on their current patterns.
Progress towards these goals can be tracked and visualized, motivating users to stay committed. 4. Community Support and Resources:

Users can be connected to local or online support groups based on their risk levels and goals.
Data on common challenges and success stories within the community can be shared to provide additional motivation and support.

# Impact:

By using data to tailor interventions and support, this solution can more effectively reduce harmful alcohol consumption among young adults, leading to improved health outcomes and overall well-being. The data collected can also be used to inform public health strategies and policies aimed at reducing alcohol-related harm.

# Database Design:

ERD Diagram: https://drive.google.com/file/d/1uGYACSLB4mFoG3-MuOAcw2a2HBfyd3kp/view?usp=sharing

Schema design is build on sequelize and sample data is seeded.

# SQL Programing

1. Data Retrieval:

These queries will help retrieve relevant data from the database to monitor and evaluate the issue of alcohol consumption.
Query 1: Retrieve all users

Retrieve all user details from the Users table:
\*SELECT \* FROM Users;\*

Query 2: Retrieve all alcohol consumption records for a specific user

Retrieve all alcohol consumption records for a particular user based on user_id:
\*SELECT \* \*
FROM Alcohol_Consumptions
WHERE user_id = 1; \*

Query 3: Retrieve goals for a user

Fetch all goals that a user has set regarding alcohol consumption:
\*SELECT \*
FROM Goals
WHERE user_id = 1; \*

Query 4: Retrieve all self-assessments for a user

This query will retrieve all the self-assessments that a user has conducted:
\*SELECT \*
FROM Self_Assessments
WHERE user_id = 1; \*

Query 5: Retrieve all consultations for a user

Fetch all consultations that a user has had, along with recommendations:
\*SELECT \*
FROM Consultations
WHERE user_id = 1; \*

Query 6: Retrieve resources related to alcohol consumption

Retrieve all available resources related to alcohol consumption awareness:
\*SELECT \*
FROM Resources
WHERE title LIKE '%Alcohol%';\*

Sure! Let's walk through the Data Retrieval and Data Analysis steps, aligned with your schema and SDG problem definition (alcohol consumption and its impact on health).

1. Data Retrieval:

These queries will help you retrieve relevant data from the database to monitor and evaluate the issue of alcohol consumption.
Query 1: Retrieve all users

Retrieve all user details from the Users table.

sql

SELECT \* FROM Users;

Query 2: Retrieve all alcohol consumption records for a specific user

Retrieve all alcohol consumption records for a particular user based on user_id.

sql

SELECT \*
FROM Alcohol_Consumptions
WHERE user_id = 1;

Query 3: Retrieve goals for a user

Fetch all goals that a user has set regarding alcohol consumption.

sql

SELECT \*
FROM Goals
WHERE user_id = 1;

Query 4: Retrieve all self-assessments for a user

This query will retrieve all the self-assessments that a user has conducted.

sql

SELECT \*
FROM Self_Assessments
WHERE user_id = 1;

Query 5: Retrieve all consultations for a user

Fetch all consultations that a user has had, along with recommendations.

sql

SELECT \*
FROM Consultations
WHERE user_id = 1;

Query 6: Retrieve resources related to alcohol consumption

Retrieve all available resources related to alcohol consumption awareness.

sql

SELECT \*
FROM Resources
WHERE title LIKE '%Alcohol%';

2. Data Analysis:

These queries will help you analyze the data and generate insights regarding alcohol consumption, risks, and progress towards goals.
Query 1: Analyze total alcohol consumption for each user

This query will calculate the total amount of alcohol consumed by each user:
/_
SELECT user_id, SUM(amount) AS total_consumption
FROM Alcohol_Consumptions
GROUP BY user_id;
/_

Query 2: Analyze average alcohol consumption per session for a user

This query will calculate the average amount of alcohol consumed per session for a particular user:
/_
SELECT AVG(amount) AS average_consumption
FROM Alcohol_Consumptions
WHERE user_id = 1;
/_

Query 3: Analyze the number of high-risk users based on self-assessments

This query will count how many users have been flagged as "High" risk in their self-assessments.

/_
SELECT COUNT(DISTINCT user_id) AS high_risk_users
FROM Self_Assessments
WHERE risk_level = 'High';
/_

Query 4: Analyze progress of users toward their goals

This query will give you an overview of how many users have completed their goals and how many are still in progress or have not started.

/_
SELECT status, COUNT(_) AS user_count
FROM Goals
GROUP BY status;
/\*

Query 5: Retrieve users who have consulted with providers and their recommendations

This query will show users who have had consultations along with the recommendations given by the provider.

/_SELECT u.name, c.date, c.provider_name, c.recommendations
FROM Users u
JOIN Consultations c ON u.user_id = c.user_id;
/_

Query 6: Analyze consumption context to determine the most common context for drinking

This query will help identify in what context people are most likely to consume alcohol.

/_
SELECT context, COUNT(_) AS context_count
FROM Alcohol_Consumptions
GROUP BY context
ORDER BY context_count DESC;
/\*

Query 7: Aggregate assessment scores and analyze trends

This query will aggregate the scores from the self-assessments and group them by users to observe trends.

/_
SELECT user_id, SUM(scores) AS total_scores
FROM Self_Assessments
GROUP BY user_id;
/_

Query 8: Analyze the distribution of users based on age and risk level

This query will help analyze the relationship between users' age and their alcohol risk level.

/_
SELECT u.age, sa.risk_level, COUNT(_) AS count
FROM Users u
JOIN Self_Assessments sa ON u.user_id = sa.user_id
GROUP BY u.age, sa.risk_level;
/\*

# Data Analysis Using Excel:

## Step 1: Importing Data

I imported the CSV files into Excel for each dataset (Users, Goals, Consultations, Alcohol_Consum
ptions, Self_Assessments).

## Step 2: Data Cleaning

I ensured all data is correctly formatted and there are no missing values.

## Step 3: Data Analysis

I then used Excel's built-in functions and pivot tables to analyze the data. For example, use the `
COUNTIFS` function to count the number of users who have consulted with providers and their recommendations.

## Step 4: Visualization

I used Excel's charting capabilities to visualize the data. For example, create a bar chart to show
the most common context for drinking.

## Step 5: Insights

I have in my dashboard drawn conclusions from the data analysis and visualized results.

## Step 6: Reporting:

https://1drv.ms/x/s!AjTAHEX1vokcmEfHEbECVnuzgVl6?e=tAEMy1

# Part 5: Integration and Testing

The images in the images directory are relative screenshots to how seeded data was imported into excell.
I opted to use DBeaver for my database since I am using a linux distribution that is not compatible with mysql workbench.

# Part 6: Presentation

https://www.canva.com/design/DAGOl8tarAM/oUDPGIwCGhRNgwqFG33GhA/edit?utm_content=DAGOl8tarAM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
