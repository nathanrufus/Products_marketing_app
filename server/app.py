# from flask import Flask,request
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from sqlalchemy import MetaData
# import base64 
from App import create_app

app=create_app()

@app.route('/', methods=["GET"])
def home():
    return "welcome home"


if __name__=='__main__':
    app.run(debug=True)