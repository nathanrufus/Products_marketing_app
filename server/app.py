from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app=Flask(__name__)
db=SQLAlchemy()

app.config["SQLALCHEMY_DATABASE_URI"]='sqlite:///product.db'

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/', methods=["GET"])
def home():
    return "welcome home"

class Users(db.Model):
    __tablename__='users'
    user_id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    password=db.Column(db.String(100))

    def serialize(self):
        return{
            self.id:"id",
            self.name:"name",
            self.email:"email",
            self.password:"password"
        }
class Animals(db.Model):
    __tablename__='animals'
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    descripton=db.Column(db.Text(500))
    user_email=db.Column(db.String(100), db.ForeignKey('users.email'))
    number=db.Column(db.Integer())
    price=db.Column(db.Integer())

    def serialize(self):
        return{
            self.id:"id",
            self.name:"name",
            self.descripton:"descripton",
            self.user_email:"user_email",
            self.number:"number",
            self.price:"price",
        }

class Fruits(db.Model):
    __tablename__='fruits'
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    descripton=db.Column(db.Text(500))
    user_email=db.Column(db.String(100), db.ForeignKey('users.email'))
    number=db.Column(db.Integer())
    price=db.Column(db.Integer())

    def serialize(self):
        return{
            self.id:"id",
            self.name:"name",
            self.descripton:"descripton",
            self.user_email:"user_email",
            self.number:"number",
            self.price:"price",
        }

class Crops(db.Model):
    __tablename__='crops'
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    descripton=db.Column(db.Text(500))
    user_email=db.Column(db.String(100), db.ForeignKey('users.email'))
    number=db.Column(db.Integer())
    price=db.Column(db.Integer())

    def serialize(self):
        return{
            self.id:"id",
            self.name:"name",
            self.descripton:"descripton",
            self.user_email:"user_email",
            self.number:"number",
            self.price:"price",
        }

class Profile(db.Model):
    __tablename__='profiles'
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    descripton=db.Column(db.Text(500))
    user_email=db.Column(db.String(100), db.ForeignKey('users.email'))
    number=db.Column(db.Integer())
    price=db.Column(db.Integer())

    def serialize(self):
        return{
            self.id:"id",
            self.name:"name",
            self.descripton:"descripton",
            self.user_email:"user_email",
            self.number:"number",
            self.price:"price",
        }

if __name__=='__main__':
    app.run(debug=True)