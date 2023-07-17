# File for doing stuff with tensorflow, like viewing model details
import tensorflow as tf

# Load the SavedModel
model = tf.saved_model.load('./models/mountainai.pb')

# Get the model's input and output layers
input_layer_name = model.signatures['serving_default'].inputs[0].name
output_layer_name = model.signatures['serving_default'].outputs[0].name

# View the layer names
print("Input layer name:", input_layer_name)
print("Output layer name:", output_layer_name)

# Get the model's input and output layers
input_info = model.signatures['serving_default'].inputs
output_info = model.signatures['serving_default'].outputs

# Print the shapes of the input and output layers
print("Input shape:", input_info[0].shape)
print("Output shape:", output_info[0].shape)