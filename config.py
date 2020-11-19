import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('postgres://fkqgjejrhtiofl:da6400f5f20434738f8761cdaf7ae8edda891c4227e814946df09c9662435762@ec2-18-203-7-163.eu-west-1.compute.amazonaws.com:5432/d2sn7usqhoupej
') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
