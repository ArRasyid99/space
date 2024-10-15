from flask import Flask, render_template,url_for
from gevent.pywsgi import WSGIServer

app = Flask(__name__)

@app.route("/")
def index():

    return render_template("index.html")


if __name__ == "__main__":
    
    http_server = WSGIServer(("127.0.0.1", 5000), app)
    http_server.serve_forever()
    app.run(debug=False)