import torch
import torchvision
import torchvision.transforms as transforms
from fastai.vision.all import *
#from pathlib import Path

# This pathlib code is a fix for some janky windows path issues with FastAI
# Source: https://github.com/fastai/fastai/issues/1482#issuecomment-798790974
import pathlib
plt = platform.system()
if plt == 'Linux': pathlib.WindowsPath = pathlib.PosixPath

model_path = Path('models/export.pkl')
# load FastAI ResNet model
learn = load_learner(model_path)

# get PyTorch model
# .model attribute stores the model
# .eval() sets the model into evaluation mode - no backward propagation
pytorch_model = learn.model.eval()

final_model = pytorch_model

torch.onnx.export(
    final_model,
    torch.randn(1, 3, 256, 256),
    'models/mountainai.onnx'
)
