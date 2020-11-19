cd
source venvs/snake_env/bin/activate
cd code/snake
export FLASK_ENV=development
export FLASK_APP=snake.py
flask run
