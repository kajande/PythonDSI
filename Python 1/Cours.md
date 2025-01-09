## Cours Python 1

### Chapitre 0 : Installation de Python
**Objectifs :** Installer Python et configurer un environnement de travail.

**Contenu Détaillé :**
- **Introduction à PythonAnywhere :** PythonAnywhere est un environnement en ligne qui permet d’exécuter du code Python directement dans un navigateur. C’est une option idéale pour les débutants, car elle ne nécessite aucune installation locale. Vous pouvez y accéder gratuitement et commencer à écrire vos premiers scripts Python immédiatement.
- **Installation de Python :** Pour ceux qui préfèrent une installation locale, Python est disponible sur [python.org](https://python.org). Les instructions varient selon le système d’exploitation :  
  - Sur **Windows**, l’installateur téléchargeable inclut tout ce dont vous avez besoin, y compris pip (le gestionnaire de packages).  
  - Sur **Linux**, utilisez le gestionnaire de packages comme `apt` ou `yum` pour installer Python.  
  - Sur **Mac**, Python est souvent préinstallé, mais il est conseillé de télécharger une version récente ou d'utiliser Homebrew.
- **Configuration de l’environnement :** Une fois Python installé, configurez un IDE comme **VSCode** ou **PyCharm** pour une expérience interactive. Vous pouvez également utiliser le terminal pour exécuter vos scripts en ligne de commande.
- **Premier script Python :** Écrivez un fichier `hello_world.py` contenant :  
  ```python
  print("Hello, World!")
  ```  
  Exécutez-le pour vérifier que votre configuration est correcte.

**Exercices :**
1. Suivre les étapes d’installation adaptées à votre système et tester avec `python --version`.
2. Créer et exécuter un script Python qui affiche \"Hello, World!\".
3. Utiliser l’interpréteur interactif pour effectuer des calculs simples comme `5 + 7`.

---

### Chapitre 1 : Les primitives de Python : objets et opérations
**Objectifs :** Comprendre les types de données, les variables et les opérateurs.

**Contenu Détaillé :**
- **Types de données :**  
  En Python, tout est un objet, y compris les nombres et les chaînes de caractères.  
  - Les `int` sont utilisés pour les nombres entiers : `42`, `-3`.  
  - Les `float` représentent des nombres décimaux : `3.14`, `-0.001`.  
  - Les `str` permettent de manipuler du texte : `"Bonjour"`, `'Python'`.
- **Variables et affectation :**  
  Une variable est un conteneur pour stocker une valeur. Utilisez `=` pour affecter une valeur :  
  ```python
  age = 25
  nom = "Alice"
  ```
- **Opérateurs arithmétiques :** Effectuez des calculs avec des opérateurs comme `+`, `-`, `*`, `/`, ou encore `//` (division entière) et `**` (puissance). Exemple :  
  ```python
  resultat = 3 ** 2  # 9
  ```
- **Opérateurs de comparaison :** Comparez des valeurs avec `==`, `!=`, `>`, `<`.  
- **Conversion entre types :** Transformez les données si nécessaire :  
  ```python
  int("42")  # Convertir une chaîne en entier
  ```

**Exercices :**
1. Utiliser `type()` pour identifier les types des valeurs.
2. Calculer l’aire d’un rectangle avec des variables.
3. Essayer des conversions incorrectes (par ex., `int("abc")`) pour observer les erreurs.

---

### Chapitre 2 : Les fonctions
**Objectifs :** Créer et utiliser des fonctions.

**Contenu Détaillé :**
- **Fonctions intégrées :** Python offre des outils comme `print()` pour afficher des résultats ou `len()` pour connaître la longueur d’une chaîne.
- **Création de fonctions personnalisées :**  
  Les fonctions permettent de structurer votre code :  
  ```python
  def salut(nom):
      return f"Bonjour, {nom}!"
  ```
- **Paramètres et valeurs de retour :** Passez des données aux fonctions avec des paramètres et récupérez des résultats avec `return`.
- **Docstrings :** Documentez vos fonctions :  
  ```python
  def addition(a, b):
      """Retourne la somme de deux nombres."""
      return a + b
  ```

**Exercices :**
1. Créer une fonction calculant l’aire d’un cercle.
2. Écrire une fonction qui retourne un message personnalisé.
3. Expérimenter avec des paramètres par défaut.

---

### Chapitre 3 : La programmation orientée objet (POO)
**Objectifs :** Comprendre la POO et manipuler des objets.

**Contenu Détaillé :**
- **Classes et objets :** Une classe est un modèle pour créer des objets. Exemple :  
  ```python
  class Animal:
      def __init__(self, nom):
          self.nom = nom
  ```
- **Encapsulation :** Protégez les attributs de vos objets en les rendant privés (`_attribut`).
- **Héritage :** Réutilisez une classe existante pour en créer une nouvelle. Exemple :  
  ```python
  class Chien(Animal):
      def aboyer(self):
          return "Woof!"
  ```

**Exercices :**
1. Créer une classe représentant un animal.
2. Étendre la classe pour inclure des méthodes spécifiques.
3. Ajouter des attributs calculés.

---

### Chapitre 4 : Les conditions et boucles
**Objectifs :** Contrôler le flux d'exécution d'un programme à l'aide de conditions et de boucles.

**Contenu Détaillé :**
- **Structures conditionnelles :**  
  Les conditions permettent d'exécuter du code selon des critères spécifiques :  
  ```python
  if age >= 18:
      print("Vous êtes majeur.")
  elif age > 12:
      print("Vous êtes adolescent.")
  else:
      print("Vous êtes enfant.")
  ```
- **Boucles :**  
  Les boucles permettent de répéter une action.  
  - **Boucle `for` :** Itère sur une séquence comme une liste ou une plage :  
    ```python
    for i in range(5):
        print(i)  # Affiche les nombres de 0 à 4
    ```
  - **Boucle `while` :** Répète tant qu'une condition est vraie :  
    ```python
    x = 0
    while x < 5:
        print(x)
        x += 1
    ```
- **Interruptions :**  
  - **`break` :** Arrête prématurément une boucle.  
  - **`continue` :** Saute à l'itération suivante.  
  Exemple :  
  ```python
  for i in range(10):
      if i == 5:
          break
      print(i)
  ```

**Exercices :**
1. Écrire un programme affichant les nombres pairs entre 1 et 20.
2. Implémenter un jeu de devinettes où l'utilisateur doit deviner un nombre.
3. Réaliser une boucle imbriquée pour générer un triangle d'étoiles comme celui-ci :  
   ```
   *
   **
   ***
   ****
   ```

---

### Chapitre 5 : Les modules et fichiers
**Objectifs :** Manipuler des fichiers et organiser du code réutilisable en modules.

**Contenu Détaillé :**
- **Importation de modules :**  
  Python propose des modules standards comme `math`, `random`, et `os`. Vous pouvez les importer pour accéder à des fonctionnalités supplémentaires :  
  ```python
  import math
  print(math.sqrt(16))  # Affiche 4.0
  ```
- **Création de modules :**  
  Un module est simplement un fichier Python que vous pouvez réutiliser. Exemple :  
  Créez `utilitaires.py` :  
  ```python
  def ajouter(a, b):
      return a + b
  ```
  Puis importez-le dans un autre fichier :  
  ```python
  from utilitaires import ajouter
  print(ajouter(3, 5))  # Affiche 8
  ```
- **Manipulation de fichiers :**  
  - Lecture d'un fichier :  
    ```python
    with open("donnees.txt", "r") as fichier:
        contenu = fichier.read()
        print(contenu)
    ```
  - Écriture dans un fichier :  
    ```python
    with open("sortie.txt", "w") as fichier:
        fichier.write("Bonjour, monde!")
    ```
  - Gestion des erreurs avec `try-except` :  
    ```python
    try:
        with open("fichier_inexistant.txt", "r") as f:
            print(f.read())
    except FileNotFoundError:
        print("Fichier introuvable.")
    ```

**Exercices :**
1. Lire un fichier contenant une liste de noms et afficher chaque nom sur une ligne distincte.
2. Créer un fichier contenant les carrés des nombres de 1 à 10.
3. Créer un module contenant une fonction pour calculer la factorielle d’un nombre, puis l’utiliser dans un autre script.

---
