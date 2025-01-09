# Chapitre 3 : Matplotlib et Visualisations

## **Objectifs d'apprentissage :**

- Comprendre les concepts fondamentaux de Matplotlib.
- Apprendre à créer divers types de graphiques pour explorer et présenter des données.
- Personnaliser les visualisations pour des présentations professionnelles.

---

## **1. Introduction à Matplotlib**

### **Aperçu :**

- Matplotlib est une bibliothèque de visualisation puissante pour Python, idéale pour créer des graphiques 2D.
- Installation :
  ```bash
  pip install matplotlib
  ```

### **Premiers pas avec Matplotlib**

- Importation et création d'un graphique simple :
  ```python
  import matplotlib.pyplot as plt

  plt.plot([1, 2, 3, 4], [10, 20, 25, 30])
  plt.title("Exemple de graphique simple")
  plt.show()
  ```

---

## **2. Types de graphiques**

### **Graphiques en ligne (Line Plot)**

- Utile pour représenter les tendances dans des données continues.
- Exemple :
  ```python
  plt.plot([1, 2, 3, 4], [10, 20, 25, 30], label="Ligne")
  plt.xlabel("X")
  plt.ylabel("Y")
  plt.title("Graphique en ligne")
  plt.legend()
  plt.show()
  ```

### **Graphiques à barres (Bar Plot)**

- Idéal pour comparer des catégories.
- Exemple :
  ```python
  categories = ['A', 'B', 'C']
  values = [5, 7, 3]
  plt.bar(categories, values)
  plt.title("Graphique à barres")
  plt.show()
  ```

### **Histogrammes**

- Utilisés pour représenter la distribution des données.
- Exemple :
  ```python
  data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
  plt.hist(data, bins=4, color='blue', alpha=0.7)
  plt.title("Histogramme")
  plt.show()
  ```

### **Graphiques circulaires (Pie Chart)**

- Représente les proportions des catégories dans un ensemble.
- Exemple :
  ```python
  labels = ['Catégorie A', 'Catégorie B', 'Catégorie C']
  sizes = [50, 30, 20]
  plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=140)
  plt.title("Graphique circulaire")
  plt.show()
  ```

### **Nuages de points (Scatter Plot)**

- Idéal pour visualiser la relation entre deux variables.
- Exemple :
  ```python
  x = [5, 7, 8, 7, 2, 17, 2, 9]
  y = [99, 86, 87, 88, 100, 86, 103, 87]
  plt.scatter(x, y, color='red')
  plt.title("Nuage de points")
  plt.xlabel("Variable X")
  plt.ylabel("Variable Y")
  plt.show()
  ```

---

## **3. Personnalisation des graphiques**

### **Ajout de titres, labels et légendes**

- Ajouter un titre :
  ```python
  plt.title("Titre du graphique")
  ```
- Ajouter des labels pour les axes :
  ```python
  plt.xlabel("Axe X")
  plt.ylabel("Axe Y")
  ```
- Ajouter une légende :
  ```python
  plt.legend(loc='best')
  ```

### **Styles et couleurs**

- Modifier le style des lignes :
  ```python
  plt.plot(x, y, linestyle='--', color='green', marker='o')
  ```

- Utiliser des styles prédéfinis :
  ```python
  plt.style.use('ggplot')
  ```

---

## **4. Exercices pratiques**

1. Créez un graphique en ligne montrant l'évolution des températures sur une semaine.
```python
jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
temperatures = [18, 20, 22, 21, 19, 23, 25]
```

2. Construisez un graphique à barres représentant les ventes de trois produits différents.

```python
produits = ['Bissap', 'Jinjer', 'Bouye']
ventes = [150, 200, 120]
```

3. Réalisez un histogramme des notes des étudiants dans une classe.

```python
notes = [10, 12, 14, 14, 15, 10, 13, 12, 11, 14, 15, 16, 17, 18, 10, 12, 14]
```

4. Générez un graphique circulaire pour représenter la part de marché de quatre entreprises.

```python
entreprises = ['Entreprise A', 'Entreprise B', 'Entreprise C', 'Entreprise D']
parts = [35, 25, 20, 20]
```

5. Créez un nuage de points montrant la relation entre l'âge et le revenu d'un groupe d'individus.

```python
ages = [22, 25, 30, 35, 40, 45, 50, 55, 60]
revenus = [2200, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000]
```

