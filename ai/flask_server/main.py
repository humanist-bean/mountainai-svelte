from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image
from fastai.vision.all import *
from fastai.vision.widgets import *

"""SETUP PATHLIB SPECIFICALLY FOR WINDOWS DEPLOYMENT
import pathlib

plt = platform.system()
if plt == 'Linux': pathlib.WindowsPath = pathlib.PosixPath"""


"""FASTAI SETUP"""

class Predict:
    def __init__(self, filename):
        #self.learn_inference = load_learner(Path()/filename)
        self.learn_inference = load_learner("./%s"%(filename))



    @staticmethod
    def get_image_from_upload(self, uploaded_file):
        if uploaded_file is not None:
            return PILImage.create((uploaded_file))
        return None
    
    def get_file_upload(self):
        return 0
    #def display_output(self):
    #   st.image(self.img.to_thumb(500, 500), caption='Uploaded Image')

    # Method to get prediction from FastAI model, takes file to make prediction with
    # returns: pred (class name), probs[pred_idx] (confidence in top guess)
    # TODO: find/create list of labels in order so I can return top N guesses  for list 
    # under main prediction. Can't do yet because I don't have a simple list of all the 
    # Mountain names with their corresponding index, e.g. I can get the pred_idx for hood
    # and its 'tensor(444)' however in my old list of names it is on line 7xx. 
    # I think this is because the labels are scraped from the image names when creating the 
    # model with FastAI, instead of from the list of mountains used to scrape images
    def get_prediction(self, file):
        img_ready = PILImage.create((file))
        pred, pred_idx, probs = self.learn_inference.predict(img_ready)
        print(f'**Prediction**: {pred}')
        print(f'**Probability**: {probs[pred_idx]*100:.02f}%')
        return pred, probs[pred_idx].item()




model_path = 'models/model.pkl'
print("Building Predict Class Instance")
predictor = Predict(model_path)

classes_path = 'predict_classes/'

#Basic Flask REST API Setup - Starts running app and serving /predict POST 
print("Starting flask app")
app = Flask(__name__)
CORS(app) 

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        class_id, prediction_confidence = predictor.get_prediction(file) #fastai takes img in PIL form!
        return jsonify({'class_id': str(class_id), 'prediction_confidence': str(prediction_confidence)});

print("Flask app started, serving app POST method '/predict' ")

if __name__ == '__main__':
    app.run()