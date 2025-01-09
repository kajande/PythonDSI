### Exercices sur les Notions de Classe et d'Objet
1. Créez une classe `Voiture` avec un attribut `couleur` et un attribut `marque`.
2. Créez un objet de la classe `Voiture` et affichez ses attributs.
3. Créez une classe `Personne` avec des attributs `nom`, `prénom`, et `âge`. Ajoutez une méthode pour afficher les informations de la personne.
4. Créez une classe `Animal` avec un attribut `espèce` et une méthode `manger()`. Instanciez un objet et appelez la méthode.
5. Créez un objet `livre` de la classe `Livre` avec les attributs `titre` et `auteur`, puis affichez ses valeurs.

### Exercices sur les Attributs et Méthodes
6. Créez une classe `Rectangle` avec des attributs `longueur` et `largeur`. Ajoutez une méthode `calculer_surface()` qui renvoie la surface du rectangle.
7. Créez une méthode `changer_couleur()` dans la classe `Voiture` qui permet de changer la couleur de la voiture.
8. Modifiez la classe `Personne` pour ajouter une méthode `anniversaire()` qui incrémente l'âge de la personne.
9. Dans la classe `CompteBancaire`, créez une méthode `déposer()` pour ajouter un montant au solde, et une méthode `retirer()` pour en retirer.
10. Créez une méthode `afficher_info()` qui affiche tous les attributs d’un objet `Produit` (nom, prix, quantité).

### Exercices sur le Constructeur `__init__`
11. Créez une classe `Livre` qui prend les paramètres `titre` et `auteur` dans le constructeur.
12. Créez un constructeur pour la classe `Voiture` qui initialise les attributs `marque`, `modèle`, et `année`.
13. Créez une classe `Personne` qui reçoit les informations suivantes dans le constructeur : `nom`, `prénom`, `âge`, `sexe`.
14. Dans la classe `Élève`, créez un constructeur qui reçoit les attributs `nom`, `prénom`, et `niveau` de l’étudiant.
15. Créez un constructeur `__init__` pour la classe `Magasin` qui initialise les attributs `nom_magasin`, `emplacement`, et `stock`.

### Exercices sur l’Héritage et le Polymorphisme
16. Créez une classe `Employé` et une sous-classe `Manager` qui hérite de `Employé`. Ajoutez une méthode spécifique dans `Manager`.
17. Créez une classe `Véhicule` avec une méthode `déplacer()`. Créez des sous-classes `Bicycle` et `Voiture`, chaque sous-classe ayant sa propre version de la méthode `déplacer()`.
18. Implémentez une méthode `afficher()` dans la classe `Animal` et redéfinissez cette méthode dans les sous-classes `Chien` et `Chat` pour qu'elles affichent des messages différents.
19. Créez une classe `Mammifère` et une sous-classe `Chien`. Redéfinissez la méthode `faire_du_bruit()` pour qu'elle affiche un message spécifique pour le chien.
20. Implémentez l’héritage dans une classe `Fleur` et une sous-classe `Rose`. La méthode `description()` dans `Fleur` doit être redéfinie dans `Rose`.

### Exercices sur les Notions d'Encapsulation
21. Créez une classe `CompteBancaire` avec un attribut privé `_solde`. Ajoutez une méthode pour accéder à cet attribut en lecture et en écriture.
22. Dans une classe `Livre`, créez un attribut privé `__prix` et créez des méthodes `get_prix()` et `set_prix()` pour y accéder.
23. Créez une classe `Téléphone` avec un attribut privé `__numéro` et une méthode `changer_numéro()` pour modifier ce numéro.
24. Dans une classe `Employé`, créez un attribut privé `__salaire`. Créez une méthode `augmenter_salaire()` pour augmenter le salaire.
25. Implémentez un getter et un setter pour un attribut privé `__âge` dans une classe `Personne`.

### Exercices de Révision sur les Concepts de Base de la POO
26. Créez une classe `Etudiant` avec un constructeur qui initialise `nom`, `prénom`, et `moyenne`. Ajoutez une méthode pour afficher l’état de l’étudiant (réussi ou échoué) selon la moyenne.
27. Créez une classe `Produit` avec des attributs `nom`, `prix`, et `quantité`. Créez une méthode `disponibilité()` pour vérifier si le produit est en stock.
28. Créez une classe `Calculatrice` avec des méthodes pour additionner, soustraire, multiplier, et diviser.
29. Dans la classe `Livre`, ajoutez une méthode `ajouter_exemplaire()` pour ajouter un exemplaire du livre en stock.
30. Créez une classe `Date` avec des attributs `jour`, `mois`, `année`. Implémentez une méthode `afficher_date()` pour afficher la date au format `JJ/MM/AAAA`.

### Exercices Avancés sur les Concepts de POO
31. Créez une classe `Banque` avec une méthode `transfert()` pour transférer de l’argent entre deux comptes bancaires.
32. Créez une classe `Temps` avec des attributs `heures`, `minutes`, et `secondes`. Implémentez une méthode `ajouter_secondes()` pour ajouter des secondes à l’heure.
33. Créez une classe `Panier` qui contient une liste de produits. Ajoutez une méthode pour ajouter un produit au panier et une autre pour afficher le contenu du panier.
34. Dans une classe `Personne`, ajoutez une méthode `est_majeur()` pour vérifier si la personne est majeure ou non.
35. Créez une classe `Rectangle` et une méthode `changer_dimension()` pour modifier la longueur et la largeur d’un rectangle.
36. Créez une classe `Circle` avec un attribut `rayon`. Ajoutez une méthode pour calculer la circonférence.
37. Créez une classe `Date` qui calcule la différence en jours entre deux dates.
38. Créez une classe `Classe` qui contient une liste d’étudiants. Ajoutez une méthode pour ajouter un étudiant à la classe et une méthode pour afficher la liste des étudiants.
39. Créez une classe `GestionStock` pour gérer les stocks d’un magasin, avec des méthodes pour ajouter et retirer des produits.
40. Créez une classe `Personne` avec des méthodes privées et publiques pour gérer des informations personnelles sensibles.

### Exercices d’Application de la POO
41. Créez une classe `Film` avec les attributs `titre`, `réalisateur`, `durée`, et `genre`. Implémentez une méthode pour afficher les informations du film.
42. Créez une classe `Utilisateur` avec des attributs `nom_utilisateur` et `mot_de_passe`. Ajoutez une méthode pour valider le mot de passe.
43. Créez une classe `Banque` qui contient une méthode pour effectuer des dépôts et des retraits sur un compte.
44. Créez une classe `Produit` avec un attribut `prix` et une méthode `appliquer_remise()` pour appliquer une réduction.
45. Créez une classe `Cercle` avec un attribut `rayon`. Ajoutez une méthode pour calculer l’aire et afficher le résultat.

### Exercices supplémentaires sur l’Héritage et la POO
46. Créez une classe `Ouvrier` et une sous-classe `Plombier`. Redéfinissez la méthode `travailler()` pour afficher un message spécifique à chaque profession.
47. Créez une classe `Bancaire` et une sous-classe `Assurance` avec des méthodes spécifiques pour chaque type de service.
48. Créez une classe `Livre` et une sous-classe `Ebook` qui ajoute un attribut `poids_fichier`.
49. Créez une classe `Véhicule` et une sous-classe `Moto` qui surcharge la méthode `démarrer()`.
50. Implémentez un polymorphisme dans une classe `Forme` avec des sous-classes `Carré`, `Cercle`, et `Triangle` où chaque forme calcule son aire.
