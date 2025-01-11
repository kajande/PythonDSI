# Chapitre 2 : Les fonctions

## Objectifs
Comprendre le concept de fonctions, leur utilité et leur application dans Python pour structurer et réutiliser du code.

## Contenu

### Qu'est-ce qu'une fonction ?
Une fonction est un bloc de code qui exécute une tâche précise. Les fonctions permettent de :
- Réutiliser du code sans le répéter.
- Simplifier la lecture et la maintenance du programme.
- Rendre le code modulaire.

En Python, une fonction est définie avec le mot-clé `def`.

Exemple :
```python
# Définition d'une fonction
def saluer():
    print("Bonjour !")

# Appel de la fonction
saluer()
```

### Paramètres et arguments
Une fonction peut prendre des données en entrée (appelées paramètres ou arguments) pour personnaliser son comportement.

Exemple :
```python
def saluer_utilisateur(nom):
    print(f"Bonjour, {nom}!")

saluer_utilisateur("Alice")
# Affiche : Bonjour, Alice !
```

- **Paramètres** : variables déclarées dans la définition de la fonction.
- **Arguments** : valeurs passées à la fonction lors de son appel.

### Retourner une valeur
Les fonctions peuvent retourner une valeur à l'aide du mot-clé `return`.

Exemple :
```python
def addition(a, b):
    return a + b

resultat = addition(5, 3)
print(resultat)  # Affiche : 8
```

### Types de paramètres
1. **Paramètres positionnels** : les arguments sont passés dans l'ordre.
2. **Paramètres nommés** : les arguments sont associés à un nom.
3. **Paramètres avec valeurs par défaut** : une valeur est utilisée si aucun argument n'est fourni.

Exemple :
```python
def saluer(nom="inconnu"):
    print(f"Bonjour, {nom}!")

saluer()          # Affiche : Bonjour, inconnu !
saluer("Marie")   # Affiche : Bonjour, Marie !
```

### Portée des variables
Les variables définies à l'intérieur d'une fonction sont locales à cette fonction.

Exemple :
```python
def multiplier_par_deux(x):
    resultat = x * 2  # 'resultat' est locale à cette fonction
    return resultat

print(multiplier_par_deux(4))  # Affiche : 8
# print(resultat)  # Provoquerait une erreur, car 'resultat' n'existe pas en dehors de la fonction
```

### Les fonctions comme objets
En Python, les fonctions sont des objets, ce qui signifie que vous pouvez :
- Les affecter à une variable.
- Les passer comme arguments.

Exemple :
```python
def carre(x):
    return x ** 2

def appliquer_fonction(func, valeur):
    return func(valeur)

resultat = appliquer_fonction(carre, 5)
print(resultat)  # Affiche : 25
```

### Documentation des fonctions
Utilisez des **docstrings** pour documenter vos fonctions.

Exemple :
```python
def division(a, b):
    """
    Retourne le résultat de la division de a par b.

    Arguments :
    a -- Dividende (float ou int)
    b -- Diviseur (float ou int)

    Retourne :
    float -- Résultat de la division
    """
    return a / b

print(division.__doc__)
```

### Exemples pratiques
#### Exemple 1 : Calcul de l'aire d'un cercle
```python
import math

def aire_cercle(rayon):
    """Calcule l'aire d'un cercle à partir de son rayon."""
    return math.pi * rayon ** 2

print(aire_cercle(5))  # Affiche l'aire pour un cercle de rayon 5
```

#### Exemple 2 : Vérifier si un nombre est pair
```python
def est_pair(nombre):
    """Vérifie si un nombre est pair."""
    return nombre % 2 == 0

print(est_pair(10))  # Affiche : True
print(est_pair(7))   # Affiche : False
```

#### Exemple 3 : Générer une table de multiplication
```python
def table_multiplication(n):
    """Affiche la table de multiplication d'un nombre."""
    for i in range(1, 11):
        print(f"{n} x {i} = {n * i}")

table_multiplication(5)
```

## Exercices
1. Écrire une fonction `factorielle(n)` qui calcule la factorielle d'un nombre `n`.
2. Implémenter une fonction `convertir_temperature(celsius)` qui convertit une température de Celsius en Fahrenheit.
3. Créer une fonction `compter_mots(texte)` qui compte le nombre de mots dans une chaîne de caractères.
