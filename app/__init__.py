from flask import Flask,flash,render_template,request,redirect,url_for
app= Flask(__name__, template_folder='Templates')

@app.route('/')
@app.route('/home')
def Home():
    return render_template('./Home/Home.html')








if __name__ == "__main__":
   app.run(debug=True)