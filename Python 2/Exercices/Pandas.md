### 1. *Manipulation des données :*

**Données :**

```python
clients = [
    {"nom": "Lamine", "âge": 28, "ville": "Dakar"},
    {"nom": "Aminata", "âge": 34, "ville": "Touba"},
    {"nom": "Sadio", "âge": 22, "ville": "Saint-Louis"},
    {"nom": "Fatou", "âge": 26, "ville": "Ziguinchor"},
]
```

**Question :**
1. Trouver tous les clients qui vivent à **Dakar**.
2. Combien de clients ont moins de **30 ans** ?

---

### 2. *Vérifications de conditions et opérateurs logiques :*

**Données :**

```python
produits = [
    {"nom": "Ordinateur", "prix": 500, "disponible": True},
    {"nom": "Téléphone", "prix": 200, "disponible": False},
    {"nom": "Tablette", "prix": 300, "disponible": True},
    {"nom": "Écouteurs", "prix": 50, "disponible": True},
]
```

**Question :**
1. Quels produits sont **disponibles** à la vente ?
2. Quel produit a un prix supérieur à **250** et est disponible ?

---

### 3. *Boucles et itérations :*

**Données :**

```python
employes = [
    {"nom": "Alioune", "fonction": "Développeur", "salaire": 2000},
    {"nom": "Aissatou", "fonction": "Chef de projet", "salaire": 3500},
    {"nom": "Boubacar", "fonction": "Designer", "salaire": 2800},
]
```

**Question :**
1. Afficher les **noms** et **fonctions** des employés.
2. Calculer la somme des salaires de tous les employés.

---

### 4. *Création et utilisation de fonctions simples :*

**Données :**

```python
achats = [
    {"produit": "Pain", "prix": 1.5},
    {"produit": "Lait", "prix": 0.8},
    {"produit": "Pâtes", "prix": 2.0},
]
```

**Question :**
1. Créer une fonction qui calcule le **total** des achats.
2. Modifier la fonction pour qu'elle applique une **réduction de 10%** sur le total si le montant dépasse 5€.

---

### 5. *Utilisation des dictionnaires :*

**Données :**

```python
notes = {
    "Maths": 15,
    "Physique": 18,
    "Anglais": 12,
    "Histoire": 14,
}
```

**Question :**
1. Quels sont les **deux** sujets avec les meilleures notes ?
2. Calculer la **moyenne** des notes.

---

### 6. *Listes imbriquées et accès aux données :*

**Données :**

```python
departements = [
    {"nom": "Informatique", "employes": ["Mamadou", "Aminata", "Ali"]},
    {"nom": "Ressources humaines", "employes": ["Sadio", "Fatou"]},
]
```

**Question :**
1. Afficher tous les **noms des départements**.
2. Combien d'employés travaillent dans le département **Informatique** ?

---

### 7. *Gestion des erreurs et exceptions :*

**Données :**

```python
compte_bancaire = 1000  # Solde initial
```

**Question :**
1. Créer un code qui permet de **retirer de l'argent** du compte. Si le solde est insuffisant, lever une exception.
2. Tester l'exception en essayant de retirer plus que le solde disponible.

---

### 8. *Manipulation de chaînes de caractères :*

**Données :**

```python
textes = [
    "Bonjour, comment ça va ?",
    "Je suis développeur en Python.",
    "Aujourd'hui est un beau jour."
]
```

**Question :**
1. Combien de **mots** contient chaque phrase ?
2. Vérifier si la phrase **"Je suis développeur en Python."** contient le mot **"Python"**.

---

### 9. *Opérations sur les dates :*

**Données :**

```python
import datetime

dates = [
    {"evenement": "Anniversaire", "date": datetime.date(2025, 2, 15)},
    {"evenement": "Réunion", "date": datetime.date(2025, 1, 10)},
]
```

**Question :**
1. Combien de jours nous séparent de l'**anniversaire** ?
2. Ajouter **7 jours** à la date de la **réunion** et afficher la nouvelle date.

---

### 10. *Comprehensions de liste :*

**Données :**

```python
nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**Question :**
1. Créer une **liste** des carrés des nombres pairs dans la liste `nombres`.
2. Filtrer la liste pour obtenir uniquement les **nombres impairs** supérieurs à 5.

---

### 11. *Filtrage et indexation avancée :*

**Données :**

```python
import pandas as pd

