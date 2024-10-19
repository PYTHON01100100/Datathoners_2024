from flask import Flask, send_from_directory, request
import pickle
from flask_cors import CORS
import xgboost as xgb
import numpy as np
from sklearn.neighbors import NearestNeighbors
import pandas as pd
print(xgb.__version__)



app = Flask(__name__)

CORS(app)

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)



# Routes

mapping = {0: 'احتياج متوسط', 1: 'احتياج متوسط مرتفع', 2: 'احتياج مرتفع', 3: 'احتياج مرتفع جداً', 4: 'احتياج منخفض', 5: 'احتياج منخفض جداً', 6: 'غير محتاج'}
mapping2 = {3: 'Very High', 4:'Low', 5: 'Very Low', 6: 'N/A', 2: 'High', 1: 'Medium High', 0: 'Medium'}
@app.post('/test')
def test():
    data = request.get_json()
    a = int(data.get('a'))
    b = int(data.get('b'))
    c = int(data.get('c'))
    d = int(data.get('d'))
    e = int(data.get('e'))
    f = int(data.get('f'))
    g = int(data.get('g'))
    h = int(data.get('h'))
    i = int(data.get('i'))
    j = int(data.get('j'))
    k = int(data.get('k'))
    l = int(data.get('l'))
    arr = [a,b,c,d,e,f,g,h,i,j,k,l]
    print('testing',a,b,c,d,e,f,g,h,i,j,k,l)
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
        if (model.predict([arr]))[0]:
            print('yes')

        prediction = (model.predict([arr]))
        print(prediction[0])
        # prediction = (model.predict(np.array([[a,b,c,d,e,f,g,h,i,j,k,l]], dtype=float)))
        value = mapping2[prediction[0]]
        return {"data": value}
        # else:
        #     return {"data": "Non diabetes patient"}
    return {"data": "test"}

data1 = pd.DataFrame({
    'a': [44, 122, 83],
    'b': [2, 4, 8],
    'c': [1, 0, 1]
})

@app.post('/housing')
def housing():
    data = request.get_json()
    e = int(data.get('e'))
    h = int(data.get('h'))
    c = int(data.get('c'))
    print(e, h, c)
    data2 = pd.DataFrame({
        'a': [e],
        'b': [h],
        'c': [c]
    })
    knn = NearestNeighbors(n_neighbors=1)
    knn.fit(data2)

    # Find the closest points in data2 for each point in data1
    distances, indices = knn.kneighbors(data1)
    print('in', indices)
    print('dis', distances)

    # Get closest matches
    closest_matches = data2.iloc[indices.flatten()]
    print(closest_matches)
    return closest_matches.to_json(orient='records')