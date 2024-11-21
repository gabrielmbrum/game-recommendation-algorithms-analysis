import React from 'react';
import Navbar from '../components/Navbar';
import Graph from '../components/Graph';

const SVDPage = () => {
  const labels = ['Metric 1', 'Metric 2', 'Metric 3'];
  const data = [75, 85, 60]; // Dados específicos do SVD

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />
  
      {/* Main Content */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">SVD </h1>
        <p className="text-lg text-gray-600 mb-8">
          Métricas analisadas, overview e código implementado.
        </p>
  
        {/* New Section with SVD Text */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <p className="text-lg text-gray-800 pb-4">
          O SVD apresentou os melhores resultados, com <strong>precisão entre 0.8 e 0.9</strong> e <strong>recall entre 0.7 e 0.85</strong>. Esses valores indicam que o modelo é altamente eficaz tanto em recomendar itens relevantes quanto em recuperar uma ampla gama de itens relevantes. A sua capacidade de capturar padrões latentes nos dados, mesmo em datasets esparsos, é o principal motivo de seu desempenho superior.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800">
            {`
!pip install scikit-surprise
!pip install -U mlxtend

import kagglehub
import os
antonkozyriev_game_recommendations_on_steam_path = kagglehub.dataset_download('antonkozyriev/game-recommendations-on-steam')

print('Data source import complete.')

print("Caminho onde o dataset foi salvo:", antonkozyriev_game_recommendations_on_steam_path)

for root, dirs, files in os.walk(antonkozyriev_game_recommendations_on_steam_path):
    for name in files:
        print(os.path.join(root, name))

import pandas as pd
from sklearn.neighbors import NearestNeighbors
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from scipy.sparse import csr_matrix
from mlxtend.frequent_patterns import apriori, association_rules

def reduce_memory(df):
    for col in df.columns:
        if df[col].dtype == 'float64':
            df[col] = df[col].astype('float32')
        if df[col].dtype == 'int64':
            df[col] = df[col].astype('int32')
    return df

def data_generator(df, chunksize=10000):
    for i in range(0, df.shape[0], chunksize):
        yield df.iloc[i:i+chunksize]

games_df = reduce_memory(pd.read_csv('/root/.cache/kagglehub/datasets/antonkozyriev/game-recommendations-on-steam/versions/28/games.csv'))
users_df = reduce_memory(pd.read_csv('/root/.cache/kagglehub/datasets/antonkozyriev/game-recommendations-on-steam/versions/28/users.csv'))
recommendations_df = reduce_memory(pd.read_csv('/root/.cache/kagglehub/datasets/antonkozyriev/game-recommendations-on-steam/versions/28/recommendations.csv'))

import pandas as pd
from surprise import Dataset, Reader, SVD, accuracy
from surprise.model_selection import train_test_split
import numpy as np
import gc

def liberar_memoria(*args):
    for var in args:
        del var
    gc.collect()


top_users = recommendations_df['user_id'].value_counts().nlargest(1000).index
top_games = recommendations_df['app_id'].value_counts().nlargest(1000).index
filtered_df = recommendations_df[recommendations_df['user_id'].isin(top_users) & recommendations_df['app_id'].isin(top_games)]

max_hours = filtered_df['hours'].max()
reader = Reader(rating_scale=(1, max_hours))

data = Dataset.load_from_df(filtered_df[['user_id', 'app_id', 'hours']], reader)

trainset, testset = train_test_split(data, test_size=0.2)

svd.fit(trainset)

liberar_memoria(trainset, filtered_df)

predictions = svd.test(testset)
rmse = accuracy.rmse(predictions)
mae = accuracy.mae(predictions)

def svd_recommendations(user_id, games_df, svd_model, top_n=5):
    all_games = games_df['app_id'].unique()
    user_played_games = filtered_df[filtered_df['user_id'] == user_id]['app_id'].values
    games_to_predict = [game for game in all_games if game not in user_played_games]

    predictions = [(game, svd_model.predict(user_id, game).est) for game in games_to_predict]

    top_predictions = sorted(predictions, key=lambda x: x[1], reverse=True)[:top_n]

    recommended_games = games_df[games_df['app_id'].isin([pred[0] for pred in top_predictions])][['app_id', 'title']]
    recommended_games['predicted_rating'] = [pred[1] for pred in top_predictions]

    print("\nJogos recomendados para o usuário com base no SVD:")
    for _, row in recommended_games.iterrows():
        print(f"- {row['title']} ")

user_id = top_users[14]  
svd_recommendations(user_id, games_df, svd)

user_id = top_users[7] 
user_games = filtered_df[filtered_df['user_id'] == user_id][['app_id', 'hours']]

user_games = user_games.merge(games_df[['app_id', 'title']], on='app_id', how='left')
print(f"Jogos jogados pelo usuário {user_id} e suas avaliações (horas):")
print(user_games)`}
          </pre>
        </div>
        </div>
      </div>
    </div>
  );  
};

export default SVDPage;
