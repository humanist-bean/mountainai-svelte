import requests

resp = requests.post("http://127.0.0.1:5000/predict",
                     files={"file": open('test_mtn.jpg','rb')})

print(resp)
print(resp.headers)
print(resp.text)