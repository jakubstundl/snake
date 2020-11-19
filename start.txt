cd
source venvs/snake_env/bin/activate
cd code/snake
export FLASK_APP=snake.py
flask run --host=0.0.0.0
