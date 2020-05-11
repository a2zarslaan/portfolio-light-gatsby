---
title: "Cityman: City Management System"
date: "Jan 2019 – Apr 2019"
type: "Front End"
---

A mobile first and responsive web application with a decentralised and distributed architecture for managing Dublin Bikes, Dublin Bus and Luas. The application uses Django on the server side, Google Cloud Platform’s PostgreSQL database service for database, and Flask, uWSGI and Nginx for prediction microservices. Developed using Agile framework of Extreme Programming, it uses Bootstrap V4.0 for styling and interactivity, Bokeh Python library for analytics, Folium for map rendering which internally uses Leaflet.js for final map delivery, and is deployed on Google Cloud Platform.

## Requirements

Compute engine ( Any UNIX flavor machine ) with Python 3 installed
Postgres installed

## DB setup

after downloading the SQL dump (dump.sql) run below command to setup db ( postgres should be installed in the system):
psql -U postgres -W -f dump.sql
it will ask for a password, please use "citymangroup6"

## Source code setup

clone the code repository using below command:
git clone https://github.com/a2zarslaan/cityman.git

## To run the server run below command

pip install requirements.txt
python manage.py runserver

it will start the server locally

## To set up data Aggregators:

-- run the following command: crontab -e

it will open a file add below three lines in it:

- - - - - python3 <Path to cityman folder>/Aggregators/data_aggregator.py
- - - - - python3 <Path to cityman folder>/Aggregators/luas*real_time.py
          */10\_ \* \* \* python3 <Path to cityman folder>/Aggregators/dart_real_time.py

<br />
<br />

# [See Project](https://github.com/a2zarslaan/cityman)