df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'âge': [28, 34, 22, 26],
    'ville': ['Dakar', 'Touba', 'Saint-Louis', 'Ziguinchor'],
    'revenu': [3000, 4500, 2800, 3500]
})
```

**Question :**
1. Filtrer les clients ayant un **revenu supérieur à 3000** et vivant à **Dakar**.
2. Trouver les clients ayant un **âge compris entre 25 et 30**.

---

### 12. *Calcul des statistiques sur les colonnes :*

**Données :**

```python
df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'revenu': [3000, 4500, 2800, 3500],
    'note': [15, 18, 12, 14]
})
```

**Question :**
1. Calculer le **revenu moyen** des clients.
2. Quelle est la **note maximale** parmi les clients ?

---

### 13. *Manipulation avancée des dates :*

**Données :**

```python
import pandas as pd

df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'date_inscription': ['2023-01-15', '2022-09-10', '2021-05-25', '2023-06-30']
})

df['date_inscription'] = pd.to_datetime(df['date_inscription'])
```

**Question :**
1. Filtrer les clients inscrits après **le 1er janvier 2023**.
2. Créer une nouvelle colonne **durée_inscription** qui calcule le nombre de jours depuis l'inscription de chaque client jusqu'à la date actuelle.

---

### 14. *Fusion de DataFrames :*

**Données :**

```python
df1 = pd.DataFrame({
    'id': [1, 2, 3, 4],
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'revenu': [3000, 4500, 2800, 3500]
})

df2 = pd.DataFrame({
    'id': [3, 4, 5, 6],
    'ville': ['Dakar', 'Touba', 'Saint-Louis', 'Ziguinchor']
})
```

**Question :**
1. Faire une **fusion interne (inner join)** des deux DataFrames sur la colonne `id`.
2. Faire une **fusion externe (outer join)** pour conserver tous les enregistrements des deux DataFrames.

---

### 15. *Agrégations avancées avec GroupBy :*

**Données :**

```python
df = pd.DataFrame({
    'ville': ['Dakar', 'Dakar', 'Touba', 'Touba', 'Saint-Louis', 'Saint-Louis'],
    'revenu': [3000, 4500, 2800, 3500, 4000, 3800]
})
```

**Question :**
1. Calculer le **revenu moyen** par ville.
2. Trouver le **revenu maximal** dans chaque ville.

---

### 16. *Manipulation avancée des chaînes de caractères :*

**Données :**

```python
df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'adresse': ['Dakar, Sénégal', 'Touba, Sénégal', 'Saint-Louis, Sénégal', 'Ziguinchor, Sénégal']
})
```

**Question :**
1. Extraire la **ville** de l'adresse dans une nouvelle colonne.
2. Vérifier si la colonne **adresse** contient le mot "Sénégal".

---

### 17. *Gestion des valeurs manquantes avancée :*

**Données :**

```python
df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'revenu': [3000, None, 2800, None],
    'note': [15, 18, None, 14]
})
```

**Question :**
1. Remplacer les valeurs manquantes dans la colonne **revenu** par la **moyenne** des revenus.
2. Remplacer les valeurs manquantes dans la colonne **note** par la **médiane** des notes.

---

### 18. *Transformation de données avec `apply()` :*

**Données :**

```python
df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'revenu': [3000, 4500, 2800, 3500]
})
```

**Question :**
1. Appliquer une fonction qui **ajoute 500** à chaque revenu.
2. Créer une fonction qui calcule un **bonus de 10%** sur chaque revenu et applique-la à la colonne **revenu**.

---

### 19. *Pivot Table et manipulation avancée :*

**Données :**

```python
df = pd.DataFrame({
    'ville': ['Dakar', 'Dakar', 'Touba', 'Touba', 'Saint-Louis', 'Saint-Louis'],
    'mois': ['Janvier', 'Février', 'Janvier', 'Février', 'Janvier', 'Février'],
    'revenu': [3000, 4500, 2800, 3500, 4000, 3800]
})
```

**Question :**
1. Créer un **pivot table** pour obtenir le revenu total par ville et mois.
2. Ajouter la **moyenne** des revenus dans le pivot table.

---

### 20. *Visualisation des données avec `matplotlib` :*

**Données :**

```python
import matplotlib.pyplot as plt

