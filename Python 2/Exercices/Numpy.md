### 1. Tableaux et Opérations (12 exercices)

1. Créez un tableau Numpy de 10 éléments avec des nombres aléatoires entre 1 et 100.
   
2. Créez un tableau Numpy de forme (3, 4) avec des zéros.

3. Créez un tableau Numpy de forme (3, 4) avec des uns.

4. Créez un tableau Numpy de forme (5, 5) avec des entiers allant de 1 à 25 inclus.

5. Multipliez deux tableaux Numpy de formes (3, 3) et (3, 3) de votre choix.

6. Effectuez une addition entre un tableau Numpy et un scalaire.

7. Effectuez une soustraction entre deux tableaux de même forme.

8. Créez un tableau Numpy de forme (2, 3) et effectuez une multiplication matricielle avec un tableau (3, 2).

9. Calculez la somme de tous les éléments d’un tableau Numpy.

10. Calculez la moyenne des éléments d’un tableau Numpy.

11. Créez un tableau Numpy de valeurs aléatoires et effectuez une normalisation (mise à l'échelle entre 0 et 1).

12. Créez un tableau avec une séquence de nombres allant de 0 à 50 avec un pas de 5.

### 2. **Indexation et Tranchage (Exemples de tableaux)**

13. Dans le tableau suivant, accédez à l’élément à l’index 4.  
   Tableau : `np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])`

14. Dans le tableau suivant, accédez aux 3 premiers éléments.  
   Tableau : `np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])`

15. Dans le tableau suivant, accédez à l’élément situé à la 2ème ligne et 3ème colonne.  
   Tableau : `np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])`

16. Dans le tableau suivant, accédez à la dernière ligne.  
   Tableau : `np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])`

17. Dans le tableau suivant, accédez aux éléments des 3 premières lignes et 3 premières colonnes.  
   Tableau : `np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])`

18. Dans le tableau suivant, utilisez un masque booléen pour extraire tous les éléments supérieurs à 50.  
   Tableau : `np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])`

19. Dans le tableau suivant, inversez l’ordre des éléments.  
   Tableau : `np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])`

20. Dans le tableau suivant, accédez aux éléments avec des indices impairs.  
   Tableau : `np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])`

21. Dans le tableau suivant, utilisez un slicing pour créer une sous-liste avec tous les éléments sauf le premier et le dernier.  
   Tableau : `np.array([10, 20, 30, 40, 50])`

22. Dans le tableau suivant, accédez à une section du tableau de forme (3, 3) au centre.  
   Tableau : `np.array([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36]])`

23. Dans le tableau suivant, créez un tableau à une dimension avec des éléments répétés et appliquez un tranchage pour obtenir tous les éléments répétés.  
   Tableau : `np.array([10, 10, 20, 20, 30, 30, 40, 40])`

24. Dans le tableau suivant, remplacez certains éléments par un scalaire donné.  
   Tableau : `np.array([1, 2, 3, 4, 5])`

### 3. **Fonctions Mathématiques et Statistiques (Exemples de tableaux)**

25. Dans le tableau suivant, calculez la somme des carrés des éléments.  
   Tableau : `np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])`

26. Calculez la variance du tableau suivant.  
   Tableau : `np.array([10, 20, 30, 40, 50])`

27. Calculez l’écart type du tableau suivant.  
   Tableau : `np.array([15, 25, 35, 45, 55])`

28. Dans le tableau suivant, calculez le produit de ses éléments.  
   Tableau : `np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])`

29. Dans le tableau suivant, appliquez une fonction trigonométrique comme `sin` ou `cos` sur ses éléments.  
   Tableau : `np.array([0, np.pi / 2, np.pi, 3 * np.pi / 2, 2 * np.pi])`

30. Calculez le maximum et le minimum du tableau suivant.  
   Tableau : `np.array([50, 40, 60, 20, 80, 100])`

31. Dans le tableau suivant, appliquez une transformation logaritmique sur tous ses éléments.  
   Tableau : `np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])`

32. Calculez la médiane du tableau suivant.  
   Tableau : `np.random.rand(100)`

33. Dans le tableau suivant, calculez la moyenne et l’écart type.  
   Tableau : `np.random.randn(1000)`

34. Dans le tableau suivant, calculez la somme des éléments de chaque ligne.  
   Tableau : `np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])`

35. Dans le tableau suivant, calculez le produit scalaire de ses éléments.  
   Tableau : `np.array([1, 2, 3])` et `np.array([4, 5, 6])`

36. Dans le tableau suivant, calculez la trace de la matrice.  
   Tableau : `np.array([[1, 2], [3, 4]])`

### 4. **Broadcasting (Exemples de tableaux)**

37. Dans le tableau suivant, ajoutez un vecteur de taille 3 à chaque ligne.  
   Tableau : `np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` et vecteur : `np.array([1, 1, 1])`

38. Dans le tableau suivant, effectuez une multiplication élément par élément avec un vecteur de taille 3.  
   Tableau : `np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` et vecteur : `np.array([1, 2, 3])`

39. Dans le tableau suivant, effectuez une opération de division par un scalaire.  
   Tableau : `np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90]])` et scalaire : `10`

40. Dans le tableau suivant, effectuez une addition élément par élément.  
   Tableau : `np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` et tableau : `np.array([[9, 8, 7], [6, 5, 4], [3, 2, 1]])`

41. Dans le tableau suivant, soustrayez un vecteur de taille 3.  
   Tableau : `np.array([[1, 2, 3], [4, 5, 6]])` et vecteur : `np.array([1, 1, 1])`

42. Dans le tableau suivant, effectuez une multiplication avec un tableau de forme (3, 2).  
   Tableau : `np.array([[1, 2, 3], [4, 5, 6]])`