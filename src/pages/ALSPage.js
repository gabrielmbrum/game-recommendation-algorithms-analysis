import React from 'react';
import Navbar from '../components/Navbar';
import Graph from '../components/Graph';

const ALSPage = () => {
  const labels = ['Metric 1', 'Metric 2', 'Metric 3'];
  const data = [75, 85, 60]; // Specific data for ALS

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />
  
      {/* Main Content */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">ALS</h1>
        <p className="text-lg text-gray-600 mb-8">
          Métricas analisadas, overview e código implementado.
        </p>
  
        {/* New Section with SVD Text */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <p className="text-lg text-gray-800 pb-4">
          O ALS obteve resultados intermediários, com <strong>precisão de 0.75 a 0.85</strong> e <strong>recall de 0.65 a 0.8</strong>. Ele consegue equilibrar bem entre recuperação de itens e precisão das recomendações, sendo uma escolha eficiente para sistemas que demandam escalabilidade e rapidez, sem comprometer muito a qualidade das recomendações.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800">
            {`
import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.metrics.pairwise import cosine_similarity
from scipy.sparse import coo_matrix

df_games = pd.read_csv("games.csv")
df_users = pd.read_csv("users.csv")
df_recommendations = pd.read_csv("recommendations.csv")


import numpy as np
import pandas as pd

def inicializa():
    user_counts = df_recommendations['user_id'].value_counts()
    usuarios = user_counts[user_counts == 10]
    user_ids = usuarios.index.tolist()[:20000]  # Limitar a 10.000 usuários
    print(f"Total de usuários selecionados: {len(user_ids)}")

    dados = df_recommendations[df_recommendations['user_id'].isin(user_ids)]
    
    dados = dados.drop(columns=['review_id', 'date', 'funny', 'helpful', 'is_recommended'])
    
    games = dados['app_id'].values
    horas = dados['hours'].values.astype(int)
    users = dados['user_id'].values.astype(int)

    
    return games, horas, users

games, horas, users = inicializa()

import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.metrics.pairwise import cosine_similarity
from scipy.sparse import coo_matrix

def recommend_games(user_id, horas, users, games, n_components=2, top_n=5):
    
    user_game_matrix = coo_matrix((horas, (users, games)))

    svd = TruncatedSVD(n_components=min(n_components, user_game_matrix.shape[1] - 1))  
    user_latent_matrix = svd.fit_transform(user_game_matrix)
    unique_users = np.unique(users)  
    if user_id not in unique_users:
        raise ValueError(f"User ID {user_id} não encontrado no conjunto de usuários.")
    
    user_index = user_id  
    user_latent = user_latent_matrix[user_index].reshape(1, -1)  
    
    game_latent_matrix = svd.components_.T  
    similarities = cosine_similarity(user_latent, game_latent_matrix)
    
    recommended_game_indices = similarities.argsort()[0][-top_n:][::-1]  
    return (recommended_game_indices)
    
def algoritimo(id_buscado):
    games, horas, users = inicializa()  
    games_unique = np.unique(games)
    users_unique = np.unique(users)

    games_hashmap = {i: game for i, game in enumerate(games_unique)}
    users_hashmap = {i: user for i, user in enumerate(users_unique)}

    games_index = np.array([list(games_hashmap.keys())[list(games_hashmap.values()).index(game)] for game in games])
    users_index = np.array([list(users_hashmap.keys())[list(users_hashmap.values()).index(user)] for user in users])

    index_user = np.where(users == id_buscado)[0][:5]
    removido_game = [games[idx] for idx in index_user]

    users = np.delete(users, index_user)
    horas = np.delete(horas, index_user)
    games = np.delete(games, index_user)
    users_index = np.delete(users_index, index_user)
    games_index = np.delete(games_index, index_user)

    id_index = next((index for index, user in users_hashmap.items() if user == id_buscado), None)
    if id_index is None:
        raise ValueError(f"ID {id_buscado} não encontrado.")

    recommended_games = recommend_games(
        user_id=id_index,
        horas=horas,
        users=users_index,
        games=games_index,
        n_components=10,
        top_n=5,
    )
    return id_buscado, recommended_games, games_hashmap, removido_game

id_buscar,recomendados,games_hashmap,removido_game = algoritimo(id_buscado = 576857)   
print(recomendados)

print('Jogos que deveriam ser printados')
for jogo in removido_game:
    print(df_games[df_games['app_id']==jogo]['title'])

print(recomendados)
for i in range(0,len(recomendados)):
    recomendados[i] = games_hashmap.get(recomendados[i],None)
print(recomendados)

print('Jogos recomendados')
for game in recomendados:
    print(df_games[df_games['app_id']==game]['title'])
    print('\n')
    
print('Jogos recomendados que o usuario ja jogou')
for game in recomendados:
    for jogado in removido_game:
        if game==jogado:
            print(game)`}
          </pre>
        </div>
        </div>
      </div>
    </div>
  ); 
};

export default ALSPage;
