from flask import Flask, request, jsonify
from flask_cors import CORS
from stemmer_clean import porter_stemmer

# Create app first
app = Flask(__name__)

# Enable CORS properly for all routes
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/stem", methods=["POST"])
def stem_word():
    try:
        data = request.get_json(force=True)
        word = data.get("word", "").strip()

        if not word:
            return jsonify({"error": "No word provided"}), 400

        stemmed = porter_stemmer(word)
        return jsonify({"original": word, "stemmed": stemmed})
    except Exception as e:
        print("Error in /stem:", e)
        return jsonify({"error": str(e)}), 500

@app.route("/")
def home():
    return "Flask backend is running!"

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
