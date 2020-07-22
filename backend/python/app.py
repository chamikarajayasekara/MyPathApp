from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():

    return 'This is python server and this use to machine learning development'


if __name__ == '__main__':
    app.run(port=4500)
