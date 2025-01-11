# Chapitre 5 : Les modules et fichiers

## Objectifs
Apprendre à utiliser les modules pour structurer et réutiliser du code, et à manipuler les fichiers pour lire, écrire et organiser des données en Python.

## Contenu

### Les modules en Python
Un module est un fichier Python contenant des fonctions, classes ou variables réutilisables. Les modules permettent d’organiser et de structurer le code pour améliorer sa lisibilité et sa réutilisabilité.

#### Importer un module
Pour utiliser un module, il faut l’importer avec `import`.

Exemple :
```python
import math

# Utiliser une fonction du module math
print(math.sqrt(16))  # Affiche : 4.0
```

#### Importer des éléments spécifiques
Vous pouvez importer des fonctions ou des classes spécifiques d’un module.
```python
from math import sqrt, pi

print(sqrt(25))  # Affiche : 5.0
print(pi)        # Affiche : 3.141592653589793
```

#### Renommer un module
Utilisez `as` pour renommer un module ou un élément pour simplifier son utilisation.
```python
import math as m

print(m.sqrt(9))  # Affiche : 3.0
```

#### Créer un module personnalisé
Un module Python est simplement un fichier `.py` contenant du code réutilisable.

Exemple :
1. Créez un fichier `utilitaires.py` :
    ```python
    def saluer(nom):
        print(f"Bonjour, {nom}!")
    ```

2. Importez et utilisez-le dans un autre fichier :
    ```python
    from utilitaires import saluer

    saluer("Alice")  # Affiche : Bonjour, Alice!
    ```

---

### Manipulation des fichiers
Python offre des outils pour lire et écrire dans des fichiers à l’aide de la fonction intégrée `open()`.

#### Lire un fichier
1. Ouvrir un fichier en mode lecture (`r`).
2. Utiliser des méthodes comme `read()`, `readline()`, ou `readlines()` pour lire le contenu.

Exemple :
```python
with open("donnees.txt", "r") as fichier:
    contenu = fichier.read()
    print(contenu)
```

#### Écrire dans un fichier
1. Ouvrir un fichier en mode écriture (`w`) ou ajout (`a`).
2. Utiliser la méthode `write()` pour écrire dans le fichier.

Exemple :
```python
with open("resultats.txt", "w") as fichier:
    fichier.write("Python est génial!\n")
```

#### Modes d’ouverture des fichiers
- **`r`** : Lecture (mode par défaut).
- **`w`** : Écriture (écrase le fichier existant).
- **`a`** : Ajout à la fin du fichier.
- **`r+`** : Lecture et écriture.

#### Gestion des erreurs
Utilisez `try-except` pour gérer les erreurs lors de l’ouverture ou de la manipulation des fichiers.
```python
try:
    with open("inexistant.txt", "r") as fichier:
        print(fichier.read())
except FileNotFoundError:
    print("Fichier introuvable.")
```

---

### Applications pratiques

#### Exemple 1 : Compter les mots dans un fichier
```python
def compter_mots(fichier):
    with open(fichier, "r") as f:
        contenu = f.read()
        mots = contenu.split()
        return len(mots)

print(compter_mots("texte.txt"))
```

#### Exemple 2 : Enregistrer des données
```python
donnees = ["Alice, 18", "Bob, 20", "Charlie, 22"]
with open("etudiants.csv", "w") as fichier:
    fichier.write("Nom,Âge\n")
    for ligne in donnees:
        fichier.write(ligne + "\n")
```

#### Exemple 3 : Lire un fichier ligne par ligne
```python
with open("journal.txt", "r") as fichier:
    for ligne in fichier:
        print(ligne.strip())
```

---

## Exercices
1. Créer un fichier contenant les nombres de 1 à 10 et leurs carrés.
2. Lire un fichier texte et afficher combien de fois chaque mot apparaît.
3. Implémenter un programme qui enregistre les scores des joueurs dans un fichier, puis affiche le meilleur score.
4. Créer un module personnalisé avec des fonctions pour manipuler des chaînes de caractères (conversion en majuscules, comptage des voyelles, etc.) et l’utiliser dans un programme principal.
