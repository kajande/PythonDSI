# Chapitre 2 : Pandas

## **1. Introduction aux structures de données de Pandas**

### **Objectifs d'apprentissage :**
- Comprendre les structures de données principales de Pandas : Series et DataFrame.
- Savoir créer, manipuler et explorer ces structures de données.

### **Contenu :**

#### **Introduction aux Pandas**
- Aperçu de Pandas : étendue des capacités et comparaison avec NumPy.
- Installation : `pip install pandas`.

#### **Series**
- Création d'une Series à partir de listes ou de dictionnaires :
  ```python
  import pandas as pd
  s = pd.Series([10, 20, 30, 40])
  print(s)

  s_dict = pd.Series({'a': 1, 'b': 2, 'c': 3})
  print(s_dict)
  ```
- Accès aux éléments d'une Series (par position ou par index).
  ```python
  print(s[0])
  print(s_dict['b'])
  ```
- Propriétés principales : `.index`, `.values`, `.dtype`.

#### **DataFrame**
- Création d'un DataFrame à partir de différentes sources :
  - Listes imbriquées.
  - Dictionnaires de listes.
  - Fichiers CSV (avec `pd.read_csv`).
  ```python
  data = {'Nom': ['Alice', 'Bob', 'Charlie'], 'Âge': [25, 30, 35]}
  df = pd.DataFrame(data)
  print(df)
  ```
- Exploration d'un DataFrame :
  - Affichage des premières lignes : `df.head()`.
  - Informations sur les colonnes et types : `df.info()`.
  - Statistiques descriptives : `df.describe()`.

### **Exercices :**
1. Créez une Series contenant les noms des jours de la semaine et leurs indices correspondants.
2. Construisez un DataFrame à partir d'un dictionnaire contenant les noms d'étudiants et leurs scores dans trois matières.
3. Chargez un fichier CSV de votre choix en DataFrame et affichez les 5 premières lignes.

---

## **2. Manipulation des DataFrames**

### **Objectifs d'apprentissage :**
- Apprendre à manipuler les colonnes et les lignes des DataFrames.
- Filtrer, trier et modifier les données.

### **Contenu :**

#### **Accès aux Données**
- Accès à une colonne :
  ```python
  print(df['Nom'])
  ```
- Accès à plusieurs colonnes :
  ```python
  print(df[['Nom', 'Âge']])
  ```
- Accès à une ligne (par index) :
  ```python
  print(df.iloc[0])
  ```
- Accès à une ligne ou colonne par étiquette :
  ```python
  print(df.loc[0, 'Nom'])
  ```

#### **Filtrage des Données**
- Utilisation de conditions :
  ```python
  print(df[df['Âge'] > 25])
  ```
- Utilisation de plusieurs conditions :
  ```python
  print(df[(df['Âge'] > 25) & (df['Nom'] == 'Charlie')])
  ```

#### **Ajout et Suppression de Colonnes/Lignes**
- Ajouter une colonne calculée :
  ```python
  df['Année de naissance'] = 2025 - df['Âge']
  ```
- Supprimer une colonne :
  ```python
  df = df.drop('Âge', axis=1)
  ```
- Supprimer une ligne :
  ```python
  df = df.drop(0, axis=0)
  ```

#### **Tri des Données**
- Trier par colonne :
  ```python
  df = df.sort_values('Nom')
  ```
- Trier par plusieurs colonnes :
  ```python
  df = df.sort_values(['Nom', 'Âge'], ascending=[True, False])
  ```

### **Exercices :**
1. Créez un DataFrame contenant le nom, l'âge et le salaire d'employés, puis ajoutez une colonne "Année de naissance".
2. Filtrez les employés ayant un salaire supérieur à une valeur spécifiée.
3. Supprimez les lignes où l'âge est inférieur à 30, puis triez le DataFrame par ordre décroissant des salaires.

---

## **3. Gestion des Données Manquantes**

### **Objectifs d'apprentissage :**
- Identifier et gérer les données manquantes dans les DataFrames.

### **Contenu :**

#### **Identification des Données Manquantes**
- Utilisation de `isna` et `notna` :
  ```python
  print(df.isna())
  print(df.notna())
  ```
