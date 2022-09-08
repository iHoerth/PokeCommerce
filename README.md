# Pokedex
Simulador de Pokedex utilizando React JS y CSS, obteniendo la data de pokeapi.co

## Vista Previa
No hay vista previa.

## Descripcion
En esta app, podremos ver todos los pokemones, ver informacion de cada uno de ellos, asi como tambien de los items que se pueden comprar en los juegos. Tambien podremos armar una "mano" de pokemones -al igual que en los juegos-, de un maximo de 6 pokemones favoritos. Se podran realizar busquedas y filtros de todo tipo.

## Dependencias
React-router-dom.

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import sys

def rgb2gray(rgb):
    return np.dot(rgb[...,:3], [0.299, 0.587, 0.114])
# convert to gray scale
img = mpimg.imread('test.png')     
gray = rgb2gray(img)    
plt.imshow(gray, cmap = plt.get_cmap('gray'))
plt.show()
