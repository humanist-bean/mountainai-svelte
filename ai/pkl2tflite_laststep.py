import tensorflow as tf
# Step 4: Convert the TensorFlow model to .tflite format
# NOTE: Moved to another because the flatbuffers versions that tf2onnx
# and tensorflow relied on are conflicting!
converter = tf.lite.TFLiteConverter.from_saved_model("tf_model.onnx")
tflite_model = converter.convert()
open("model.tflite", "wb").write(tflite_model)
