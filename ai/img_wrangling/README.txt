STEPS TO CONVERT FASTAI .pkl MODEL TO .tflite

0. Get the necessary packages on a virtual environment. E.g. the 'Tensorflow' environment on
anaconda on my PC. Then modify the paths in onnx2pb.py, pb2tflite.py, and pkl2onnx.py to point to 
the desired models.

1. Run 'python pkl2onnx.py' from the anaconda environment command line

2. Run 'python onnx2pb.py' from the anaconda environment command line

3. Run 'python pb2tflite.py' from the anaconda environment command line

4 INSTEAD OF 3 (OPTIONAL). Reduce the size of your pb model before converting it 
by running 'python reduce_tflite_size.py' instead of 'pb2tflite.py'. Note that 
reduce_tflite_size.py takes in a .pb model as input and outputs a .tflite model. 