df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'revenu': [3000, 4500, 2800, 3500]
})
```

**Question :**
1. Créer un **graphique en barre** pour afficher les revenus des clients.
2. Ajouter un **titre** et des **étiquettes** pour les axes du graphique.

---

### 21. *Manipulation de grandes données avec `chunking` :*

**Données :**

```python
import pandas as pd

# Simulons un fichier CSV avec des millions de lignes
data = {
    'id': range(1, 1000001),
    'revenu': [3000 + i % 1000 for i in range(1000000)],
    'ville': ['Dakar', 'Touba', 'Saint-Louis', 'Ziguinchor'] * 250000
}

df = pd.DataFrame(data)
df.to_csv("grandes_donnees.csv", index=False)
```

**Question :**
1. Lire le fichier CSV **en morceaux (chunks)** de 100 000 lignes et calculer le **revenu moyen** de chaque morceau.
2. Utiliser le même processus pour trouver la **ville avec le revenu total maximal**.

---

### 22. *Calculs sur les séries temporelles :*

**Données :**

```python
import numpy as np

# Générer des données temporelles pour chaque jour de l'année
dates = pd.date_range('2023-01-01', '2023-12-31', freq='D')
revenu = np.random.randint(1000, 5000, size=len(dates))

df = pd.DataFrame({
    'date': dates,
    'revenu': revenu
})
```

**Question :**
1. Calculer le **revenu moyen** par mois en utilisant les données temporelles.
2. Tracer l'évolution du **revenu quotidien** sur l'année avec un **graphique linéaire**.

---

### 23. *Calculs sur des données géographiques :*

**Données :**

```python
df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'latitude': [14.6928, 14.7232, 15.0167, 13.4422],
    'longitude': [-17.4467, -16.9647, -16.3500, -16.1811]
})
```

**Question :**
1. Calculer la **distance** (en kilomètres) entre chaque paire de clients en utilisant la formule de Haversine.
2. Tracer un **scatter plot** des positions géographiques des clients sur une carte du Sénégal (utiliser `matplotlib` et `Basemap`).

---

### 24. *Pandas MultiIndex :*

**Données :**

```python
df = pd.DataFrame({
    'ville': ['Dakar', 'Dakar', 'Touba', 'Touba', 'Saint-Louis', 'Saint-Louis'],
    'mois': ['Janvier', 'Février', 'Janvier', 'Février', 'Janvier', 'Février'],
    'revenu': [3000, 4500, 2800, 3500, 4000, 3800]
})

df.set_index(['ville', 'mois'], inplace=True)
```

**Question :**
1. Extraire toutes les données relatives à la ville de **Dakar** pour le mois de **Janvier**.
2. Calculer le **revenu total** par ville et mois en utilisant `groupby` avec un **MultiIndex**.

---

### 25. *Calculs sur des données volumineuses avec `apply()` :*

**Données :**

```python
import random

df = pd.DataFrame({
    'produit': ['Produit A', 'Produit B', 'Produit C', 'Produit D', 'Produit E'],
    'quantité': [random.randint(1, 100) for _ in range(5)],
    'prix_unitaire': [random.randint(5, 50) for _ in range(5)]
})
```

**Question :**
1. Calculer le **chiffre d'affaires** pour chaque produit en multipliant la quantité par le prix unitaire.
2. Calculer le **chiffre d'affaires total** en utilisant `apply()` sur la DataFrame.

---

### 26. *Apprentissage automatique simple avec Pandas :*

**Données :**

```python
from sklearn.datasets import load_iris

iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['target'] = iris.target
```

**Question :**
1. Appliquer un **standard scaling** sur les colonnes de caractéristiques (features) à l'aide de `StandardScaler` de `sklearn`.
2. Séparer les données en un ensemble d'entraînement et un ensemble de test, puis appliquer une **régression logistique** pour prédire la **classe** (`target`).

---

### 27. *Manipulation avancée avec `pivot_table()` et agrégations complexes :*

**Données :**

```python
df = pd.DataFrame({
    'produit': ['A', 'A', 'B', 'B', 'C', 'C'],
    'mois': ['Janvier', 'Février', 'Janvier', 'Février', 'Janvier', 'Février'],
    'quantité': [100, 150, 200, 250, 300, 350],
    'prix': [10, 12, 15, 14, 20, 18]
})
```

**Question :**
1. Créer une **pivot table** qui calcule le chiffre d'affaires pour chaque produit et chaque mois (quantité * prix).
2. Appliquer une **agégation personnalisée** pour calculer le **revenu moyen** par mois.

---

### 28. *Manipulation des colonnes avec conditions multiples :*

**Données :**

```python
df = pd.DataFrame({
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou'],
    'revenu': [3000, 4500, 2800, 3500],
    'note': [15, 18, 12, 14]
})
```

**Question :**
1. Ajouter une nouvelle colonne **"status"** qui attribue la valeur **"Bon"** si le revenu est supérieur à 3500 et la note est supérieure à 15, sinon **"Moyenne"**.
2. Filtrer les personnes qui ont un **revenu** inférieur à 3500 et une **note** supérieure à 14.

---

### 29. *Fusion et nettoyage de données :*

**Données :**

```python
df1 = pd.DataFrame({
    'id': [1, 2, 3],
    'nom': ['Lamine', 'Aminata', 'Sadio'],
    'revenu': [3000, 4500, 2800]
})

