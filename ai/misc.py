#NOTE: This file contains a bunch of random python functions to various tasks
# like create fake images with pytorch, etc...

import torch
import numpy as np
import json


#Create random tensor to simulate image for testing Vertex AI Model Endpoint
fake_img = torch.rand((3, 48, 48))

#fake_img_array = fake_img.numpy()
#np.savetxt('fake_img.txt', fake_img_array, fmt='%d')


# Convert the tensor to a nested list
tensor_list = fake_img.tolist()

# Save the list to a text file using JSON format
with open('fake_img.txt', 'w') as file:
    json.dump(tensor_list, file)

