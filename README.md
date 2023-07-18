# MountainAI - Svelte
by [Alder French](https://humanist-bean.github.io)

## Try It Here!
[MountainAI Website](https://mountainai.web.app)

## Summary:
This repository contains the code for the MountainAI website made with SvelteKit and Flask. MountainAI is a image classification model created with FastAI that can classify the top 700 tallest mountains in the world with about ~50% accuracy at the time I am writing this. It works best on well known mountains because those were the ones
with the best images for training. 

## MountainAI Website Features
- Sumbit image and get a prediction result, as well as info from wikipedia about the prediction (if no errors occur scraping wikipedia, which for now they do...)
- Sign into the website with your google account, then your prediction sumbissions will be automatically saved and you can view them in your dashboard

## Design Aspects
 - Image Classification AI Model: trained with FastAI (which uses PyTorch) and using the ResNet 34 Architecture, here's a link to the repo that contains the code used to train the model and scrape its images:
 [MountainAI AI Training and Data Scraping Repo](https://github.com/humanist-bean/MountainAI)
 Relevant File Path: "mountainai-svelte/ai/"

 - Image Scraper and Training Data: I wrote a web scraper with Python using Selenium and Beautiful soup that can also be found in the repo above. I used an uncleaned dataset of ~75000 images of mountains from bing images to train the current model for the world's tallest ~750 mountains on wikipedia.

 - Website Frameworks: I used SvelteKit to build the website's front-end and backend. I also used a Flask server for my REST API that actually serves the FastAI model's predictions given a POST request with an image.
 Relevant File Paths: "mountainai-svelte/myapp", "mountainai-svelte/ai/flask_server"

 - Databases: I used Firebase Storage for images and firestore for text data
 Relevant File Paths: "mountainai-svelte/myapp/src/lib/js/firebase.js"

 - Mountain Prediction Result and Client Side Wikipedia API/Scraping with Caching: The AI model only outputs a list of probabilities and the class name of the top prediction, so to get summaries of all the mountains I use the wikipedia API and javascript to extract the main wikipedia mountain image and description. I also cache this information in FireStore so it can be retrieved faster in the future, special thanks to Cody Anderson for this idea! 
 Relevant File Paths: "mountainai-svelte/myapp/src/lib/js/firebase.js", "mountainai-svelte/myapp/src/lib/js/wiki.js",
 "mountainai-svelte/myapp/src/routes/MtnBtn.svelte", "mountainai-svelte/myapp/src/routes/result/MainMountain.svelte"

 - Deployment: I deployed the flask server that serves the FastAI model to google app engine, and the SvelteKit site to firebase. NOTE: I'm running into trouble with the google app engine Flask Server, so I'm using ngrok to serve the prediction REST API for now.

 - Authentication: I used Firebase Auth
 Relevant File Paths: "mountainai-svelte/myapp/routes/auth.svelte"

  