- Compter les valeurs manquantes :
  ```python
  print(df.isna().sum())
  ```

#### **Traitement des Données Manquantes**
- Remplir les valeurs manquantes :
  ```python
  df['Salaire'] = df['Salaire'].fillna(0)
  ```
- Supprimer les lignes/colonnes avec des valeurs manquantes :
  ```python
  df = df.dropna(axis=0)
  ```

### **Exercices :**
1. Chargez un DataFrame contenant des données manquantes et remplacez-les par la médiane des colonnes concernées.
2. Supprimez toutes les lignes où plus de deux valeurs sont manquantes.
3. Identifiez les colonnes avec des valeurs manquantes et affichez leur pourcentage respectif de valeurs manquantes.

---

## **4. Fusion et Jointures des DataFrames**

### **Objectifs d'apprentissage :**

- Comprendre les différentes techniques de fusion et jointure en Pandas.
- Appliquer des jointures simples et avancées pour combiner des DataFrames.

### **Contenu :**

#### **Fusion de DataFrames**

- Fusion avec `concat` :
  - Combinaison verticale et horizontale.
  ```python
  df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
  df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})
  result = pd.concat([df1, df2])
  print(result)
  ```

#### **Jointures des DataFrames**

- Jointure avec `merge` :
  - Jointure interne (inner join).
  - Jointure externe (outer join).
  - Jointures à gauche et à droite (left join et right join).
  ```python
  df1 = pd.DataFrame({'key': ['A', 'B', 'C'], 'value1': [1, 2, 3]})
  df2 = pd.DataFrame({'key': ['B', 'C', 'D'], 'value2': [4, 5, 6]})
  result = pd.merge(df1, df2, on='key', how='inner')
  print(result)
  ```
- Utilisation de plusieurs clés pour les jointures.

#### **Gestion des conflits dans les colonnes**

- Gérer les colonnes avec le même nom lors d'une jointure :
  ```python
  result = pd.merge(df1, df2, on='key', suffixes=('_df1', '_df2'))
  print(result)
  ```

### **Exercices :**

1. Créez deux DataFrames et fusionnez-les en utilisant `concat` avec un indice ignoré.
2. Effectuez une jointure externe entre deux DataFrames avec des clés différentes.
3. Gérez les conflits de colonnes après une jointure interne.

---

## **5. GroupBy et Agrégations Avancées**

### **Objectifs d'apprentissage :**

- Apprendre à utiliser `groupby` pour regrouper les données en fonction d'une ou plusieurs colonnes.
- Appliquer des fonctions d'agrégation avancées sur des groupes.

### **Contenu :**

#### **Introduction au GroupBy**

- Comprendre le fonctionnement du GroupBy : "Split-Apply-Combine".
  ```python
  df = pd.DataFrame({'Catégorie': ['A', 'A', 'B', 'B'],
                     'Valeur': [10, 20, 30, 40]})
  grouped = df.groupby('Catégorie')
  print(grouped.sum())
  ```

#### **Agrégations simples**

- Moyenne, somme, minimum, maximum.
  ```python
  print(grouped.mean())
  print(grouped.max())
  ```

#### **Agrégations personnalisées**

- Utilisation de fonctions lambda pour les agrégations.
  ```python
  print(grouped.agg(lambda x: x.sum() / 2))
  ```

#### **GroupBy sur plusieurs colonnes**

- Regroupement par plusieurs colonnes et application d'agrégations multiples.
  ```python
  df = pd.DataFrame({'Catégorie': ['A', 'A', 'B', 'B'],
                     'Sous-Catégorie': ['X', 'Y', 'X', 'Y'],
                     'Valeur': [10, 20, 30, 40]})
  grouped = df.groupby(['Catégorie', 'Sous-Catégorie']).sum()
  print(grouped)
  ```

### **Exercices :**

1. Créez un DataFrame avec des ventes par région et par mois, puis regroupez par région pour obtenir les ventes totales.
2. Appliquez plusieurs fonctions d'agrégation (moyenne et somme) sur les données groupées.
3. Implémentez une agrégation personnalisée pour normaliser les valeurs au sein de chaque groupe.
