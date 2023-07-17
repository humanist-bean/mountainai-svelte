#Source: https://towardsdatascience.com/model-compression-a-look-into-reducing-model-size-8251683c338e

import tensorflow as tf
converter = tf.lite.TFLiteConverter.from_saved_model('models/mountainai.pb')
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_quant_model = converter.convert()

# Save the TFLITE model
with open('models/mountainai_quant.tflite', 'wb') as f:
    f.write(tflite_quant_model)