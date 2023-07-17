from flask import Flask, jsonify, request
import io
import torch
import torchvision.transforms as transforms
from PIL import Image
from fastai.vision.all import *
from fastai.vision.widgets import *





""" PYTORCH SETUP
# 2. Function to transform image into the shape we need for our model
def transform_image(image_bytes):
    my_transforms = transforms.Compose([transforms.Resize(255),
                                        transforms.CenterCrop(224),
                                        transforms.ToTensor(),
                                        transforms.Normalize(
                                            [0.485, 0.456, 0.406],
                                            [0.229, 0.224, 0.225])])
    image = Image.open(io.BytesIO(image_bytes))
    return my_transforms(image).unsqueeze(0)

# 3. Load model
# Load the model from .pkl file
model = torch.load('models/model.pkl')

# Set the model in evaluation mode (important if your model has dropout or batch normalization layers)
model.eval()

# 4. Define Prediction Function
def get_prediction(image_bytes):
    tensor = transform_image(image_bytes=image_bytes)
    outputs = model.forward(tensor)
    _, y_hat = outputs.max(1)
    return y_hat

"""

"""FASTAI SETUP"""
#learn_inf = load_learner('models/model.pkl')

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