df2 = pd.DataFrame({
    'id': [2, 3, 4],
    'ville': ['Dakar', 'Touba', 'Ziguinchor']
})
```

**Question :**
1. Fusionner les deux DataFrames sur la colonne `id` et **supprimer les lignes avec des valeurs manquantes**.
2. Créer une nouvelle colonne **"revenu_total"** qui contient le revenu de chaque client après application d’une taxe de **5%**.

---

### 30. *Optimisation avec `Cython` et `NumPy` pour calculs intensifs :*

**Données :**

```python
import numpy as np

# Générer un grand tableau de données pour effectuer des calculs
data = np.random.rand(1000000)
```

**Question :**
1. Calculer la **moyenne** et l'**écart-type** du tableau `data` avec `NumPy` de manière optimisée.
2. Utiliser `Cython` pour paralléliser et accélérer le calcul de l'**écart-type** sur un jeu de données volumineux.

---

### 31. *Optimisation des performances avec `Dask` pour des DataFrames massifs :*

**Données :**

```python
import dask.dataframe as dd
import pandas as pd

# Générer de grandes données simulées
data = {
    'id': range(1, 10000001),
    'revenu': [3000 + i % 1000 for i in range(10000000)],
    'ville': ['Dakar', 'Touba', 'Saint-Louis', 'Ziguinchor'] * 2500000
}

df = pd.DataFrame(data)
df.to_csv("grandes_donnees.csv", index=False)
```

**Question :**
1. Charger le fichier CSV à l'aide de `Dask` et calculer le **revenu moyen** pour chaque ville.
2. Utiliser les fonctionnalités de `Dask` pour effectuer une opération de **groupby** et obtenir le **revenu total** par ville et par tranche de revenu (par exemple, `revenu < 4000` et `revenu >= 4000`).

---

### 32. *Utilisation des bases de données relationnelles avec `SQLAlchemy` et Pandas :*

**Données :**

```python
from sqlalchemy import create_engine

# Créer une base de données SQLite en mémoire
engine = create_engine('sqlite:///:memory:')

# Créer une table de données
df = pd.DataFrame({
    'id': [1, 2, 3, 4, 5],
    'nom': ['Lamine', 'Aminata', 'Sadio', 'Fatou', 'Mamadou'],
    'revenu': [3000, 4500, 2800, 3500, 4000],
    'ville': ['Dakar', 'Dakar', 'Touba', 'Saint-Louis', 'Ziguinchor']
})

# Sauvegarder le DataFrame dans une table SQL
df.to_sql('clients', engine, index=False, if_exists='replace')
```

**Question :**
1. Charger la table `clients` depuis la base de données et effectuer une requête SQL pour obtenir la **moyenne des revenus** par ville.
2. Mettre en place une opération **`JOIN`** entre deux tables pour combiner les données des clients avec une autre table contenant des informations supplémentaires (par exemple, une table `ventes`).

---

### 33. *Transformation de données avec `pipelines` et `apply()` optimisé :*

**Données :**

```python
import random

df = pd.DataFrame({
    'produit': ['Produit A', 'Produit B', 'Produit C', 'Produit D', 'Produit E'],
    'quantité': [random.randint(1, 100) for _ in range(5)],
    'prix_unitaire': [random.randint(5, 50) for _ in range(5)],
    'categorie': ['Electroménager', 'Vêtements', 'Alimentaire', 'Mobilier', 'Alimentaire']
})
```

**Question :**
1. Créer une **pipeline** qui effectue les transformations suivantes :
    - Filtrer les produits dont la quantité est supérieure à 20.
    - Calculer le chiffre d'affaires pour chaque produit.
    - Ajouter une colonne de **marge bénéficiaire** calculée comme 15% du chiffre d'affaires.
2. Appliquer cette pipeline sur des données plus volumineuses et optimiser les performances avec `apply()`.

---

### 34. *Création et manipulation d'un réseau de relations avec `NetworkX` :*

**Données :**

```python
import networkx as nx

