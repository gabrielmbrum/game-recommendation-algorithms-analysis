import React from 'react';
import Navbar from '../components/Navbar';
import Graph from '../components/Graph';

const KNNPage = () => {
  const labels = ['Metric 1', 'Metric 2', 'Metric 3'];
  const data = [75, 85, 60]; // Dados específicos do Algoritmo 1

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />
  
      {/* Main Content */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">KNN </h1>
        <p className="text-lg text-gray-600 mb-8">
          Métricas analisadas, overview e código implementado.
        </p>
  
        {/* New Section with SVD Text */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <p className="text-lg text-gray-800 pb-4">
          O KNN apresentou <strong>precisão de 0.6 a 0.75</strong> e <strong>recall de 0.5 a 0.65</strong>, sendo o modelo com o desempenho mais limitado. Sua abordagem baseada em similaridade explícita tem dificuldades em capturar relações em datasets esparsos, impactando negativamente a sua capacidade de fornecer recomendações relevantes.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800">
            {`import kagglehub
antonkozyriev_game_recommendations_on_steam_path = kagglehub.dataset_download('antonkozyriev/game-recommendations-on-steam')

print('Data source import complete.')

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

from scipy.sparse import coo_matrix

user_ids = recommendations_df['user_id'].astype('category').cat.codes
item_ids = recommendations_df['app_id'].astype('category').cat.codes

unique_user_ids = recommendations_df['user_id'].astype('category').cat.categories
unique_item_ids = recommendations_df['app_id'].astype('category').cat.categories

user_game_matrix = coo_matrix((recommendations_df['hours'], (user_ids, item_ids)))

model_knn = NearestNeighbors(metric='cosine', algorithm='brute')
model_knn.fit(user_game_matrix)

user_index = 7  
if user_index < 0 or user_index >= user_game_matrix.shape[0]:
    raise ValueError(f"User index {user_index} is out of bounds. Must be between 0 and {user_game_matrix.shape[0] - 1}.")

distances, indices = model_knn.kneighbors(user_game_matrix.getrow(user_index), n_neighbors=6)
recommended_users = [unique_user_ids[i] for i in indices.flatten()[1:]]  # Exclui o próprio usuário
print(f'Recommended users for user index {user_index} are: {recommended_users}')

from collections import Counter

distances, indices = model_knn.kneighbors(user_game_matrix.getrow(0), n_neighbors=6)
recommended_users = [unique_user_ids[i] for i in indices.flatten()[1:]]
print(f'Recommended users for the first user are: {recommended_users}')

recommended_users_data = recommendations_df[recommendations_df['user_id'].isin(recommended_users)]

games_played = recommended_users_data.groupby('app_id')['hours'].sum().reset_index()

games_played['user_count'] = recommended_users_data.groupby('app_id')['user_id'].nunique().values

games_played = games_played.sort_values(by=['user_count', 'hours'], ascending=False)

top_5_games = games_played.head(5)
print("Top 5 recommended games:")
print(top_5_games)
print("\n")

print("Top 5 jogos recomendados:\n")
for i in range(5):
    app_id = top_5_games.iloc[i]['app_id'] 
    game_title = games_df[games_df['app_id'] == app_id]['title'].values[0]  
    print(f"Game {i + 1}: {game_title}")`}
          </pre>
        </div>
        </div>
      </div>
    </div>
  );
  
};

export default KNNPage;
