from flask import Flask, render_template, request, redirect, url_for, sessions
from flask_sqlalchemy import SQLAlchemy


login = Flask(__name__)
login.secret_key= 'XXXXXXXXXX'

login.config['MYSQL_HOST'] = 'localhost'
login.config['MYSQL_USER'] = 'user_name'
login.config['MYSQL_PASSWORD'] = ''
login.config['MYSQL_DB'] = 'users'

mysql = SQLAlchemy(login)
@login.route('/')
def loginPage:
    if 'username' in sessions:
        return render_template('index.html', username=sessions['username'])
    else
        