# Création d'un graphe simple représentant des relations entre clients
G = nx.Graph()
G.add_edges_from([
    ('Lamine', 'Aminata'),
    ('Sadio', 'Lamine'),
    ('Aminata', 'Fatou'),
    ('Fatou', 'Mamadou')
])

# Affichage du graphe
import matplotlib.pyplot as plt
nx.draw(G, with_labels=True)
plt.show()
```

**Question :**
1. Créer un **DataFrame** à partir du graphe, où chaque ligne représente une relation (arc) entre deux personnes.
2. Utiliser les **mesures de centralité** pour déterminer la personne la plus influente dans le réseau (par exemple, **centralité de degré** et **centralité de proximité**).

---

### 35. *Régression et prédictions avancées avec `scikit-learn` et Pandas :*

**Données :**

```python
from sklearn.datasets import load_boston

# Charger un jeu de données de régression (Boston Housing Dataset)
boston = load_boston()
df = pd.DataFrame(boston.data, columns=boston.feature_names)
df['target'] = boston.target
```

**Question :**
1. Appliquer une **régression linéaire** pour prédire le prix des maisons (`target`) en fonction des caractéristiques (features).
2. Évaluer la performance du modèle avec les métriques de **R2** et **RMSE**.
3. Utiliser **GridSearchCV** pour optimiser les hyperparamètres du modèle de régression.

---

### 36. *Optimisation avec `Numba` pour des calculs rapides :*

**Données :**

```python
import numpy as np

# Générer un grand tableau de données pour des calculs de performance
data = np.random.rand(1000000)
```

**Question :**
1. Utiliser `Numba` pour **accélérer** le calcul de la somme cumulée sur le tableau `data`.
2. Comparer les performances avec une approche **vectorisée** de NumPy pour la somme cumulative.

---

### 37. *Traitement de données textuelles avec `TF-IDF` et `CountVectorizer` :*

**Données :**

```python
from sklearn.feature_extraction.text import TfidfVectorizer

# Exemple de corpus de textes
documents = [
    'Le python est un langage de programmation.',
    'Les données sont traitées avec Pandas.',
    'L’analyse des données est une étape clé en Data Science.',
    'L’intelligence artificielle révolutionne l’industrie.'
]

# Créer un vecteur TF-IDF
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(documents)
```

**Question :**
1. Appliquer une **analyse de sentiment** sur chaque document en utilisant un modèle TF-IDF avec `TfidfVectorizer`.
2. Calculer la **similarité cosinus** entre tous les documents pour déterminer les plus proches les uns des autres.

---

### 38. *Calculs sur des matrices creuses avec `scipy` et `pandas` :*

**Données :**

```python
from scipy.sparse import csr_matrix

# Créer une matrice creuse représentant les achats des clients (produit vs client)
data = csr_matrix([
    [1, 0, 0, 3],
    [0, 0, 1, 0],
    [2, 1, 0, 0]
])

df_sparse = pd.DataFrame(data.toarray(), columns=['Produit A', 'Produit B', 'Produit C', 'Produit D'])
```

**Question :**
1. Manipuler la matrice creuse pour effectuer des calculs de **recommandation** de produits en fonction de la **matrice de similarité**.
2. Convertir la matrice creuse en **format Pandas** et calculer les **moyennes** des achats pour chaque produit.

---

### 39. *Classification avec `SVM` et validation croisée sur des données complexes :*

**Données :**

```python
from sklearn.datasets import load_wine

# Charger le jeu de données "Wine"
wine = load_wine()
df = pd.DataFrame(wine.data, columns=wine.feature_names)
df['target'] = wine.target
```

**Question :**
1. Appliquer une **classification avec SVM** pour prédire la classe (`target`) du vin en fonction de ses caractéristiques.
2. Utiliser **validation croisée** pour évaluer la performance du modèle SVM avec un jeu de données de taille modérée.

---

### 40. *Traitement de données géospatiales avec `GeoPandas` :*

**Données :**

```python
import geopandas as gpd
from shapely.geometry import Point

