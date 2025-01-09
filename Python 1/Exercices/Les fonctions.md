### **Exercice 1 : Fonction de salutation**
Écrivez une fonction `saluer(nom)` qui prend un argument `nom` et affiche une salutation du type :  
```
Bonjour, [nom] !
```

---

### **Exercice 2 : Calcul de la somme**
Créez une fonction `somme(a, b)` qui prend deux nombres et retourne leur somme. Testez la fonction avec différents nombres.

---

### **Exercice 3 : Vérification de la parité**
Écrivez une fonction `est_pair(n)` qui prend un entier `n` et retourne `True` si le nombre est pair, sinon `False`.

---

### **Exercice 4 : Calcul du carré**
Créez une fonction `carre(n)` qui prend un nombre et retourne son carré. Testez avec plusieurs valeurs.

---

### **Exercice 5 : Conversion Celsius-Fahrenheit**
Écrivez une fonction `celsius_to_fahrenheit(c)` qui prend une température en Celsius et la convertit en Fahrenheit. La formule est :  
\[
F = C \times \frac{9}{5} + 32
\]

---

### **Exercice 6 : Trouver le maximum**
Créez une fonction `maximum(a, b, c)` qui prend trois nombres et retourne le plus grand d'entre eux.

---

### **Exercice 7 : Calcul de la factorielle**
Écrivez une fonction récursive `factorielle(n)` qui retourne la factorielle d'un nombre `n`. Par exemple :  
- `factorielle(5)` retourne \(5 \times 4 \times 3 \times 2 \times 1 = 120\).

---

### **Exercice 8 : Compte des voyelles**
Créez une fonction `compter_voyelles(chaine)` qui prend une chaîne de caractères et retourne le nombre de voyelles (`a, e, i, o, u`) qu'elle contient.

---

### **Exercice 9 : Vérification d'un palindrome**
Écrivez une fonction `est_palindrome(chaine)` qui prend une chaîne de caractères et retourne `True` si la chaîne est un palindrome (se lit de la même manière dans les deux sens), sinon `False`.

---

### **Exercice 10 : Filtrer une liste**
Créez une fonction `filtrer_pairs(liste)` qui prend une liste d'entiers et retourne une nouvelle liste contenant uniquement les nombres pairs.

---

### **Exercice 11 : Calcul du périmètre et de l'aire**
Écrivez une fonction `calcul_rectangle(longueur, largeur)` qui retourne le périmètre et l'aire d'un rectangle sous forme de tuple.

---

### **Exercice 12 : Fonction avec paramètres par défaut**
Créez une fonction `bonjour(nom="ami")` qui affiche :  
```
Bonjour, [nom] !
```
Si aucun nom n'est passé, elle doit afficher :  
```
Bonjour, ami !
```

---

### **Exercice 13 : Nombre de mots dans une phrase**
Écrivez une fonction `compter_mots(phrase)` qui prend une chaîne de caractères et retourne le nombre de mots qu'elle contient.

---

### **Exercice 14 : Moyenne de plusieurs nombres**
Créez une fonction `moyenne(*nombres)` qui prend un nombre indéfini de nombres et retourne leur moyenne.

---

### **Exercice 15 : Générateur de nombres pairs**
Écrivez une fonction `generer_pairs(n)` qui retourne une liste contenant les nombres pairs de 0 à `n` inclus.

---

### **Exercice 16 : Inverser une chaîne**
Créez une fonction `inverser(chaine)` qui prend une chaîne de caractères et retourne la chaîne inversée.  
Exemple : `inverser("Python")` retourne `"nohtyP"`.

---

### **Exercice 17 : Fusionner deux listes**
Écrivez une fonction `fusionner_listes(liste1, liste2)` qui prend deux listes et retourne une nouvelle liste contenant les éléments des deux listes sans doublons.

---

### **Exercice 18 : Calcul des nombres premiers**
Créez une fonction `est_premier(n)` qui vérifie si un nombre est premier, et une autre fonction `nombres_premiers(jusqua_n)` qui retourne une liste de tous les nombres premiers jusqu’à `n`.

---

### **Exercice 19 : Fonction Lambda**
Utilisez une fonction lambda pour trier une liste de tuples `(nom, âge)` en fonction de l’âge. Créez une liste d’exemples et utilisez votre fonction.

