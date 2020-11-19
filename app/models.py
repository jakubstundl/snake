from datetime import datetime
from app import db


class Highscore(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=False)
    score = db.Column(db.String(64), index=True, unique=False)
    

    def __repr__(self):
        return '<Highscore {}>'.format(self.username+' '+self.score)



