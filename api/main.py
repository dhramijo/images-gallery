from crypt import methods
import os
import requests
from flask_cors import CORS
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from mongo_client import mongo_client

# create 'gallery' database
gallery = mongo_client.gallery
# create 'images collection' in 'gallery' db
images_collection = gallery.images

# load parameters from env local file
load_dotenv(dotenv_path="./.env.local")

# fetch key from environment variable
UNSPLASH_API_KEY = os.environ.get("UNSPLASH_KEY", "")
UNSPLASH_API_URL = "https://api.unsplash.com"
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNSPLASH_API_KEY:
    raise EnvironmentError("Please create .env.local file and insert UNSPLASH_KEY")

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = DEBUG


@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {"Accept-Version": "v1", "Authorization": "Client-ID " + UNSPLASH_API_KEY}

    params = {"query": word}

    response = requests.get(
        url=UNSPLASH_API_URL + "/photos/random/",
        params=params,
        headers=headers,
        timeout=10,
    )
    data = response.json()

    return data


@app.route("/images", methods={"GET", "POST"})
def images():
    if request.method == "GET":
        # read images from database
        images = images_collection.find({})
        return jsonify([img for img in images])
    if request.method == "POST":
        # save image in the database
        image = request.get_json()
        image["_id"] = image.get("id")
        result = images_collection.insert_one(image)
        inserted_id = result.inserted_id
        return {"inserted_id": inserted_id}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