---

### **Exercice 20 : Conversion de liste en dictionnaire**
Créez une fonction `liste_en_dictionnaire(cles, valeurs)` qui prend deux listes de même taille, `cles` et `valeurs`, et retourne un dictionnaire où les éléments de `cles` sont les clés et ceux de `valeurs` les valeurs.  
Exemple :  
```python
liste_en_dictionnaire(['a', 'b', 'c'], [1, 2, 3])  
# retourne {'a': 1, 'b': 2, 'c': 3}
```

---

### **Exercice 21 : Fonction qui retourne une fonction**
Créez une fonction `multiplicateur(n)` qui retourne une autre fonction qui multiplie tout nombre donné par `n`.  
Exemple :  
```python
double = multiplicateur(2)  
print(double(5))  # Retourne 10
```

---

### **Exercice 22 : Recherche dans une liste**
Écrivez une fonction `rechercher(liste, element)` qui prend une liste et un élément, et retourne `True` si l’élément est dans la liste, sinon `False`.

---

### **Exercice 23 : Compter les occurrences**
Créez une fonction `compter_occurrences(chaine, caractere)` qui prend une chaîne et un caractère, et retourne le nombre de fois que le caractère apparaît dans la chaîne.

---

### **Exercice 24 : Suppression des doublons**
Écrivez une fonction `supprimer_doublons(liste)` qui prend une liste et retourne une nouvelle liste avec les doublons supprimés tout en conservant l'ordre des éléments.

---

### **Exercice 25 : Conversion numérique en texte**
Créez une fonction `nombre_en_texte(n)` qui prend un entier de 0 à 9 et retourne sa version en toutes lettres.  
Exemple : `nombre_en_texte(5)` retourne `"cinq"`.

---

### **Exercice 26 : Tri personnalisé**
Écrivez une fonction `trier_personnalise(liste, inverse=False)` qui trie une liste de nombres par ordre croissant. Si `inverse` est `True`, la liste est triée par ordre décroissant.

---

### **Exercice 27 : Calcul du PGCD**
Créez une fonction `pgcd(a, b)` qui calcule et retourne le plus grand commun diviseur (PGCD) de deux nombres en utilisant l'algorithme d'Euclide.

---

### **Exercice 28 : Filtrage avec une fonction**
Écrivez une fonction `filtrer(liste, condition)` qui prend une liste et une fonction `condition`, et retourne une nouvelle liste contenant uniquement les éléments pour lesquels `condition` retourne `True`.  
Exemple :  
```python
def est_pair(n):  
    return n % 2 == 0  

print(filtrer([1, 2, 3, 4, 5], est_pair))  # Retourne [2, 4]
```

---

### **Exercice 29 : Calcul des puissances**
Créez une fonction `puissance(base, exposant)` qui retourne le résultat de `base` élevé à la puissance `exposant`, sans utiliser l’opérateur `**`. Utilisez une boucle.

---

### **Exercice 30 : Compter les éléments imbriqués**
Écrivez une fonction `compter_elements(nested_list)` qui prend une liste imbriquée et retourne le nombre total d’éléments qu’elle contient, y compris ceux dans des sous-listes.  
Exemple :  
```python
compter_elements([1, [2, 3], [4, [5, 6]]])  # Retourne 6
```

---

### **Exercice 31 : Génération de la table de multiplication**
Écrivez une fonction `table_de_multiplication(n)` qui prend un entier `n` et affiche sa table de multiplication de 1 à 10.

---

### **Exercice 32 : Générateur de nombres aléatoires**
Créez une fonction `generer_nombres_aleatoires(n, borne_min, borne_max)` qui génère une liste de `n` nombres aléatoires entre `borne_min` et `borne_max`.

---

### **Exercice 33 : Filtrer les mots par longueur**
Écrivez une fonction `mots_longueur(liste_mots, longueur)` qui retourne une liste contenant uniquement les mots de `liste_mots` ayant exactement `longueur` caractères.

---

### **Exercice 34 : Trouver la deuxième valeur la plus grande**
Créez une fonction `deuxieme_max(liste)` qui retourne la deuxième valeur la plus grande dans une liste d'entiers.

