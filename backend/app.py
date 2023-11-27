from flask import Flask, request, jsonify
import requests, os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv('API_KEY')
client = OpenAI(api_key=API_KEY)

app = Flask(__name__)

@app.route('/')
def root():
  return 'Hello, Fridge Here!'

@app.route('/api/openai', methods=['POST'])
def openai_request():
  data = request.json
  prompt = data['prompt']
  print(prompt)

  response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": prompt}
  ])

  response_content = response.choices[0].message.content

  print(response_content)

  response_data = {
    "message": response_content
  }

  return jsonify(response_data)



if __name__ == '__main__':
  app.run(debug=True)