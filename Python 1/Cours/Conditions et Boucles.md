# Chapitre 4 : Les conditions et les boucles

## Objectifs
Apprendre à contrôler le flux d'exécution des programmes avec les structures conditionnelles et les boucles en Python.

## Contenu

### Les conditions
Les structures conditionnelles permettent de prendre des décisions basées sur des expressions logiques.

#### `if`, `elif`, et `else`
Utilisez `if` pour exécuter un bloc de code si une condition est vraie. `elif` permet de tester d'autres conditions, et `else` définit un bloc exécuté si aucune condition précédente n'est satisfaite.

Exemple :
```python
age = int(input("Entrez votre âge : "))
if age >= 18:
    print("Vous êtes majeur.")
elif 13 <= age < 18:
    print("Vous êtes adolescent.")
else:
    print("Vous êtes enfant.")
```

#### Conditions imbriquées
Les conditions peuvent être imbriquées pour gérer des cas complexes.
```python
note = int(input("Entrez votre note : "))
if note >= 10:
    if note >= 15:
        print("Excellent !")
    else:
        print("Passable.")
else:
    print("Échec.")
```

#### Opérateurs logiques dans les conditions
Combinez des expressions avec `and`, `or`, et `not` pour construire des conditions complexes.
```python
score = 85
age = 20
if score > 80 and age >= 18:
    print("Admis avec distinction.")
```

---

### Les boucles
Les boucles permettent de répéter une action plusieurs fois.

#### La boucle `while`
La boucle `while` répète une action tant qu'une condition est vraie.

Exemple :
```python
compteur = 0
while compteur < 5:
    print(f"Compteur : {compteur}")
    compteur += 1
```

Attention : Assurez-vous que la condition devient fausse à un moment pour éviter des boucles infinies.

#### La boucle `for`
La boucle `for` est utilisée pour itérer sur une séquence (liste, chaîne, plage, etc.).

Exemple :
```python
for lettre in "Python":
    print(lettre)

for nombre in range(1, 6):
    print(nombre)  # Affiche 1, 2, 3, 4, 5
```

#### Instructions `break` et `continue`
- **`break`** : Interrompt la boucle en cours.
- **`continue`** : Passe directement à l'itération suivante.

Exemple :
```python
for i in range(10):
    if i == 5:
        break  # Sort de la boucle lorsque i vaut 5
    if i % 2 == 0:
        continue  # Ignore les nombres pairs
    print(i)
```

#### Boucles avec `else`
Une boucle peut avoir une clause `else`, exécutée si aucune interruption (`break`) ne se produit.
```python
for i in range(5):
    print(i)
else:
    print("Boucle terminée normalement.")
```

---

### Applications pratiques

#### Exemple 1 : Vérifier si un nombre est premier
```python
def est_premier(nombre):
    if nombre <= 1:
        return False
    for i in range(2, int(nombre ** 0.5) + 1):
        if nombre % i == 0:
            return False
    return True

nombre = int(input("Entrez un nombre : "))
if est_premier(nombre):
    print(f"{nombre} est un nombre premier.")
else:
    print(f"{nombre} n'est pas un nombre premier.")
```

#### Exemple 2 : Afficher un triangle d'étoiles
```python
def triangle(n):
    for i in range(1, n + 1):
        print("*" * i)

triangle(5)
```

#### Exemple 3 : Jeu de devinettes
```python
import random
secret = random.randint(1, 100)
essai = 0

while True:
    devine = int(input("Devinez le nombre (entre 1 et 100) : "))
    essai += 1
    if devine < secret:
        print("Trop petit !")
    elif devine > secret:
        print("Trop grand !")
    else:
        print(f"Bravo ! Vous avez trouvé en {essai} essais.")
        break
```

---

## Exercices
1. Écrire un programme qui affiche tous les nombres pairs de 1 à 50.
2. Créer une boucle qui calcule la somme des entiers de 1 à `n`, où `n` est saisi par l'utilisateur.
3. Implémenter une boucle qui demande un mot de passe jusqu'à ce que l'utilisateur entre la bonne valeur.
4. Afficher un carré d'étoiles de taille `n x n`, où `n` est un entier saisi par l'utilisateur.
