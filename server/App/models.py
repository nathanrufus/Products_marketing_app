class Users(db.Model):
    __tablename__='users'
    user_id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    password=db.Column(db.String(100))
    user_fruits=db.relationship("Fruits" ,backref='user', lazy='dynamic')
    user_animals=db.relationship("Animals" ,backref='user', lazy='dynamic')
    user_crops=db.relationship("Crops" ,backref='user', lazy='dynamic')
    user_rofile=db.relationship("Profile" ,backref='user', uselist='false')


    def serialize(self):
        return{
            "user_id":self.user_id,
            "name":self.name,
            "email":self.email,
            "password":self.password
        }
class Animals(db.Model):
    __tablename__='animals'
    id=db.Column(db.Integer(),primary_key=True)
    animal_photo = db.Column(db.LargeBinary) 
    name=db.Column(db.String(100))
    descripton=db.Column(db.Text(500))
    number=db.Column(db.Integer())
    price=db.Column(db.Integer())
    user_id=db.Column(db.Integer(), db.ForeignKey('users.user_id'))


    def serialize(self):
        return{
            "id":self.id,
            "name":self.name,
            "animal_photo":self.animal_photo,
            "descripton":self.descripton,
            "user_email":self.user_email,
           "number" :self.number,
           "price" :self.price,
        }

class Fruits(db.Model):
    __tablename__='fruits'
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    descripton=db.Column(db.Text(500))
    number=db.Column(db.Integer())
    price=db.Column(db.Integer())
    user_id=db.Column(db.Integer(), db.ForeignKey('users.user_id'))

    def serialize(self):
        return{
            "id":self.id,
            "name":self.name,
            "descripton":self.descripton,
            "user_email":self.user_email,
            "number":self.number,
            "price":self.price,
        }

class Crops(db.Model):
    __tablename__='crops'
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    descripton=db.Column(db.Text(500))
    number=db.Column(db.Integer())
    price=db.Column(db.Integer())
    user_id=db.Column(db.Integer(), db.ForeignKey('users.user_id'))

    def serialize(self):
        return{
            "id":self.id,
            "name":self.name,
            "descripton":self.descripton,
            "user_email":self.user_email,
            "number":self.number,
            "price":self.price,
        }

from . import db

class Profile(db.Model):
    __tablename__='profiles'
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    descripton=db.Column(db.Text(500))
    number=db.Column(db.Integer())
    price=db.Column(db.Integer())
    user_id=db.Column(db.Integer(), db.ForeignKey('users.user_id'))

    def serialize(self):
        return{
            "id":self.id,
            "name":self.name,
           "descripton": self.descripton,
            "user_email":self.user_email,
            "number":self.number,
            "price":self.price,
        }
