# Chapitre : Les structures de données en Python

## Objectifs
Découvrir les structures de données fondamentales en Python et apprendre à les manipuler pour résoudre des problèmes courants.

## Contenu

### Les listes
Une **liste** est une structure de données qui peut contenir plusieurs éléments, éventuellement de types différents. Les listes sont définies avec des crochets `[]`.

#### Créer et manipuler une liste
```python
# Créer une liste
fruits = ["pomme", "banane", "cerise"]

# Ajouter un élément
fruits.append("orange")

# Accéder à un élément par son index
print(fruits[0])  # Affiche : pomme

# Supprimer un élément
fruits.remove("banane")

# Parcourir une liste
for fruit in fruits:
    print(fruit)
```

#### Opérations courantes sur les listes
- Longueur : `len(liste)`
- Concaténation : `liste1 + liste2`
- Slicing : `liste[start:end]`

Exemple :
```python
nombres = [1, 2, 3, 4, 5]
print(nombres[1:4])  # Affiche : [2, 3, 4]
```

---

### Les tuples
Un **tuple** est similaire à une liste, mais il est **immutable** (non modifiable). Les tuples sont définis avec des parenthèses `()`.

#### Exemple
```python
tuple_exemple = (1, 2, 3)
print(tuple_exemple[0])  # Affiche : 1

# Les tuples ne peuvent pas être modifiés
tuple_exemple[0] = 4  # Provoque une erreur
```

---

### Les ensembles
Un **ensemble** est une collection non ordonnée d’éléments uniques, définie avec des accolades `{}`.

#### Exemple
```python
# Créer un ensemble
ensemble = {1, 2, 3, 4}

# Ajouter un élément
ensemble.add(5)

# Supprimer un élément
ensemble.remove(3)

# Opérations sur les ensembles
ensemble2 = {3, 4, 5, 6}
print(ensemble | ensemble2)  # Union : {1, 2, 3, 4, 5, 6}
print(ensemble & ensemble2)  # Intersection : {4, 5}
```

---

### Les dictionnaires
Un **dictionnaire** est une structure de données qui stocke des paires clé-valeur. Les dictionnaires sont définis avec des accolades `{}`.

#### Exemple
```python
# Créer un dictionnaire
etudiant = {"nom": "Alice", "age": 20, "note": 18}

# Accéder à une valeur
print(etudiant["nom"])  # Affiche : Alice

# Ajouter ou modifier une clé
etudiant["adresse"] = "Dakar"

# Supprimer une clé
etudiant.pop("note")

# Parcourir un dictionnaire
for cle, valeur in etudiant.items():
    print(f"{cle} : {valeur}")
```

---

### Les chaînes de caractères comme structures de données
Les chaînes sont des séquences immutables qui permettent diverses opérations comme le slicing, la recherche, et la concaténation.

#### Exemple
```python
texte = "Bonjour Python"
print(texte[0:7])  # Affiche : Bonjour
print("Python" in texte)  # Affiche : True
```

---

## Applications pratiques

#### Exemple 1 : Suppression des doublons dans une liste
```python
def supprimer_doublons(liste):
    return list(set(liste))

nombres = [1, 2, 2, 3, 4, 4, 5]
print(supprimer_doublons(nombres))  # Affiche : [1, 2, 3, 4, 5]
```

#### Exemple 2 : Compter la fréquence des mots
```python
def compter_mots(texte):
    mots = texte.split()
    compteur = {}
    for mot in mots:
        compteur[mot] = compteur.get(mot, 0) + 1
    return compteur

texte = "Python est génial Python est facile"
print(compter_mots(texte))
```

#### Exemple 3 : Regrouper des données
```python
donnees = [
    {"nom": "Alice", "note": 18},
    {"nom": "Bob", "note": 15},
    {"nom": "Charlie", "note": 17}
]

# Créer un dictionnaire des étudiants avec leurs notes
dictionnaire_notes = {etudiant["nom"]: etudiant["note"] for etudiant in donnees}
print(dictionnaire_notes)
```

---

## Exercices
1. Écrire une fonction qui trouve l’élément le plus fréquent dans une liste.
2. Créer une fonction qui retourne les clés d’un dictionnaire triées par leurs valeurs.
3. Implémenter un programme qui regroupe les mots d’une liste en fonction de leur longueur.
4. Écrire une fonction qui vérifie si une chaîne est un palindrome (se lit de la même façon dans les deux sens).
