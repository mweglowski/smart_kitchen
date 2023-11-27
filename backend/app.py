from flask import Flask, request, jsonify
import requests, os

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"

app = Flask(__name__)

@app.route('/')
def root():
  return 'Hello, Fridge Here!'

# @app.route('/api/submit-form', methods=['POST'])
# def form_submission():
#   data = request.json

#   print(data)
#   return jsonify({'message': 'Data received successfully'})

@app.route('/api/openai', methods=['POST'])
def openai_request():
  try:
    data = request.json
    headers = {
      'Authorization': f'Bearer {OPENAI_API_KEY}',
      'Content-Type': 'application/json'
    }
    payload = {
      'model': 'text-davinci-003',  # or other models as needed
      'prompt': data['prompt'],
      'max_tokens': 10
    }

    response = requests.post(OPENAI_API_URL, json=payload, headers=headers)
    return jsonify(response.json())
  except Exception as e:
    print(f"Error: {e}")
    return jsonify({"error": "An error occurred processing your request"}), 500




if __name__ == '__main__':
  app.run(debug=True)