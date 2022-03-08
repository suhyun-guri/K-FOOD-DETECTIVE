import numpy as np
from numpy.linalg import norm
import pandas as pd

NUM_OF_RESULT = 2

#코사인 유사도 계산 함수 
def cos_sim(A, B):
    return np.dot(A, B)/(norm(A)*norm(B))

#main function
def recommender_system(df, user_score=list):
    food_dataframe = df.copy()
    result = []
    for i in range(food_dataframe.shape[0]):
        result.append(cos_sim(food_dataframe.iloc[i,1:].tolist(), user_score))
    food_dataframe['cos_sim'] = result
    return food_dataframe.sort_values('cos_sim', ascending=False)['romanized_name'][:NUM_OF_RESULT].tolist()