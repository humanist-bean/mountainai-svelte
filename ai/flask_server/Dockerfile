# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /

# Copy the Flask server code and model file(s) into the container
COPY requirements.txt /
COPY main.py /
COPY models/model.pkl /models/model.pkl
# Replace 'model.pkl' with the name of your FastAI model file

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 8080 for incoming requests
EXPOSE 8080

# Define the command to run the Flask server
CMD ["python", "main.py"]
