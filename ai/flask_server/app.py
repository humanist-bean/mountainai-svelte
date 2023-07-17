from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image
from fastai.vision.all import *
from fastai.vision.widgets import *


"""FASTAI SETUP"""

class Predict:
    def __init__(self, filename):
        self.learn_inference = load_learner(Path()/filename)
        #self.img = self.get_image_from_upload()
        #if self.img is not None:
        #   self.display_output()
        #    self.get_prediction()

    @staticmethod
    def get_image_from_upload(self, uploaded_file):
        #uploaded_file = self.get_file_upload()
        #uploaded_file = st.file_uploader(
        #    "Upload Files", type=['png', 'jpeg', 'jpg'])
        if uploaded_file is not None:
            return PILImage.create((uploaded_file))
        return None
    
    def get_file_upload(self):
        return 0
    #def display_output(self):
    #   st.image(self.img.to_thumb(500, 500), caption='Uploaded Image')

    def get_prediction(self, file):
        img_ready = PILImage.create((file))
        pred, pred_idx, probs = self.learn_inference.predict(img_ready)
        print(f'**Prediction**: {pred}')
        print(f'**Probability**: {probs[pred_idx]*100:.02f}%')
        return pred, probs[pred_idx]



# if __name__ == '__main__':
file_name = 'models/model.pkl'
print("Building Predict Class Instance")
predictor = Predict(file_name)

# 1. Basic Flask REST API Setup
print("Starting flask app")
app = Flask(__name__)
CORS(app)  

print("Flask app started, serving app POST method '/predict' ")
@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # we will get the file from the request
        file = request.files['file']
        # convert that to bytes
        #img_bytes = file.read()
        class_id, class_name = predictor.get_prediction(file) #fastai takes img in PIL form!
        return jsonify({'class_id': str(class_id), 'class_name': str(class_name)})