# Création de points géographiques
points = [Point(2.2945, 48.8584), Point(2.2950, 48.8590), Point(2.2960, 48.8600)]
gdf = gpd.GeoDataFrame(geometry=points)
```

**Question :**
1. Charger un fichier de **polygones géographiques** représentant des quartiers d'une ville et effectuer une **jointure spatiale** avec les points pour savoir à quel quartier chaque point appartient.
2. Calculer la **distance moyenne** entre tous les points dans le DataFrame géospatial.

---

### 41. *Manipulation avancée de séries temporelles avec `Pandas` :*

**Données :**

```python
import pandas as pd
import numpy as np

# Générer des données temporelles
dates = pd.date_range('20230101', periods=100)
df_time = pd.DataFrame({
    'date': dates,
    'valeur': np.random.randn(100).cumsum() + 100
})
df_time.set_index('date', inplace=True)
```

**Question :**
1. Appliquez une **moyenne mobile** sur la colonne `valeur` avec une fenêtre de 7 jours.
2. Créez une nouvelle colonne qui calcule la **variation quotidienne** en pourcentage de la colonne `valeur`.
3. Utilisez `resample` pour obtenir les données agrégées par **mois**, puis calculez la **moyenne mensuelle**.

---

### 42. *Analyse de séries temporelles avec décomposition et prévisions :*

**Données :**

```python
import statsmodels.api as sm

# Générer une série temporelle plus complexe
data = pd.Series(np.random.randn(100) + np.linspace(1, 100, 100), index=dates)

# Décomposition de la série temporelle
decomposition = sm.tsa.seasonal_decompose(data, model='additive', period=12)
decomposition.plot()
```

**Question :**
1. Décomposez la série temporelle en **tendance**, **saisonnière** et **résidus**.
2. Utilisez un modèle de prévision basé sur les résidus pour prédire la prochaine **valeur** de la série temporelle (en utilisant un modèle simple de **moyenne mobile** ou **ARIMA**).
3. Évaluez la performance du modèle avec des mesures de **RMSE** et **MAE**.

---

### 43. *Optimisation des jointures sur de grandes bases de données :*

**Données :**

```python
# Générer de grandes bases de données simulées
df1 = pd.DataFrame({
    'id': range(1, 1000001),
    'nom': ['Client_' + str(i) for i in range(1, 1000001)],
    'revenu': np.random.randint(1000, 5000, size=1000000)
})

df2 = pd.DataFrame({
    'id': range(500000, 1500001),
    'nom': ['Client_' + str(i) for i in range(500000, 1500001)],
    'ville': ['Dakar', 'Touba', 'Saint-Louis', 'Ziguinchor'] * 250000
})
```

**Question :**
1. Réalisez une **jointure `merge`** entre les deux DataFrames pour obtenir une table combinée.
2. Testez les performances de cette jointure avec un **échantillon de 100 000 lignes** et observez les impacts sur le temps de calcul.
3. Utilisez `dask` ou `modin` pour effectuer cette même jointure de manière plus performante sur le **DataFrame complet**.

---

### 44. *Analyse exploratoire avancée avec visualisation interactive (avec `plotly` ou `bokeh`) :*

**Données :**

```python
import plotly.express as px

# Exemple de DataFrame simulée avec des informations d'utilisateurs
df_vis = pd.DataFrame({
    'age': np.random.randint(18, 60, size=100),
    'revenu': np.random.randint(1500, 5000, size=100),
    'ville': np.random.choice(['Dakar', 'Touba', 'Saint-Louis'], size=100)
})
```

**Question :**
1. Créez une **visualisation interactive** de type **scatter plot** avec `plotly` montrant la relation entre `age` et `revenu` pour les différentes villes.
2. Ajoutez une **barre de sélection** pour filtrer les données par `ville` et affichez un graphique mettant en évidence les tendances spécifiques à chaque ville.
3. Utilisez **`plotly`** ou **`bokeh`** pour afficher un **heatmap** de la distribution des âges et revenus.

---

### 45. *Calcul des corrélations sur de grandes données :*

**Données :**

```python
# Générer des données massives
data_large = np.random.randn(1000000, 10)
df_large = pd.DataFrame(data_large, columns=[f'feature_{i}' for i in range(1, 11)])
```

**Question :**
1. Calculez la **matrice de corrélation** de ces données.
2. Utilisez un **algorithme de réduction de dimensionnalité** comme PCA pour réduire les données à 3 dimensions, puis visualisez la matrice de corrélations dans cet espace réduit.
3. Effectuez un **filtrage des caractéristiques corrélées** et sélectionnez celles qui ne sont pas fortement corrélées entre elles (par exemple, seuil de 0.9).

---

### 46. *Utilisation de `MultiIndex` pour des données hiérarchiques :*

**Données :**

```python
# Créer un MultiIndex pour un DataFrame hiérarchique
index = pd.MultiIndex.from_tuples([
    ('2023-01', 'A'), ('2023-01', 'B'), ('2023-02', 'A'), ('2023-02', 'B'),
    ('2023-03', 'A'), ('2023-03', 'B')
], names=['mois', 'produit'])