---

### **Exercice 35 : Vérifier une liste triée**
Écrivez une fonction `est_triee(liste)` qui retourne `True` si une liste est triée par ordre croissant, sinon `False`.

---

### **Exercice 36 : Calcul de la somme des carrés**
Créez une fonction `somme_des_carres(n)` qui retourne la somme des carrés des nombres de 1 à `n`.  
Exemple :  
\[
1^2 + 2^2 + 3^2 + \ldots + n^2
\]

---

### **Exercice 37 : Trouver les indices d'un élément**
Écrivez une fonction `indices_element(liste, element)` qui retourne une liste des indices où `element` apparaît dans `liste`.

---

### **Exercice 38 : Fonction qui compte les lettres majuscules**
Créez une fonction `compter_majuscules(chaine)` qui prend une chaîne de caractères et retourne le nombre de lettres majuscules qu'elle contient.

---

### **Exercice 39 : Vérification d'anagrammes**
Écrivez une fonction `est_anagramme(chaine1, chaine2)` qui vérifie si deux chaînes sont des anagrammes (c'est-à-dire si elles contiennent les mêmes lettres, mais dans un ordre différent).

---

### **Exercice 40 : Détection de nombres parfaits**
Un nombre parfait est un entier égal à la somme de ses diviseurs propres (diviseurs strictement inférieurs au nombre).  
Créez une fonction `est_parfait(n)` qui retourne `True` si `n` est un nombre parfait, sinon `False`.  
Exemple :  
- \( 6 \) est parfait car \( 1 + 2 + 3 = 6 \).

---

### **Exercice 41 : Générer une pyramide de nombres**
Écrivez une fonction `pyramide(n)` qui génère une pyramide de nombres jusqu’à `n`.  
Exemple pour `n = 4` :  
```
1  
1 2  
1 2 3  
1 2 3 4
```

---

### **Exercice 42 : Fonction de chiffrement César**
Créez une fonction `chiffrement_cesar(texte, decalage)` qui chiffre un texte en décalant chaque lettre de l'alphabet par `decalage` positions. Ignorez les caractères non alphabétiques.

---

### **Exercice 43 : Trouver les éléments communs**
Écrivez une fonction `elements_communs(liste1, liste2)` qui retourne une liste contenant les éléments communs entre `liste1` et `liste2`.

---

### **Exercice 44 : Générer des permutations**
Créez une fonction `permutations(liste)` qui retourne toutes les permutations possibles des éléments d'une liste donnée.

---

### **Exercice 45 : Calcul du produit scalaire**
Écrivez une fonction `produit_scalaire(vecteur1, vecteur2)` qui calcule le produit scalaire de deux vecteurs de même taille.  
Exemple :  
\[
[1, 2, 3] \cdot [4, 5, 6] = 1 \times 4 + 2 \times 5 + 3 \times 6 = 32
\]

---

### **Exercice 46 : Vérifier un nombre de Fibonacci**
Créez une fonction `est_fibonacci(n)` qui retourne `True` si un nombre appartient à la suite de Fibonacci, sinon `False`.

---

### **Exercice 47 : Trouver la distance de Hamming**
Écrivez une fonction `distance_hamming(chaine1, chaine2)` qui calcule la distance de Hamming entre deux chaînes de même longueur (le nombre de positions où les caractères diffèrent).

---

### **Exercice 48 : Calculer les combinaisons**
Créez une fonction `combinatoire(n, k)` qui calcule le nombre de combinaisons possibles pour choisir `k` éléments parmi `n`, en utilisant la formule :  
\[
C(n, k) = \frac{n!}{k! \cdot (n-k)!}
\]

---

### **Exercice 49 : Trier les mots par ordre alphabétique**
Écrivez une fonction `trier_mots(phrase)` qui prend une phrase et retourne une liste de mots triés par ordre alphabétique.

---

### **Exercice 50 : Générer une suite arithmétique**
Créez une fonction `suite_arithmetique(a, d, n)` qui génère une suite arithmétique de `n` termes, avec un premier terme `a` et une différence commune `d`.  
Exemple :  
`suite_arithmetique(1, 2, 5)` retourne `[1, 3, 5, 7, 9]`.

---
