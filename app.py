from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.secret_key = 'XXXXXXXXXX'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)
socketio = SocketIO(app, cors_allowed_origins="*")


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    language = db.Column(db.String(40), nullable=False)
    nationality = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.String(300), nullable=True)

@app.route('/login', methods=['GET', 'POST'])
def login_page():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if user exists in the database
        user = User.query.filter_by(username=username, password=password).first()
        if user:
            session['username'] = username
            return redirect(url_for('profile'))
        else:
            return 'Invalid username or password'
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login_page'))

@app.route('/profile')
def profile():
    if 'username' in session:
        username = session['username']
        # Assuming you have a User model with a 'username' attribute
        user = User.query.filter_by(username=username).first()
        if user:
            return render_template('profile.html', user=user)
        else:
            return "User not found"
    else:
        return redirect(url_for('login_page'))

@app.route('/change_password')
def change_profile():
    return render_template('change_profile.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Handle form submission
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        nationality = request.form['nationality']
        language = request.form['language']
        bio = request.form['bio']
        # Check if the username already exists
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            return 'Username or Password already exists!'
        # Create a new user
        new_user = User(email=email, username=username, password=password, nationality=nationality, language=language, bio=bio)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('login_page'))
    else:
        return render_template('signup.html')


@app.route('/users')
def display_users():
    users = User.query.all()
    return render_template('users.html', users=users)


@app.route('/')
def index():
    if 'username' in session:
        return render_template('home.html', username=session['username'])
    else:
        return render_template('home.html')

@app.route('/chat')
def message():
    if 'username' in session:
        print(session['username'])
        return render_template('message.html', username=session['username'])
    return redirect(url_for('login_page'))

@socketio.on("message")
def sendMessage(data):
    username = session['username']
    text = data['text']
    send({'username': username, 'text': text}, broadcast=True)



if __name__ == '__main__':
    with app.app_context():
          db.create_all()
    app.run(debug=True)


