from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def root():
  return 'Hello, Fridge Here!'

@app.route('/api/submit-form', methods=['POST'])
def form_submission():
  data = request.json

  print(data)
  return jsonify({'message': 'Data received successfully'})

if __name__ == '__main__':
  app.run(debug=True)