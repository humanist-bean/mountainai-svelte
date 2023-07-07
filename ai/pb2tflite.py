import tensorflow as tf

# Load the saved model
model = tf.saved_model.load('models/mountainai.pb')

# Convert the model to TFLITE
converter = tf.lite.TFLiteConverter.from_saved_model('models/mountainai.pb')
tflite_model = converter.convert()

# Save the TFLITE model
with open('models/mountainai.tflite', 'wb') as f:
    f.write(tflite_model)
