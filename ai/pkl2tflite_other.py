import torch
import torchvision
import torchvision.transforms as transforms
from fastai.vision.all import *

# load FastAI ResNet model
learn = load_learner('models/export.pkl')

# get PyTorch model
# .model attribute stores the model
# .eval() sets the model into evaluation mode - no backward propagation
pytorch_model = learn.model.eval()

"""
# define softmax layer
softmax_layer = torch.nn.Softmax(dim=1)  # define softmax

# define normalization layer
normalization_layer = transforms.Normalize(
    mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])

# assemble the final model
final_model = nn.Sequential(
    normalization_layer,
    pytorch_model
    #softmax_layer
)
"""
final_model = pytorch_model

torch.onnx.export(
    final_model,
    torch.randn(1, 3, 256, 256),
    'models/mountainai.onnx'
)
