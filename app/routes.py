from flask import render_template, flash, redirect, url_for
from app import app, db
from flask import Flask, jsonify, request
from app.forms import LoginForm
import json
from app.models import Highscore
from app import stats





@app.route('/')
@app.route('/index')
def index():
    seznam = [[],[]]
    h = Highscore.query.all()
    for i in h:
        seznam[0].append(i.username)
    for i in h:
        seznam[1].append(i.score)
    

    return render_template('index.html',title='Snake',
    name1=stats.sort_the_highscore(seznam)[0][0],
    name2=stats.sort_the_highscore(seznam)[0][1],
    name3=stats.sort_the_highscore(seznam)[0][2],
    name4=stats.sort_the_highscore(seznam)[0][3],
    name5=stats.sort_the_highscore(seznam)[0][4],
    name6=stats.sort_the_highscore(seznam)[0][5],
    name7=stats.sort_the_highscore(seznam)[0][6],
    name8=stats.sort_the_highscore(seznam)[0][7],
    name9=stats.sort_the_highscore(seznam)[0][8],
    name10=stats.sort_the_highscore(seznam)[0][9],
    score1=stats.sort_the_highscore(seznam)[1][0],
    score2=stats.sort_the_highscore(seznam)[1][1],
    score3=stats.sort_the_highscore(seznam)[1][2],
    score4=stats.sort_the_highscore(seznam)[1][3],
    score5=stats.sort_the_highscore(seznam)[1][4],
    score6=stats.sort_the_highscore(seznam)[1][5],
    score7=stats.sort_the_highscore(seznam)[1][6],
    score8=stats.sort_the_highscore(seznam)[1][7],
    score9=stats.sort_the_highscore(seznam)[1][8],
    score10=stats.sort_the_highscore(seznam)[1][9]
    )


@app.route('/submit_highscore', methods=['GET', 'POST'])
def submit_highscore(): 
    
    data = (request.data.decode('UTF-8'))
    data1 = json.loads(data)   
    name = data1["name"]
    score0 = data1["score"]
    u = Highscore(username=name,score=score0)
    db.session.add(u)
    db.session.commit()
    
   
    return redirect(url_for('index')) 




