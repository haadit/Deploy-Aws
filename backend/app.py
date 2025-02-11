from flask import Flask

app = Flask(__name__)

@app.route('/')

def home():
    return "Hello, World!"

@app.route('/api')

def api():
    with open('next.txt','r+') as f:
        names = f.read()
        names = names.split()
        data = {
            "name": names,
        }
        return data

if __name__ == "__main__":
    app.run(port=8000,host='0.0.0.0',debug=True)