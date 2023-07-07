"""
import tensorflow as tf
import onnxruntime as ort


# Step 1: Load the ONNX model
onnx_model = ort.InferenceSession('models/mountainai.onnx')  # Replace 'model.onnx' with your ONNX model file path

# Step 2: Convert the ONNX model to TensorFlow format
tf_model = tf.compat.v1.graph_util.import_graph_def(onnx_model.graph_def)

# Step 3: Convert the TensorFlow model to TFLite format
converter = tf.lite.TFLiteConverter.from_session(tf_model)
tflite_model = converter.convert()

# Step 4: Save the TFLite model to a file
with open('models/mountainai.tflite', 'wb') as f:
    f.write(tflite_model)
"""
	
import onnx
from onnx_tf.backend import prepare
 
onnx_model = onnx.load("models/mountainai.onnx")
tf_rep = prepare(onnx_model)
tf_rep.export_graph("models/mountainai.pb")