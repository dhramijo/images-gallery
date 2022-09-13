# Image name
FROM python:3.10

# image directory in docker container
WORKDIR /app

# port
EXPOSE 5050

# required files into image
COPY Pipfile Pipfile.lock ./

# packages
RUN pip install pipenv
# extract packages under [packages] section in the Pipfile
RUN pipenv requirements > requirements.txt 
# install all dependencies from requirements.txt file
RUN pip install -r requirements.txt

# all remaining application files into working directory
COPY . ./

# execution command to run the app
CMD [ "python", "main.py" ]