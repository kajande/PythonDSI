# Chapitre 1 : NumPy

## **1. Tableaux et Opérations**
### **Objectifs d'apprentissage :**
- Comprendre ce que sont les tableaux NumPy et pourquoi ils sont efficaces.
- Apprendre à créer, inspecter et manipuler des tableaux.
- Effectuer des opérations arithmétiques de base sur les tableaux.

### **Contenu :**
#### **Introduction aux Tableaux NumPy**
- Aperçu de NumPy et de son importance dans le calcul scientifique.
- Comparaison des tableaux NumPy avec les listes Python.
- Installation : `pip install numpy`.

#### **Création de Tableaux**
1. **À partir de listes :**
   ```python
   import numpy as np
   arr = np.array([1, 2, 3, 4, 5])
   print(arr)
   ```
2. **En utilisant des fonctions intégrées :**
   - `np.zeros((2, 3))`
   - `np.ones((3, 3))`
   - `np.arange(1, 10, 2)`
   - `np.linspace(0, 1, 5)`

#### **Opérations sur les Tableaux**
- Addition, soustraction, multiplication et division.
  ```python
  a = np.array([1, 2, 3])
  b = np.array([4, 5, 6])
  print(a + b)
  print(a * b)
  ```
- Opérations scalaires.
- Fonctions d'agrégation (par exemple, `np.sum`, `np.mean`, `np.max`, `np.min`).

### **Exercices :**
1. Créez un tableau 3x3 de uns et multipliez chaque élément par 5.
2. Générez un tableau de 10 valeurs équidistantes entre 0 et 100.
3. Ajoutez deux tableaux élément par élément et calculez leur moyenne.

---

## **2. Indexation et Tranchage**
### **Objectifs d'apprentissage :**
- Apprendre à accéder à des éléments individuels, des lignes, des colonnes et des sous-tableaux.
- Comprendre les techniques d'indexation avancées.

### **Contenu :**
#### **Accès aux Éléments**
- Indexation dans les tableaux 1D.
  ```python
  arr = np.array([10, 20, 30, 40, 50])
  print(arr[2])  # Résultat : 30
  ```
- Accès aux éléments dans les tableaux 2D (notation ligne-colonne).
  ```python
  matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  print(matrix[1, 2])  # Résultat : 6
  ```

#### **Tranchage des Tableaux**
- Tranchage des tableaux 1D.
  ```python
  arr = np.array([10, 20, 30, 40, 50])
  print(arr[1:4])  # Résultat : [20, 30, 40]
  ```
- Tranchage des tableaux 2D (lignes et colonnes).
  ```python
  print(matrix[0:2, 1:3])  # Résultat : [[2, 3], [5, 6]]
  ```

#### **Indexation Avancée**
- Indexation booléenne.
  ```python
  arr = np.array([1, 2, 3, 4, 5])
  print(arr[arr > 3])  # Résultat : [4, 5]
  ```
- Indexation fantaisie avec des tableaux d'indices.
  ```python
  indices = [0, 2, 4]
  print(arr[indices])  # Résultat : [1, 3, 5]
  ```

### **Exercices :**
1. Extrayez la deuxième ligne d'une matrice 3x3.
2. Tronquez un tableau 5x5 pour obtenir le sous-tableau central 3x3.
3. Utilisez l'indexation booléenne pour filtrer les éléments supérieurs à une valeur donnée dans un tableau.

---

## **3. Fonctions Mathématiques et Statistiques**
### **Objectifs d'apprentissage :**
- Effectuer des opérations mathématiques sur les tableaux.
- Utiliser les fonctions intégrées pour l'analyse statistique.

### **Contenu :**
#### **Opérations Mathématiques**
- Opérations élémentaires.
  ```python
  arr = np.array([1, 2, 3])
  print(np.sqrt(arr))
  print(np.log(arr))
  ```
- Opérations matricielles.
  ```python
  a = np.array([[1, 2], [3, 4]])
  b = np.array([[2, 0], [1, 3]])
  print(np.dot(a, b))
  ```

#### **Fonctions Statistiques**
- Moyenne, médiane, variance et écart-type.
  ```python
  arr = np.array([1, 2, 3, 4, 5])
  print(np.mean(arr))
  print(np.var(arr))
  ```
- Min, max et somme.

### **Exercices :**
1. Calculez la racine carrée de chaque élément d'un tableau donné.
2. Trouvez la variance et l'écart-type d'un ensemble de données.
3. Effectuez une multiplication matricielle pour deux matrices 2x2.

---

## **4. Broadcasting**
### **Objectifs d'apprentissage :**
- Comprendre le broadcasting et son rôle dans l'efficacité des calculs.
- Apprendre les règles du broadcasting et les appliquer.

### **Contenu :**
#### **Qu'est-ce que le Broadcasting ?**
- Explication de la manière dont NumPy gère les opérations entre tableaux de formes différentes.
- Règles du broadcasting :
  1. Si les tableaux diffèrent en rang, le tableau le plus petit est complété avec des uns sur sa gauche.
  2. Les tailles des dimensions doivent correspondre ou l'une d'elles doit être 1.

#### **Exemples de Broadcasting**
1. **Ajout d'un scalaire à un tableau :**
   ```python
   arr = np.array([1, 2, 3])
   print(arr + 10)  # Résultat : [11, 12, 13]
   ```
2. **Opérations entre tableaux de formes différentes :**
   ```python
   a = np.array([[1, 2, 3], [4, 5, 6]])
   b = np.array([10, 20, 30])
   print(a + b)
   # Résultat :
   # [[11, 22, 33]
   #  [14, 25, 

#### **Limitations du Broadcasting**

- Quand le broadcasting échoue.

```python
a = np.array([1, 2, 3])
b = np.array([4, 5])
# Cette opération lèvera une erreur : ValueError: operands could not be broadcast together
print(a + b)
```

### **Exercices :**

1. Ajoutez un scalaire à chaque élément d'un tableau 4x4.

2. Multipliez une matrice 3x2 par un tableau 1D de longueur 2.

3. Identifiez une opération qui échoue à cause des règles de broadcasting et corrigez-la en ajustant les dimensions des tableaux.