df_multi = pd.DataFrame({
    'ventes': [100, 200, 150, 300, 120, 250],
    'revenu': [1000, 2000, 1500, 3000, 1200, 2500]
}, index=index)
```

**Question :**
1. Créez un **pivot** avec le MultiIndex pour afficher les ventes par mois et produit.
2. Effectuez un calcul **d'agrégation personnalisée** pour obtenir la somme des `ventes` et la moyenne des `revenu` par mois.
3. Effectuez une opération de **filtrage conditionnel** sur les résultats pour ne garder que les mois où les `ventes` sont supérieures à 150.

---

### 47. *Traitement de données non structurées avec `regex` et `Pandas` :*

**Données :**

```python
# Exemple de données non structurées
df_non_struct = pd.DataFrame({
    'texte': ['ID: 12345, Nom: Ali', 'ID: 23456, Nom: Aissatou', 'ID: 34567, Nom: Sadio']
})
```

**Question :**
1. Utilisez **expressions régulières (`regex`)** pour extraire les valeurs d'ID et de nom et créez de nouvelles colonnes `id` et `nom`.
2. Remplacez toutes les occurrences du mot **"Ali"** par **"Mamadou"** dans la colonne `texte` et effectuez une vérification pour s'assurer qu'aucune instance de "Ali" ne reste.

---

### 48. *Simulation de données et génération de séries temporelles avec `numpy` et `pandas` :*

**Données :**

```python
# Générer une série temporelle de données aléatoires simulant une série de températures
temps = np.random.normal(loc=30, scale=5, size=1000)
dates = pd.date_range('2022-01-01', periods=1000)
df_temps = pd.DataFrame({'date': dates, 'temp': temps})
df_temps.set_index('date', inplace=True)
```

**Question :**
1. Générer une série de **températures mensuelles moyennes** à partir de cette série temporelle en utilisant `resample('M')`.
2. Utilisez un **modèle de prévision (ARIMA ou simple moyenne mobile)** pour prédire la température du mois suivant et visualisez la prédiction.

---

### 49. *Prétraitement de données et création d'un pipeline avec `scikit-learn` :*

**Données :**

```python
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Données exemple avec des valeurs numériques et catégorielles
df_pipeline = pd.DataFrame({
    'age': [25, 30, 35, 40, 45],
    'ville': ['Dakar', 'Touba', 'Saint-Louis', 'Ziguinchor', 'Dakar'],
    'revenu': [3000, 4000, 5000, 3500, 4500]
})
```

**Question :**
1. Créez un **pipeline de prétraitement** combinant la normalisation des colonnes numériques (`age` et `revenu`) avec un **encodage one-hot** pour la colonne `ville`.
2. Appliquez ce pipeline aux données et effectuez une transformation des caractéristiques.
3. Entraînez un modèle de **régression linéaire** sur ces données transformées.

---

### 50. *Optimisation et traitement parallèle de données volumineuses avec `multiprocessing` et Pandas :*

**Données :**

```python
# Simuler de grandes données
data_large = np.random.randn(10000000, 10)
df_large = pd.DataFrame(data_large, columns=[f'feature_{i}' for i in range(1, 11)])
```

**Question :**
1. Utilisez **multiprocessing** pour appliquer une fonction de transformation sur chaque colonne du DataFrame volumineux en parallèle.
2. Comparez les performances de cette approche parallèle avec une version **série**.
3. Appliquez un traitement **map-reduce** pour agréger les résultats de chaque transformation et obtenir des statistiques sur l'ensemble du DataFrame.

---
