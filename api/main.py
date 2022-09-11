import requests
import os
from flask import Flask, request
from dotenv import load_dotenv

# load parameters from env local file
load_dotenv(dotenv_path="./.env.local")

# fetch key from environment variable  
UNSPLASH_API_KEY = os.environ.get("UNSPLASH_KEY", "");
UNSPLASH_API_URL = "https://api.unsplash.com";
DEBUG = bool(os.environ.get("DEBUG", True));

if not UNSPLASH_API_KEY:
    raise EnvironmentError("Please create .env.local file and insert UNSPLASH_KEY")

app = Flask(__name__)

app.config["DEBUG"] = DEBUG

@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_API_KEY
    }
    
    params= {
        "query": word    
    }
    
    response = requests.get(url=UNSPLASH_API_URL + "/photos/random/", params=params, headers=headers)
    data = response.json()
    
    return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)