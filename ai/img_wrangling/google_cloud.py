#NOTE: This file is for testing mountainai deployment on vertex ai based off this tutorial:
# https://codelabs.developers.google.com/vertex-image-deploy

from google.cloud import aiplatform
from google.cloud.aiplatform.gapic.schema import predict

import base64

import tensorflow as tf
import numpy as np
from PIL import Image

# SETUP API ACCESS CREDENTIALS
PROJECT_NUMBER = "1061578190863"
ENDPOINT_ID = "3831798022799360000"

endpoint = aiplatform.Endpoint(
    endpoint_name=f"projects/{PROJECT_NUMBER}/locations/us-west1/endpoints/{ENDPOINT_ID}")

"""
IMAGE_PATH = "./images/test_mtn_cmp.jpg"
#IMAGE_SIZE = (256, 256) # changed from 128 in tutorial
IMAGE_SIZE = (128, 128) # changed from 128 in tutorial


im = Image.open(IMAGE_PATH)
im = im.resize(IMAGE_SIZE)
im = np.array(im)/255.0

# NOTE: CHAT GPT FIX FOR IMAGE SHAPE FROM HERE
# Check the number of channels
if im.shape[-1] == 1:  # Grayscale image
    # Convert to RGB (duplicate the single channel to create 3 channels)
    im = np.repeat(im, 3, axis=-1)
elif im.shape[-1] == 4:  # Some images have an additional alpha channel (RGBA)
    # Remove the alpha channel (use only the first 3 channels - RGB)
    im = im[:, :, :3]
# Add a batch dimension
im = np.expand_dims(im, axis=0)
# Pad the image to the desired shape (1, 3, 256, 256)
padded_image = np.pad(im, ((0, 0), (0, 0), (64, 64), (64, 64)), mode='constant')
# TO HERE!!


#x_test = im.astype(np.float32).tolist()
x_test = padded_image.astype(np.float16).tolist()

"""
IMAGE_PATH = "./images/test_mtn.jpg"

with open(IMAGE_PATH, "rb") as f:
        file_content = f.read()

# The format of each instance should conform to the deployed model's prediction input schema.
encoded_content = base64.b64encode(file_content).decode("utf-8")
instance = predict.instance.ImageClassificationPredictionInstance(
    encoded_content=encoded_content,
).to_value()
instances = [instance]

# make prediction request
print("Making prediction request with file: " + IMAGE_PATH)
#result = endpoint.predict(instances=[x_test]).predictions
result = endpoint.predict(instances=instances).predictions

print(result)

# post process result
predicted_class = tf.math.argmax(result[0], axis=-1)
#string_label = imagenet_labels[predicted_class]

print(f"label ID: {predicted_class}")
#print(f"string label: {string_label}")
