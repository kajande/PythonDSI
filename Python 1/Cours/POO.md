# Chapitre 3 : La Programmation Orientée Objet (POO)

## Objectifs
Comprendre les concepts fondamentaux de la Programmation Orientée Objet (POO) et apprendre à structurer le code en Python à l'aide de classes et d'objets.

## Contenu

### Qu'est-ce que la Programmation Orientée Objet ?
La POO est un paradigme de programmation qui organise le code en regroupant des données et des comportements dans des entités appelées **objets**. Chaque objet est une instance d'une **classe**, qui agit comme un modèle ou une structure pour ces objets.

Les principaux concepts de la POO sont :
- **Classe** : Modèle qui définit les attributs (données) et les méthodes (comportements).
- **Objet** : Instance d'une classe.
- **Encapsulation** : Regrouper les données et les méthodes associées.
- **Héritage** : Permettre à une classe de dériver les attributs et méthodes d'une autre classe.
- **Polymorphisme** : Fournir différentes implémentations pour une méthode.

### Définir une classe
Une classe est définie avec le mot-clé `class`.

Exemple :
```python
class Animal:
    def __init__(self, nom):
        self.nom = nom

    def parler(self):
        print(f"Je suis un animal nommé {self.nom}")
```

### Créer un objet
Pour créer un objet, appelez la classe comme une fonction.

Exemple :
```python
mon_animal = Animal("Tigrou")
mon_animal.parler()  # Affiche : Je suis un animal nommé Tigrou
```

### Attributs et méthodes
- **Attributs** : Variables associées à une classe ou un objet.
- **Méthodes** : Fonctions définies dans une classe qui décrivent les comportements des objets.

Exemple :
```python
class Rectangle:
    def __init__(self, longueur, largeur):
        self.longueur = longueur
        self.largeur = largeur

    def aire(self):
        return self.longueur * self.largeur

mon_rectangle = Rectangle(5, 3)
print(mon_rectangle.aire())  # Affiche : 15
```

### Encapsulation
En Python, les attributs peuvent être rendus privés en ajoutant un underscore `_` ou deux underscores `__` devant leur nom.

Exemple :
```python
class CompteBancaire:
    def __init__(self, solde):
        self.__solde = solde  # Attribut privé

    def deposer(self, montant):
        self.__solde += montant

    def afficher_solde(self):
        print(f"Solde actuel : {self.__solde}")

mon_compte = CompteBancaire(100)
mon_compte.deposer(50)
mon_compte.afficher_solde()  # Affiche : Solde actuel : 150
```

### Héritage
Une classe peut hériter des attributs et des méthodes d'une autre classe.

Exemple :
```python
class Animal:
    def __init__(self, nom):
        self.nom = nom

    def parler(self):
        print(f"{self.nom} fait un bruit.")

class Chien(Animal):
    def parler(self):
        print(f"{self.nom} aboie.")

mon_chien = Chien("Rex")
mon_chien.parler()  # Affiche : Rex aboie.
```

### Polymorphisme
Le polymorphisme permet d'utiliser une même méthode dans différentes classes avec des implémentations spécifiques.

Exemple :
```python
class Chat(Animal):
    def parler(self):
        print(f"{self.nom} miaule.")

animaux = [Chien("Rex"), Chat("Félix")]
for animal in animaux:
    animal.parler()
```

### Les méthodes spéciales
Les méthodes spéciales ou "dunder methods" (double underscore) ajoutent des fonctionnalités spéciales aux classes.
- `__init__` : Constructeur.
- `__str__` : Représentation textuelle de l'objet.
- `__len__` : Implémenter la fonction `len()`.

Exemple :
```python
class Livre:
    def __init__(self, titre, auteur, pages):
        self.titre = titre
        self.auteur = auteur
        self.pages = pages

    def __str__(self):
        return f"{self.titre} écrit par {self.auteur}, {self.pages} pages."

mon_livre = Livre("1984", "George Orwell", 328)
print(mon_livre)  # Affiche : 1984 écrit par George Orwell, 328 pages.
```

## Exemples pratiques

#### Exemple 1 : Gestion des étudiants
```python
class Etudiant:
    def __init__(self, nom, note):
        self.nom = nom
        self.note = note

    def afficher(self):
        print(f"Étudiant : {self.nom}, Note : {self.note}")

etudiant = Etudiant("Alice", 18)
etudiant.afficher()
```

#### Exemple 2 : Gestion d’un zoo
```python
class Animal:
    def __init__(self, nom):
        self.nom = nom

class Zoo:
    def __init__(self):
        self.animaux = []

    def ajouter_animal(self, animal):
        self.animaux.append(animal)

    def afficher_animaux(self):
        for animal in self.animaux:
            print(animal.nom)

zoo = Zoo()
zoo.ajouter_animal(Animal("Lion"))
zoo.ajouter_animal(Animal("Tigre"))
zoo.afficher_animaux()
```

## Exercices
1. Créer une classe `Voiture` avec des attributs `marque`, `modele` et `annee`. Ajouter une méthode `demarrer()` qui affiche "La voiture démarre".
2. Implémenter une classe `CompteBancaire` avec les fonctionnalités de dépôt, retrait, et affichage du solde.
3. Créer une classe `Livre` avec un attribut `nombre_de_pages` et une méthode pour vérifier si le livre est volumineux (plus de 300 pages).

