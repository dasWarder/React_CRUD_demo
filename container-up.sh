#!/bin/bash

docker-compose down

mvn clean package

docker-compose up -d