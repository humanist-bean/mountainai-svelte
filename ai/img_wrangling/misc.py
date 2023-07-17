#NOTE: This file contains a bunch of random python functions to various tasks
# like create fake images with pytorch, etc...

"""
import torch
import base64
import numpy as np
import json
from fastai.vision.all import *
from fastai.vision.widgets import *
"""

#CREATE RANDOM TENSOR TO SIMULATE IMAGE FOR TESTING VERTEX AI MODEL ENDPOINT
"""
#fake_img = torch.rand((3, 48, 48))
#fake_img = torch.rand((1, 512))  #image must be divisible by 32
# source: https://github.com/qubvel/segmentation_models/issues/282

# RESHAPE FAKE_IMG
# Assuming tensor0 has shape [1, 512, 0, 0]
# and tensor1 has shape [1, 512, 1, 1]

# Reshape tensor0 to match the shape of tensor1
new_shape = (1, 512, 1, 1)
fake_img_reshaped = torch.reshape(fake_img, new_shape)
# Convert the tensor to a nested list
tensor_list = fake_img_reshaped.tolist()

# Save the list to a text file using JSON format
with open('fake_img_512.txt', 'w') as file:
    json.dump(tensor_list, file)
"""

"""
# COPY streamlit DEPLOYMENT PROCESS WITH REAL IMAGE AND PILIMAGES
# NOTE: THIS IS TESTED AND WORKING FROM HERE
# Prepare Test Image and Model
learn_inference = load_learner("models/model.pkl")
test_img = PILImage.create("./Mt. Hood.jpg")
# Make Prediction
pred, pred_idx, probs = learn_inference.predict(test_img)
# Print Results
print(f'**Prediction**: {pred}')
print(f'**Probability**: {probs[pred_idx]*100:.02f}%')
# NOTE: TO HERE!!
"""

# TRY WRITING PILIMAGE TO TXT FILE FOR TESTING WITH DEPLOYED MODEL
# NOTE: tested and works but vertexai deployment returns "padding error":
# "error": "aipl03cb5f-deplad5294 (20230706162317) error running kernel fallback kernel Pad: The first dimension of paddings must be the rank of inputs[4,2] [1,27540,3]"
"""
test_img = PILImage.create("./images/Mt. Hood.jpg")
scale_factor = 0.1  # 50% of the original size
test_img_small = test_img.resize((int(test_img.width * scale_factor), int(test_img.height * scale_factor)))
pixel_data = list(test_img_small.getdata())
with open('./images/test_img_2_small.txt', 'w') as file:
    json.dump(pixel_data, file)
"""

"""
# ENCODE DATA FOR BINARY INPUT FROM VERTEX AI DOCS SEE:
#https://cloud.google.com/vertex-ai/docs/predictions/get-online-predictions#encoding-binary-data
# {'image_bytes': {'b64': base64.b64encode(jpeg_data).decode()}}
test_img = PILImage.create("./images/Mt. Hood.jpg")

# Save the image to a temporary file in a desired format
temp_file_path = "./images/temp_image.jpg"
test_img.save(temp_file_path)

# Read the bytes from the temporary file
with open(temp_file_path, "rb") as f:
    image_bytes = f.read()

#byte_data = base64.b64encode(image_bytes).decode()

# with open('./images/test_img_3_bytes.txt', 'w') as file:
#     json.dump(image_bytes, file)


# Attempt to do above but based off this github issue:
# https://github.com/kserve/kserve/issues/942#issuecomment-818525624
encoded_string = base64.b64encode(image_bytes).decode('utf-8')
# request_body = json.dumps({"instances": [{"b64": encoded_string}]})
with open('./images/test_img_4_issue.txt', 'w') as file:
    json.dump({"instances": [{"b64": encoded_string}]}, file)
"""

from PIL import Image

# Open the image using Pillow
image = Image.open("./images/test_mtn.jpg")

# Compress and save the image with the desired quality (0 to 100)
compression_quality = 50  # Adjust this value as needed
output_path = "./images/test_mtn_cmp.jpg"
#image.save(output_path, quality=compression_quality)

# Optionally, you can also specify the optimized setting for better compression
image.save(output_path, quality=compression_quality, optimize=True)





