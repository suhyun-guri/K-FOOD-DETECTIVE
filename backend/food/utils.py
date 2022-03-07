import numpy as np
from numpy.linalg import norm
import pandas as pd


#코사인 유사도 계산 함수 
def cos_sim(A, B):
    return np.dot(A, B)/(norm(A)*norm(B))

#main function
def recommender_system(df, user_score=list):
    df1 = df.copy()
    result = []
    for i in range(df1.shape[0]):
        result.append(cos_sim(df1.iloc[i,1:].tolist(), user_score))
    df1['cos_sim'] = result
    return df1.sort_values('cos_sim', ascending=False)['romanized_name'][:2].tolist()