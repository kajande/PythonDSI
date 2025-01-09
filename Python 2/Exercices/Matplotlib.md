### 1. **Tracer un graphique simple avec Matplotlib**
   - Créez une simple liste de données et tracez un graphique linéaire.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [2, 3, 5, 7, 11]
     ```

### 2. **Tracer plusieurs courbes sur un même graphique**
   - Utilisez deux séries de données et tracez-les sur le même graphique.
     ```python
     x = [1, 2, 3, 4, 5]
     y1 = [2, 3, 5, 7, 11]
     y2 = [1, 4, 6, 8, 10]
     ```

### 3. **Personnaliser le style des courbes**
   - Changez la couleur et le style de ligne pour différentes courbes.
     ```python
     x = [1, 2, 3, 4, 5]
     y1 = [2, 3, 5, 7, 11]
     y2 = [1, 4, 6, 8, 10]
     ```

### 4. **Ajouter des titres et des labels aux axes**
   - Ajoutez un titre et des labels aux axes x et y.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [2, 3, 5, 7, 11]
     ```

### 5. **Tracer un diagramme en barres**
   - Utilisez un dictionnaire pour créer un diagramme en barres.
     ```python
     data = {'A': 3, 'B': 7, 'C': 5, 'D': 9}
     ```

### 6. **Créer un histogramme**
   - Créez un histogramme avec des données générées aléatoirement.
     ```python
     import numpy as np
     data = np.random.randn(1000)
     ```

### 7. **Tracer un diagramme en secteurs (pie chart)**
   - Créez un diagramme circulaire à partir d'un dictionnaire de données.
     ```python
     data = {'A': 10, 'B': 30, 'C': 20, 'D': 40}
     ```

### 8. **Tracer un nuage de points (scatter plot)**
   - Créez un nuage de points à partir de deux séries de données.
     ```python
     x = np.random.rand(50)
     y = np.random.rand(50)
     ```

### 9. **Tracer une courbe avec des marqueurs personnalisés**
   - Tracez une courbe avec des points marqués de manière personnalisée.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [2, 3, 5, 7, 11]
     ```

### 10. **Ajouter une légende à un graphique**
   - Ajoutez une légende pour plusieurs courbes.
     ```python
     x = [1, 2, 3, 4, 5]
     y1 = [2, 3, 5, 7, 11]
     y2 = [1, 4, 6, 8, 10]
     ```

### 11. **Tracer des données avec un style spécifique (ex : points, traits)**
   - Tracez des données avec un style spécifique.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [1, 4, 9, 16, 25]
     ```

### 12. **Tracer un graphique avec sous-graphiques (subplot)**
   - Créez une figure avec deux sous-graphiques.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [1, 4, 9, 16, 25]
     ```

### 13. **Changer le type de graphique (ex : ligne vs. scatter)**
   - Tracez une ligne et un nuage de points sur le même graphique.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [1, 4, 9, 16, 25]
     ```

### 14. **Changer la taille du graphique**
   - Définissez une taille personnalisée pour le graphique.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [1, 4, 9, 16, 25]
     ```

### 15. **Tracer une courbe en utilisant des dates (timeseries)**
   - Utilisez des dates pour tracer une courbe.
     ```python
     import pandas as pd
     dates = pd.date_range('2020-01-01', periods=5, freq='D')
     values = [1, 4, 9, 16, 25]
     ```

### 16. **Créer un heatmap**
   - Tracez une carte thermique avec des données générées.
     ```python
     import numpy as np
     data = np.random.rand(10, 10)
     ```

### 17. **Ajouter un graphique à barres empilées**
   - Créez un graphique à barres empilées à partir de plusieurs séries de données.
     ```python
     data1 = [3, 5, 7]
     data2 = [2, 6, 4]
     ```

### 18. **Tracer un graphique avec des annotations**
   - Ajoutez des annotations sur un graphique.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [2, 3, 5, 7, 11]
     ```

### 19. **Tracer un graphique à barres horizontales**
   - Tracez un diagramme à barres horizontales.
     ```python
     data = [3, 7, 5, 9]
     labels = ['A', 'B', 'C', 'D']
     ```

### 20. **Créer un graphique avec une échelle logarithmique**
   - Tracez un graphique avec une échelle logarithmique sur l'axe y.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [1, 10, 100, 1000, 10000]
     ```

### 21. **Utiliser `fill_between` pour remplir l'espace sous une courbe**
   - Remplissez l'espace sous une courbe avec `fill_between`.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [1, 4, 9, 16, 25]
     ```

### 22. **Tracer une courbe avec des erreurs (error bars)**
   - Tracez une courbe avec des barres d'erreurs.
     ```python
     x = [1, 2, 3, 4, 5]
     y = [2, 3, 5, 7, 11]
     yerr = [0.5, 0.5, 0.7, 0.6, 0.4]
     ```

### 23. **Tracer un graphique avec des dates sur l'axe x**
   - Tracez un graphique avec des dates sur l'axe x.
     ```python
     import pandas as pd
     dates = pd.date_range('2020-01-01', periods=5, freq='D')
     y = [2, 3, 5, 7, 11]
     ```

### 24. **Tracer un graphique en courbe et un histogramme sur le même graphique**
   - Tracez une courbe et un histogramme dans le même graphique.
     ```python
     x = np.linspace(0, 10, 100)
     y = np.sin(x)
     data = np.random.randn(1000)
     ```

### 25. **Tracer un graphique avec plusieurs sous-graphiques (subplot) et titres**
   - Créez une figure avec plusieurs sous-graphiques et des titres.
     ```python
     x = [1, 2, 3, 4, 5]
     y1 = [1, 4, 9, 16, 25]
     y2 = [2, 3, 5, 7, 11]
     ```

---

### 26. **Tracer une courbe avec plusieurs axes y (y1 et y2)**
   - Tracez un graphique avec deux axes y, chacun représentant une courbe différente.
     ```python
     x = np.linspace(0, 10, 100)
     y1 = np.sin(x)
     y2 = np.log(x + 1)
     ```

### 27. **Créer un graphique de distribution cumulative (CDF)**
   - Créez un graphique de distribution cumulative à partir de données aléatoires.
     ```python
     data = np.random.randn(1000)
     ```

### 28. **Tracer une courbe de régression linéaire sur un nuage de points**
   - Tracez une droite de régression linéaire sur un nuage de points.
     ```python
     from sklearn.linear_model import LinearRegression
     x = np.random.rand(100, 1)
     y = 2 * x + 1 + np.random.randn(100, 1) * 0.5
     ```

### 29. **Personnaliser les limites des axes**
   - Modifiez les limites des axes x et y pour un graphique.
     ```python
     x = np.linspace(0, 10, 100)
     y = np.sin(x)
     ```

### 30. **Tracer un graphique en secteurs avec des valeurs nulles**
   - Créez un graphique en secteurs avec une valeur nulle dans les données.
     ```python
     data = {'A': 10, 'B': 30, 'C': 0, 'D': 60}
     ```

### 31. **Tracer un graphique avec des courbes paramétriques**
   - Tracez une courbe paramétrique (par exemple un cercle).
     ```python
     t = np.linspace(0, 2 * np.pi, 100)
     x = np.cos(t)
     y = np.sin(t)
     ```

### 32. **Tracer un graphique avec une échelle logarithmique sur les deux axes**
   - Tracez un graphique avec une échelle logarithmique sur les axes x et y.
     ```python
     x = np.logspace(1, 2, 100)
     y = np.logspace(1, 3, 100)
     ```

### 33. **Superposer plusieurs histogrammes avec des couleurs différentes**
   - Superposez plusieurs histogrammes avec des couleurs différentes et des légendes.
     ```python
     data1 = np.random.randn(1000)
     data2 = np.random.randn(1000)
     ```

### 34. **Tracer un graphique en utilisant une palette de couleurs (colormap)**
   - Utilisez un colormap pour colorier les points dans un nuage de points en fonction de la valeur.
     ```python
     x = np.random.rand(100)
     y = np.random.rand(100)
     ```

### 35. **Tracer un graphique avec une courbe de Bézier**
   - Tracez une courbe de Bézier avec un ensemble de points de contrôle.
     ```python
     from scipy.interpolate import CubicBezier
     control_points = np.array([[0, 0], [1, 2], [2, 2], [3, 0]])
     ```

### 36. **Tracer un contour d'un graphique 2D (contour plot)**
   - Créez un graphique de contours pour une fonction définie sur une grille de points.
     ```python
     X, Y = np.meshgrid(np.linspace(-5, 5, 100), np.linspace(-5, 5, 100))
     Z = np.sin(X) + np.cos(Y)
     ```

### 37. **Tracer un diagramme en violon**
   - Créez un diagramme en violon pour illustrer la distribution de plusieurs ensembles de données.
     ```python
     data1 = np.random.normal(0, 1, 100)
     data2 = np.random.normal(1, 1, 100)
     ```

### 38. **Superposer un graphique à barres et un nuage de points**
   - Superposez un graphique à barres et un nuage de points sur le même graphique.
     ```python
     categories = ['A', 'B', 'C', 'D']
     values = [10, 20, 30, 40]
     scatter_x = [1, 2, 3, 4]
     scatter_y = [15, 25, 35, 45]
     ```

### 39. **Tracer un graphique 3D (nuage de points)**
   - Tracez un nuage de points 3D avec `Axes3D`.
     ```python
     from mpl_toolkits.mplot3d import Axes3D
     x = np.random.rand(100)
     y = np.random.rand(100)
     z = np.random.rand(100)
     ```

### 40. **Tracer un diagramme en boîte (boxplot) pour plusieurs groupes**
   - Créez un diagramme en boîte pour comparer plusieurs ensembles de données.
     ```python
     data1 = np.random.normal(0, 1, 100)
     data2 = np.random.normal(1, 1, 100)
     data3 = np.random.normal(2, 1, 100)
     ```

### 41. **Tracer une surface 3D**
   - Créez un graphique de surface 3D à partir de données.
     ```python
     X = np.linspace(-5, 5, 100)
     Y = np.linspace(-5, 5, 100)
     X, Y = np.meshgrid(X, Y)
     Z = np.sin(X) * np.cos(Y)
     ```

### 42. **Tracer un histogramme avec des intervalles personnalisés**
   - Créez un histogramme avec des intervalles de classes personnalisés.
     ```python
     data = np.random.randn(1000)
     bins = np.linspace(-5, 5, 20)
     ```

### 43. **Tracer une courbe avec un axe y partagé entre plusieurs graphiques**
   - Créez un graphique avec plusieurs sous-graphiques, partageant l'axe y.
     ```python
     x = np.linspace(0, 10, 100)
     y1 = np.sin(x)
     y2 = np.cos(x)
     ```

### 44. **Tracer un graphique avec des annotations interactives**
   - Ajoutez des annotations interactives sur un graphique.
     ```python
     x = np.linspace(0, 10, 100)
     y = np.sin(x)
     ```

### 45. **Tracer une courbe avec des styles de ligne différents pour chaque segment**
   - Tracez une courbe avec des styles de ligne différents pour chaque segment.
     ```python
     x = np.linspace(0, 10, 100)
     y = np.sin(x)
     ```

### 46. **Utiliser un graphique de dispersion 3D avec un colormap**
   - Tracez un graphique de dispersion 3D et appliquez un colormap en fonction de la valeur des points.
     ```python
     from mpl_toolkits.mplot3d import Axes3D
     x = np.random.rand(100)
     y = np.random.rand(100)
     z = np.random.rand(100)
     ```

### 47. **Tracer un diagramme de Gantt**
   - Créez un diagramme de Gantt à partir de données structurées.
     ```python
     import matplotlib.pyplot as plt
     tasks = ['Task A', 'Task B', 'Task C']
     start = [0, 2, 4]
     duration = [2, 3, 2]
     ```

### 48. **Tracer une courbe de densité (Kernel Density Estimation)**
   - Créez une courbe de densité pour un jeu de données donné.
     ```python
     import seaborn as sns
     data = np.random.randn(1000)
     ```

### 49. **Tracer un graphique de type "rose" (rose chart)**
   - Créez un graphique de type rose pour visualiser la distribution angulaire des données.
     ```python
     theta = np.linspace(0, 2 * np.pi, 100)
     r = np.abs(np.sin(theta)) + 0.5
     ```

### 50. **Ajouter un graphique d'erreur avec plusieurs séries de données**
   - Tracez plusieurs courbes avec des barres d'erreurs pour chaque série.
     ```python
     x = np.linspace(0, 10, 10)
     y1 = np.sin(x)
     y2 = np.cos(x)
     yerr = 0.1
     ```

---

### 51. **Visualiser une matrice de confusion avec un heatmap**
   - Tracez une matrice de confusion en utilisant une `heatmap` avec des annotations pour afficher les valeurs exactes.
     ```python
     from sklearn.metrics import confusion_matrix
     y_true = np.random.randint(0, 2, 100)
     y_pred = np.random.randint(0, 2, 100)
     cm = confusion_matrix(y_true, y_pred)
     ```

### 52. **Superposer un graphique de dispersion avec une courbe de régression non linéaire**
   - Tracez un graphique de dispersion et superposez une courbe de régression non linéaire (polynomiale ou spline).
     ```python
     x = np.random.rand(100)
     y = 4 * x**2 + 3 * x + np.random.randn(100) * 0.1
     ```

### 53. **Tracer une surface 3D interactive**
   - Utilisez `plot_surface` pour créer une surface 3D et la rendre interactive à l'aide de `mpl_toolkits.mplot3d` ou une bibliothèque externe comme `plotly`.
     ```python
     X = np.linspace(-5, 5, 100)
     Y = np.linspace(-5, 5, 100)
     X, Y = np.meshgrid(X, Y)
     Z = np.sin(X**2 + Y**2)
     ```

### 54. **Graphique de série temporelle avec plusieurs sous-graphiques et annotations dynamiques**
   - Tracez une série temporelle avec plusieurs sous-graphiques et ajoutez des annotations dynamiques pour chaque pic.
     ```python
     time = np.linspace(0, 10, 1000)
     signal = np.sin(time) + 0.1 * np.random.randn(1000)
     ```

### 55. **Utilisation de la visualisation interactive avec Matplotlib et widgets**
   - Créez un graphique interactif avec des `widgets` pour ajuster les paramètres du graphique (comme les limites de l'axe, la couleur, ou les données).
     ```python
     from ipywidgets import interact
     x = np.linspace(0, 10, 100)
     y = np.sin(x)
     ```

### 56. **Tracer une courbe en 3D avec une animation en temps réel**
   - Créez une animation d'une courbe 3D qui change en temps réel avec un facteur de temps.
     ```python
     from mpl_toolkits.mplot3d import Axes3D
     t = np.linspace(0, 10, 100)
     X = np.sin(t)
     Y = np.cos(t)
     Z = t
     ```

### 57. **Tracer un graphique de type "violin plot" pour plusieurs variables catégorielles avec superposition de distribution KDE**
   - Créez un graphique en violon pour plusieurs groupes, avec une superposition de la distribution KDE.
     ```python
     data = {
         'A': np.random.normal(0, 1, 100),
         'B': np.random.normal(1, 1, 100),
         'C': np.random.normal(2, 1, 100)
     }
     ```

### 58. **Visualisation de données géospatiales (Carte de chaleur)**
   - Créez une carte de chaleur de données géospatiales, par exemple, une carte des températures moyennes dans différentes régions.
     ```python
     import geopandas as gpd
     import matplotlib.pyplot as plt
     world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
     ```

### 59. **Utiliser des graphiques Sankey pour visualiser des flux entre différentes catégories**
   - Créez un diagramme de Sankey pour visualiser les flux entre différentes catégories.
     ```python
     from matplotlib.sankey import Sankey
     flows = [100, -50, -30, -20]
     labels = ['Input', 'Category A', 'Category B', 'Category C']
     ```

### 60. **Créer un diagramme de Voronoï pour un jeu de points aléatoires**
   - Tracez un diagramme de Voronoï à partir d'un ensemble de points aléatoires.
     ```python
     from scipy.spatial import Voronoi, voronoi_plot_2d
     points = np.random.rand(10, 2)
     vor = Voronoi(points)
     ```

### 61. **Visualisation d'un réseau de graphes avec Matplotlib**
   - Tracez un réseau de graphes avec des nœuds et des liens entre eux.
     ```python
     import networkx as nx
     G = nx.erdos_renyi_graph(10, 0.5)
     pos = nx.spring_layout(G)
     ```

### 62. **Création d’un graphique à plusieurs axes y et sous-graphiques**
   - Créez un graphique avec plusieurs axes y et plusieurs sous-graphiques affichant des courbes associées.
     ```python
     x = np.linspace(0, 10, 100)
     y1 = np.sin(x)
     y2 = np.cos(x)
     ```

### 63. **Tracer un modèle de machine learning et sa courbe de performance (précision et rappel)**
   - Tracez un graphique avec la courbe ROC et la courbe de précision/rappel pour un modèle de machine learning.
     ```python
     from sklearn.metrics import roc_curve, precision_recall_curve
     from sklearn.datasets import make_classification
     X, y = make_classification(n_samples=1000, n_features=20)
     ```

### 64. **Animation d'un graphe de dispersion 3D avec changement dynamique des couleurs**
   - Créez une animation d'un nuage de points 3D, où la couleur des points change dynamiquement en fonction d'un paramètre.
     ```python
     from mpl_toolkits.mplot3d import Axes3D
     from matplotlib.animation import FuncAnimation
     ```

### 65. **Graphique en temps réel des valeurs lues depuis un fichier (streaming de données)**
   - Créez un graphique en temps réel qui affiche les données lues depuis un fichier.
     ```python
     import pandas as pd
     data = pd.read_csv('sensor_data.csv')
     ```

### 66. **Création d'une carte avec projection cartographique personnalisée**
   - Créez une carte avec une projection personnalisée pour afficher des données géospatiales.
     ```python
     import geopandas as gpd
     world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
     ```

### 67. **Visualisation des séries temporelles multivariées avec des sous-graphiques**
   - Créez une série temporelle multivariée et visualisez-la avec plusieurs sous-graphiques.
     ```python
     time = np.linspace(0, 10, 100)
     y1 = np.sin(time)
     y2 = np.cos(time)
     ```

### 68. **Visualisation d’un réseau neuronal à l’aide de Matplotlib**
   - Créez une visualisation d’un réseau neuronal (nœuds, couches, poids) avec Matplotlib.
     ```python
     import matplotlib.pyplot as plt
     import numpy as np
     ```

### 69. **Visualisation avancée avec des graphiques de type "parallel coordinates"**
   - Créez un graphique de coordonnées parallèles pour explorer plusieurs variables numériques.
     ```python
     from pandas.plotting import parallel_coordinates
     df = pd.DataFrame(np.random.rand(100, 5), columns=['A', 'B', 'C', 'D', 'E'])
     ```

### 70. **Utiliser des graphiques de type "heatmap" avec des données de séries temporelles**
   - Créez un graphique de type heatmap pour visualiser des données de séries temporelles sur une période.
     ```python
     time = pd.date_range('2025-01-01', periods=100, freq='D')
     data = np.random.rand(100, 24)
     ```

---

### 71. **Graphique des valeurs manquantes dans un DataFrame**
   - Créez un graphique pour visualiser la distribution des valeurs manquantes dans un DataFrame en utilisant `matplotlib`.
     ```python
     import pandas as pd
     import numpy as np
     df = pd.DataFrame({
         'A': [1, 2, np.nan, 4, 5],
         'B': [np.nan, 2, 3, 4, np.nan],
         'C': [1, 2, 3, 4, 5]
     })
     ```

### 72. **Graphique de distribution des variables numériques dans un DataFrame**
   - Tracez des histogrammes pour toutes les colonnes numériques d'un DataFrame afin de visualiser la distribution des données.
     ```python
     df = pd.DataFrame({
         'A': np.random.randn(100),
         'B': np.random.rand(100) * 100,
         'C': np.random.randint(1, 50, 100)
     })
     ```

### 73. **Tracer des graphiques de boxplot pour plusieurs variables catégorielles**
   - Créez un graphique de type `boxplot` pour différentes variables numériques, en fonction de catégories d'une colonne spécifique.
     ```python
     df = pd.DataFrame({
         'Category': np.random.choice(['A', 'B', 'C'], 100),
         'Value': np.random.randn(100)
     })
     ```

### 74. **Visualiser les corrélations entre variables dans un DataFrame avec une heatmap**
   - Utilisez un `heatmap` pour visualiser la matrice de corrélation entre les variables d'un DataFrame.
     ```python
     df = pd.DataFrame(np.random.randn(100, 5), columns=['A', 'B', 'C', 'D', 'E'])
     ```

### 75. **Graphique de tendance temporelle avec des séries temporelles (Pandas)**
   - Créez une série temporelle dans un DataFrame et tracez une courbe de tendance.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100)
     })
     df.set_index('date', inplace=True)
     ```

### 76. **Tracer un graphique de densité de probabilité pour une variable**
   - Créez un graphique de densité de probabilité (KDE) pour une variable numérique d'un DataFrame.
     ```python
     df = pd.DataFrame({
         'A': np.random.randn(100),
         'B': np.random.rand(100) * 50
     })
     ```

### 77. **Visualisation des distributions cumulées d'une variable**
   - Tracez la courbe de distribution cumulative pour une variable dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'A': np.random.randn(100),
         'B': np.random.rand(100) * 100
     })
     ```

### 78. **Graphique de distribution de deux variables (scatter plot)**
   - Tracez un graphique de dispersion (scatter plot) entre deux variables numériques d'un DataFrame.
     ```python
     df = pd.DataFrame({
         'A': np.random.randn(100),
         'B': np.random.randn(100)
     })
     ```

### 79. **Tracer un graphique de série temporelle avec des sous-graphiques pour chaque catégorie**
   - Créez un graphique avec plusieurs sous-graphiques de séries temporelles pour différentes catégories.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'category': np.random.choice(['A', 'B', 'C'], 100),
         'value': np.random.randn(100)
     })
     ```

### 80. **Superposition de plusieurs séries temporelles avec Pandas**
   - Tracez plusieurs séries temporelles sur un même graphique, chaque série représentant un groupe différent.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'group1': np.random.randn(100),
         'group2': np.random.randn(100),
         'group3': np.random.randn(100)
     })
     df.set_index('date', inplace=True)
     ```

### 81. **Graphique de type "Pareto" pour la distribution des fréquences**
   - Tracez un graphique de Pareto pour visualiser la distribution des fréquences d'une variable dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'category': np.random.choice(['A', 'B', 'C', 'D', 'E'], 1000)
     })
     ```

### 82. **Histogramme cumulé avec plusieurs groupes dans un DataFrame**
   - Tracez un histogramme cumulé pour plusieurs groupes dans un DataFrame, afin de comparer les distributions.
     ```python
     df = pd.DataFrame({
         'category': np.random.choice(['A', 'B', 'C'], 100),
         'value': np.random.randn(100)
     })
     ```

### 83. **Tracer un graphique d'évolution de données avec un zoom dynamique**
   - Créez un graphique d'évolution de données avec un zoom dynamique interactif sur une période donnée.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100)
     })
     ```

### 84. **Graphique de progression d’un indicateur clé de performance (KPI)**
   - Visualisez la progression d'un KPI à travers un graphique de type `bar` ou `line`.
     ```python
     df = pd.DataFrame({
         'month': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
         'sales': [100, 150, 200, 180, 220]
     })
     ```

### 85. **Heatmap des corrélations d'un DataFrame avec des variables catégorielles**
   - Créez un `heatmap` pour visualiser les corrélations entre des variables numériques, tout en catégorisant les valeurs par des variables catégorielles.
     ```python
     df = pd.DataFrame({
         'A': np.random.rand(100),
         'B': np.random.rand(100),
         'category': np.random.choice(['X', 'Y', 'Z'], 100)
     })
     ```

### 86. **Tracer une série temporelle avec plusieurs sous-graphiques pour chaque année**
   - Créez des sous-graphiques qui représentent chaque année d'une série temporelle.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2020-01-01', periods=365*5, freq='D'),
         'value': np.random.randn(365*5)
     })
     df.set_index('date', inplace=True)
     ```

### 87. **Visualisation de la répartition des valeurs par catégories avec des sous-graphiques**
   - Créez un graphique de type `boxplot` pour comparer la répartition des valeurs entre différentes catégories dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'category': np.random.choice(['A', 'B', 'C'], 100),
         'value': np.random.randn(100)
     })
     ```

### 88. **Comparaison de plusieurs colonnes avec un barplot empilé**
   - Créez un `barplot` empilé pour comparer les valeurs de plusieurs colonnes dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'Category1': np.random.rand(5),
         'Category2': np.random.rand(5),
         'Category3': np.random.rand(5)
     })
     ```

### 89. **Tracer des séries temporelles avec des données manquantes**
   - Visualisez une série temporelle avec des valeurs manquantes en utilisant un style particulier pour les valeurs manquantes.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100)
     })
     df.loc[10:30, 'value'] = np.nan
     ```

### 90. **Visualiser les changements de la médiane et de la moyenne sur une série temporelle**
   - Tracez la médiane et la moyenne d'une série temporelle sur un même graphique pour comparer leur évolution.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100)
     })
     df.set_index('date', inplace=True)
     ```

---

### 91. **Visualisation dynamique d'une série temporelle avec fenêtre mobile**
   - Créez un graphique de série temporelle avec une moyenne mobile et une fenêtre dynamique ajustable.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=365, freq='D'),
         'value': np.random.randn(365).cumsum()
     })
     df.set_index('date', inplace=True)
     ```

### 92. **Tracer plusieurs courbes de tendance avec des intervalles de confiance**
   - Créez un graphique avec plusieurs courbes représentant différentes catégories, incluant un intervalle de confiance.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100),
         'category': np.random.choice(['A', 'B'], 100)
     })
     df.set_index('date', inplace=True)
     ```

### 93. **Graphique interactif des changements dans les données de séries temporelles**
   - Utilisez **Matplotlib** pour créer un graphique interactif qui permet de visualiser les changements dans une série temporelle en fonction des événements marqués (ex. : pics, chutes).
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100).cumsum()
     })
     df.set_index('date', inplace=True)
     ```

### 94. **Visualiser les séries temporelles par jour, mois et année sur un même graphique**
   - Tracez trois courbes de tendance représentant les mêmes données, mais agrégées par jour, mois et année.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=365, freq='D'),
         'value': np.random.randn(365).cumsum()
     })
     df.set_index('date', inplace=True)
     ```

### 95. **Visualisation de séries temporelles avec plusieurs échelles de temps**
   - Créez un graphique avec plusieurs séries temporelles, chaque série ayant une échelle temporelle différente (par exemple, une série hebdomadaire et une mensuelle).
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100, freq='D'),
         'value': np.random.randn(100).cumsum()
     })
     df.set_index('date', inplace=True)
     ```

### 96. **Visualisation d'un nuage de points 3D avec projection de la corrélation entre trois variables**
   - Créez un graphique en 3D pour visualiser la corrélation entre trois variables numériques dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'x': np.random.rand(100),
         'y': np.random.rand(100),
         'z': np.random.rand(100)
     })
     ```

### 97. **Tracer une visualisation de clustering avec un graphique en t-SNE**
   - Utilisez le **t-SNE** pour réduire la dimensionnalité des données et créez un graphique de dispersion pour visualiser les clusters dans un DataFrame.
     ```python
     from sklearn.manifold import TSNE
     df = pd.DataFrame({
         'x': np.random.rand(100),
         'y': np.random.rand(100),
         'z': np.random.rand(100)
     })
     ```

### 98. **Visualisation de données avec une carte thermique dynamique**
   - Tracez une carte thermique qui évolue au fil du temps, avec des données dont les valeurs changent en fonction de l'index temporel.
     ```python
     df = pd.DataFrame(np.random.rand(100, 10), columns=[f'col{i}' for i in range(10)])
     df['date'] = pd.date_range('2025-01-01', periods=100)
     df.set_index('date', inplace=True)
     ```

### 99. **Créer un graphique de dispersion avec annotations sur des points spécifiques**
   - Tracez un graphique de dispersion et ajoutez des annotations pour certains points d'intérêt dans le DataFrame.
     ```python
     df = pd.DataFrame({
         'x': np.random.rand(50),
         'y': np.random.rand(50),
         'label': np.random.choice(['A', 'B', 'C'], 50)
     })
     ```

### 100. **Tracer un graphique de séries temporelles avec sous-graphiques multiples pour chaque mois**
   - Créez des sous-graphiques pour chaque mois d'une série temporelle, afin de comparer les tendances saisonnières.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=365, freq='D'),
         'value': np.random.randn(365).cumsum()
     })
     df.set_index('date', inplace=True)
     ```

### 101. **Visualisation de relations non linéaires avec une courbe de régression polynomial**
   - Tracez une courbe de régression polynomial ajustée aux données, en utilisant **Pandas** pour la gestion des données et **Matplotlib** pour la visualisation.
     ```python
     df = pd.DataFrame({
         'x': np.linspace(0, 10, 100),
         'y': np.sin(np.linspace(0, 10, 100)) + np.random.randn(100) * 0.2
     })
     ```

### 102. **Graphique en barres empilées avec proportions par catégories**
   - Créez un graphique en barres empilées pour visualiser les proportions des différentes catégories dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'Category1': np.random.rand(5),
         'Category2': np.random.rand(5),
         'Category3': np.random.rand(5)
     })
     ```

### 103. **Visualisation des transitions entre catégories dans un DataFrame**
   - Tracez un graphique pour visualiser les transitions entre différentes catégories d'une variable.
     ```python
     df = pd.DataFrame({
         'time': pd.date_range('2025-01-01', periods=100),
         'category': np.random.choice(['A', 'B', 'C'], 100)
     })
     df.set_index('time', inplace=True)
     ```

### 104. **Graphique de courbes multiples représentant des données provenant de plusieurs groupes**
   - Créez un graphique avec plusieurs courbes représentant les données de groupes différents dans un même graphique.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'group1': np.random.randn(100).cumsum(),
         'group2': np.random.randn(100).cumsum()
     })
     df.set_index('date', inplace=True)
     ```

### 105. **Visualisation de l'évolution d'une variable par catégorie au cours du temps**
   - Créez un graphique qui montre l'évolution d'une variable au fil du temps, pour différentes catégories.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100),
         'category': np.random.choice(['A', 'B', 'C'], 100)
     })
     df.set_index('date', inplace=True)
     ```

### 106. **Superposition de plusieurs courbes de distribution avec différentes couleurs**
   - Tracez plusieurs courbes de distribution sur le même graphique, chaque courbe étant colorée différemment pour chaque groupe.
     ```python
     df = pd.DataFrame({
         'value1': np.random.randn(100),
         'value2': np.random.randn(100)
     })
     ```

### 107. **Graphique de progression avec un axe logarithmique**
   - Créez un graphique avec une échelle logarithmique pour mieux visualiser les grandes différences dans les valeurs.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.lognormal(0, 1, 100)
     })
     df.set_index('date', inplace=True)
     ```

### 108. **Tracer un diagramme en secteur avec des proportions dynamiques**
   - Créez un graphique en secteur avec des proportions dynamiques qui se mettent à jour en fonction des données d’un DataFrame.
     ```python
     df = pd.DataFrame({
         'category': ['A', 'B', 'C', 'D'],
         'value': [50, 30, 10, 10]
     })
     ```

---

### 109. **Visualisation des relations entre plusieurs variables dans un DataFrame à l'aide de pairplot**
   - Utilisez **seaborn.pairplot** pour explorer les relations entre plusieurs variables continues et catégorielles dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'x1': np.random.randn(100),
         'x2': np.random.randn(100),
         'x3': np.random.randn(100),
         'category': np.random.choice(['A', 'B'], 100)
     })
     ```

### 110. **Création d'un graphique en mosaïque avec proportions par catégorie**
   - Utilisez **matplotlib** pour créer un graphique en mosaïque représentant les proportions de différentes catégories dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'Category1': np.random.rand(10),
         'Category2': np.random.rand(10)
     })
     ```

### 111. **Visualisation d'une régression linéaire multivariée avec plusieurs variables**
   - Tracez une régression linéaire multivariée avec plusieurs variables indépendantes pour prédire une variable dépendante.
     ```python
     from sklearn.linear_model import LinearRegression
     df = pd.DataFrame({
         'x1': np.random.randn(100),
         'x2': np.random.randn(100),
         'y': np.random.randn(100)
     })
     model = LinearRegression()
     model.fit(df[['x1', 'x2']], df['y'])
     ```

### 112. **Tracer un graphique de corrélation de Kendall sur un DataFrame**
   - Créez un graphique de la matrice de corrélation avec le coefficient de Kendall entre les variables d’un DataFrame.
     ```python
     df = pd.DataFrame({
         'x1': np.random.randn(100),
         'x2': np.random.randn(100),
         'x3': np.random.randn(100)
     })
     corr_matrix = df.corr(method='kendall')
     ```

### 113. **Visualiser un graphe de réseau avec des nodes pondérés et des liens dynamiques**
   - Créez un graphe de réseau dynamique avec **Matplotlib**, où chaque node et lien possède un poids.
     ```python
     import networkx as nx
     G = nx.erdos_renyi_graph(50, 0.1)
     pos = nx.spring_layout(G)
     node_sizes = [G.degree(node) * 100 for node in G]
     edge_weights = [d['weight'] if 'weight' in d else 1 for _, _, d in G.edges(data=True)]
     ```

### 114. **Création d’un graphique en 3D pour la régression polynomiale sur plusieurs variables**
   - Tracez un graphique en 3D pour visualiser une régression polynomiale qui prédit une variable à partir de plusieurs autres.
     ```python
     from sklearn.preprocessing import PolynomialFeatures
     from mpl_toolkits.mplot3d import Axes3D
     df = pd.DataFrame({
         'x1': np.random.randn(100),
         'x2': np.random.randn(100),
         'y': np.random.randn(100)
     })
     poly = PolynomialFeatures(degree=2)
     X_poly = poly.fit_transform(df[['x1', 'x2']])
     ```

### 115. **Tracer un graphique avec un modèle ARIMA pour prédire des séries temporelles**
   - Créez un graphique représentant les prévisions d'un modèle ARIMA sur une série temporelle.
     ```python
     from statsmodels.tsa.arima.model import ARIMA
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100).cumsum()
     })
     df.set_index('date', inplace=True)
     model = ARIMA(df['value'], order=(5, 1, 0))
     model_fit = model.fit()
     ```

### 116. **Visualisation d'un graphique en barres avec valeurs manquantes imputées**
   - Tracez un graphique en barres avec des données où certaines valeurs sont manquantes, et utilisez une méthode d'imputation (par exemple, interpolation) pour les remplacer.
     ```python
     df = pd.DataFrame({
         'category': ['A', 'B', 'C', 'D', 'E'],
         'value': [1, 2, np.nan, 4, np.nan]
     })
     df['value'] = df['value'].interpolate()
     ```

### 117. **Visualisation de l'évolution des groupes dans un graphique à barres empilées avec des données dynamiques**
   - Tracez un graphique en barres empilées pour visualiser l'évolution de groupes dans le temps avec des données dynamiques.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'group1': np.random.randn(100),
         'group2': np.random.randn(100)
     })
     df.set_index('date', inplace=True)
     ```

### 118. **Visualisation de l'impact de variables externes sur un modèle de prédiction**
   - Créez un graphique pour montrer l'impact de variables externes sur les prédictions générées par un modèle.
     ```python
     df = pd.DataFrame({
         'feature1': np.random.randn(100),
         'feature2': np.random.randn(100),
         'target': np.random.randn(100)
     })
     ```

### 119. **Tracer un graphique de séries temporelles avec des anomalies détectées**
   - Créez un graphique de série temporelle avec des points où des anomalies sont détectées en utilisant une méthode d'écart-type.
     ```python
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100).cumsum()
     })
     df.set_index('date', inplace=True)
     threshold = df['value'].std()
     anomalies = df[df['value'].abs() > threshold]
     ```

### 120. **Visualisation d'une surface 3D avec des contours pour un modèle de régression non linéaire**
   - Tracez une surface 3D avec des contours représentant un modèle de régression non linéaire ajusté aux données.
     ```python
     from mpl_toolkits.mplot3d import Axes3D
     from sklearn.preprocessing import PolynomialFeatures
     df = pd.DataFrame({
         'x': np.random.randn(100),
         'y': np.random.randn(100),
         'z': np.random.randn(100)
     })
     ```

### 121. **Visualisation de relations complexes avec des graphiques de densité 2D**
   - Utilisez un graphique de densité 2D pour visualiser les relations complexes entre deux variables continues dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'x': np.random.randn(1000),
         'y': np.random.randn(1000)
     })
     ```

### 122. **Visualisation d'une analyse de composants principaux (PCA) en 3D**
   - Appliquez une analyse de composants principaux (PCA) pour réduire la dimensionnalité des données et tracez les résultats en 3D.
     ```python
     from sklearn.decomposition import PCA
     df = pd.DataFrame({
         'x': np.random.randn(100),
         'y': np.random.randn(100),
         'z': np.random.randn(100)
     })
     pca = PCA(n_components=3)
     pca_result = pca.fit_transform(df)
     ```

### 123. **Création d'une visualisation interactive pour explorer les séries temporelles**
   - Utilisez **Matplotlib** et **plotly** pour créer une visualisation interactive permettant d'explorer les séries temporelles.
     ```python
     import plotly.express as px
     df = pd.DataFrame({
         'date': pd.date_range('2025-01-01', periods=100),
         'value': np.random.randn(100).cumsum()
     })
     fig = px.line(df, x='date', y='value')
     fig.show()
     ```

### 124. **Tracer un graphique de courbes de distribution cumulée pour différentes catégories**
   - Créez un graphique de courbes de distribution cumulée pour comparer les distributions de différentes catégories dans un DataFrame.
     ```python
     df = pd.DataFrame({
         'category': np.random.choice(['A', 'B', 'C'], 100),
         'value': np.random.randn(100)
     })
     ```

---

### 125. **Visualisation de la classification de données non linéaires avec SVM et Matplotlib**
   - Appliquez un modèle **SVM** (Support Vector Machine) sur un jeu de données non linéaires et tracez les frontières de décision en 2D avec Matplotlib.
     ```python
     from sklearn import datasets
     from sklearn.svm import SVC
     from sklearn.preprocessing import StandardScaler
     import matplotlib.pyplot as plt
     df = datasets.make_circles(n_samples=500, noise=0.1, factor=0.5)
     X, y = df
     scaler = StandardScaler()
     X = scaler.fit_transform(X)
     model = SVC(kernel='rbf', C=1)
     model.fit(X, y)
     ```

### 126. **Régression de Lasso avec visualisation des coefficients**
   - Appliquez une régression Lasso sur un jeu de données multivarié et tracez les coefficients de régression.
     ```python
     from sklearn.linear_model import Lasso
     df = pd.DataFrame({
         'x1': np.random.randn(100),
         'x2': np.random.randn(100),
         'x3': np.random.randn(100),
         'y': np.random.randn(100)
     })
     model = Lasso(alpha=0.1)
     model.fit(df[['x1', 'x2', 'x3']], df['y'])
     plt.plot(df[['x1', 'x2', 'x3']].columns, model.coef_)
     ```

### 127. **Visualisation de la projection de données sur plusieurs axes avec PCA et Matplotlib**
   - Appliquez **PCA** (Analyse en Composantes Principales) à un jeu de données de haute dimension et visualisez les projections sur les premières composantes principales en 3D.
     ```python
     from sklearn.decomposition import PCA
     from mpl_toolkits.mplot3d import Axes3D
     df = pd.DataFrame(np.random.randn(100, 5), columns=['x1', 'x2', 'x3', 'x4', 'x5'])
     pca = PCA(n_components=3)
     pca_result = pca.fit_transform(df)
     fig = plt.figure()
     ax = fig.add_subplot(111, projection='3d')
     ax.scatter(pca_result[:, 0], pca_result[:, 1], pca_result[:, 2])
     ```

### 128. **Visualisation de la performance d'un modèle de machine learning avec courbe ROC et AUC**
   - Appliquez un modèle de machine learning, puis générez une courbe **ROC** (Receiver Operating Characteristic) et affichez la **AUC** (Area Under the Curve) avec Matplotlib.
     ```python
     from sklearn.metrics import roc_curve, auc
     from sklearn.model_selection import train_test_split
     from sklearn.datasets import make_classification
     from sklearn.linear_model import LogisticRegression
     X, y = make_classification(n_samples=1000, n_features=20)
     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)
     model = LogisticRegression()
     model.fit(X_train, y_train)
     fpr, tpr, thresholds = roc_curve(y_test, model.predict_proba(X_test)[:, 1])
     auc_value = auc(fpr, tpr)
     plt.plot(fpr, tpr, label=f'ROC curve (area = {auc_value:.2f})')
     ```

### 129. **Visualisation d'un arbre de décision avec Matplotlib**
   - Appliquez un modèle d'arbre de décision et visualisez l'arbre complet avec Matplotlib.
     ```python
     from sklearn.tree import DecisionTreeClassifier, plot_tree
     from sklearn.datasets import load_iris
     data = load_iris()
     X, y = data.data, data.target
     model = DecisionTreeClassifier()
     model.fit(X, y)
     plt.figure(figsize=(12, 8))
     plot_tree(model, filled=True, feature_names=data.feature_names, class_names=data.target_names)
     ```

### 130. **Visualisation de la validation croisée avec Matplotlib et boxplot**
   - Appliquez une validation croisée et visualisez les scores obtenus avec un **boxplot** pour plusieurs modèles.
     ```python
     from sklearn.model_selection import cross_val_score
     from sklearn.ensemble import RandomForestClassifier
     models = [LogisticRegression(), RandomForestClassifier()]
     results = []
     for model in models:
         score = cross_val_score(model, X, y, cv=10)
         results.append(score)
     plt.boxplot(results, vert=True, patch_artist=True, labels=['LogisticRegression', 'RandomForest'])
     ```

### 131. **Analyse et visualisation de l'effet de l'overfitting avec des courbes d'apprentissage**
   - Tracez des courbes d'apprentissage pour visualiser l'impact de l'overfitting dans un modèle de régression.
     ```python
     from sklearn.model_selection import learning_curve
     model = RandomForestClassifier()
     train_sizes, train_scores, test_scores = learning_curve(model, X, y, cv=5)
     plt.plot(train_sizes, test_scores.mean(axis=1), label='Test score')
     plt.plot(train_sizes, train_scores.mean(axis=1), label='Train score')
     ```

### 132. **Visualisation d'un modèle d'ensemble avec Bagging et Matplotlib**
   - Appliquez le modèle **Bagging** (Bootstrap Aggregating) et visualisez les différentes prédictions obtenues par les sous-modèles.
     ```python
     from sklearn.ensemble import BaggingClassifier
     model = BaggingClassifier(base_estimator=LogisticRegression(), n_estimators=50)
     model.fit(X_train, y_train)
     ```

### 133. **Utilisation de t-SNE pour la réduction de dimensionnalité et la visualisation des clusters**
   - Utilisez **t-SNE** (t-distributed Stochastic Neighbor Embedding) pour réduire la dimensionnalité d'un ensemble de données de haute dimension et tracez les clusters.
     ```python
     from sklearn.manifold import TSNE
     tsne = TSNE(n_components=2, random_state=0)
     X_tsne = tsne.fit_transform(X)
     plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=y)
     ```

### 134. **Visualisation d'un clustering avec K-Means en 3D**
   - Appliquez **K-Means** pour regrouper des données dans un espace tridimensionnel et tracez les résultats.
     ```python
     from sklearn.cluster import KMeans
     kmeans = KMeans(n_clusters=3)
     kmeans.fit(df[['x1', 'x2', 'x3']])
     fig = plt.figure()
     ax = fig.add_subplot(111, projection='3d')
     ax.scatter(df['x1'], df['x2'], df['x3'], c=kmeans.labels_)
     ```

### 135. **Visualisation de la matrice de confusion avec heatmap**
   - Calculez la matrice de confusion pour un modèle de classification et tracez-la sous forme de **heatmap**.
     ```python
     from sklearn.metrics import confusion_matrix
     cm = confusion_matrix(y_test, model.predict(X_test))
     import seaborn as sns
     sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=data.target_names, yticklabels=data.target_names)
     ```

### 136. **Visualisation du surapprentissage et sous-apprentissage avec validation croisée**
   - Créez un graphique pour illustrer l'impact du surapprentissage et du sous-apprentissage en comparant les scores de validation et d'entraînement.
     ```python
     from sklearn.model_selection import validation_curve
     param_range = np.arange(1, 100, 2)
     train_scores, test_scores = validation_curve(RandomForestClassifier(), X, y, param_name='max_depth', param_range=param_range)
     plt.plot(param_range, train_scores.mean(axis=1), label='Train score')
     plt.plot(param_range, test_scores.mean(axis=1), label='Test score')
     ```

### 137. **Visualisation d'un modèle de régression avec Matplotlib pour les prédictions et erreurs**
   - Appliquez un modèle de régression linéaire et tracez les prédictions par rapport aux valeurs réelles ainsi que les erreurs résiduelles.
     ```python
     from sklearn.linear_model import LinearRegression
     model = LinearRegression()
     model.fit(df[['x1', 'x2']], df['y'])
     y_pred = model.predict(df[['x1', 'x2']])
     plt.scatter(df['x1'], df['y'], label='True values')
     plt.plot(df['x1'], y_pred, color='red', label='Predictions')
     ```

---

### 138. **Visualisation de l'optimisation des hyperparamètres avec GridSearchCV et Matplotlib**
   - Utilisez **GridSearchCV** pour optimiser les hyperparamètres d'un modèle d'apprentissage supervisé et visualisez la performance en fonction des différents paramètres dans un graphique en 3D.
     ```python
     from sklearn.model_selection import GridSearchCV
     from sklearn.ensemble import RandomForestClassifier
     param_grid = {'n_estimators': [10, 50, 100], 'max_depth': [5, 10, 20]}
     grid_search = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)
     grid_search.fit(X_train, y_train)
     results = grid_search.cv_results_
     fig = plt.figure()
     ax = fig.add_subplot(111, projection='3d')
     ax.scatter(results['param_n_estimators'], results['param_max_depth'], results['mean_test_score'], c=results['mean_test_score'], cmap='viridis')
     ```

### 139. **Analyse de la variance avec des plots de facteurs et Matplotlib**
   - Appliquez une **analyse de la variance** (ANOVA) à un jeu de données, puis visualisez les effets des facteurs et des interactions avec un **plot** de type **bar**.
     ```python
     import seaborn as sns
     from scipy.stats import f_oneway
     df = pd.DataFrame({
         'Factor1': np.random.choice(['A', 'B', 'C'], 100),
         'Factor2': np.random.choice([1, 2, 3], 100),
         'Value': np.random.randn(100)
     })
     anova = f_oneway(df[df['Factor1'] == 'A']['Value'], df[df['Factor1'] == 'B']['Value'], df[df['Factor1'] == 'C']['Value'])
     sns.boxplot(x='Factor1', y='Value', data=df)
     ```

### 140. **Visualisation interactive d'une projection PCA avec Plotly**
   - Appliquez **PCA** pour réduire la dimensionnalité et utilisez **Plotly** pour créer une visualisation interactive de la projection des données.
     ```python
     import plotly.express as px
     from sklearn.decomposition import PCA
     pca = PCA(n_components=3)
     pca_result = pca.fit_transform(df)
     fig = px.scatter_3d(x=pca_result[:, 0], y=pca_result[:, 1], z=pca_result[:, 2], color=df['Factor1'])
     fig.show()
     ```

### 141. **Visualisation d’un modèle de régression avec KNN et visualisation de la frontière de décision**
   - Appliquez le **KNN** (K-Nearest Neighbors) sur un jeu de données bivarié et tracez la frontière de décision ainsi que les points d'entraînement.
     ```python
     from sklearn.neighbors import KNeighborsClassifier
     model = KNeighborsClassifier(n_neighbors=3)
     model.fit(X_train, y_train)
     h = .02
     x_min, x_max = X_train[:, 0].min() - 1, X_train[:, 0].max() + 1
     y_min, y_max = X_train[:, 1].min() - 1, X_train[:, 1].max() + 1
     xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
     Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
     Z = Z.reshape(xx.shape)
     plt.contourf(xx, yy, Z, alpha=0.8)
     plt.scatter(X_train[:, 0], X_train[:, 1], c=y_train, edgecolors='k', marker='o')
     ```

### 142. **Visualisation de l’optimisation bayésienne avec Matplotlib**
   - Implémentez une optimisation **bayésienne** pour optimiser un modèle, puis tracez les résultats à l’aide de Matplotlib.
     ```python
     from sklearn.gaussian_process import GaussianProcessRegressor
     from sklearn.gaussian_process.kernels import RBF, ConstantKernel as C
     def objective(x):
         return (x - 2) ** 2
     kernel = C(1.0, (1e-4, 1e1)) * RBF(1, (1e-4, 1e1))
     gp = GaussianProcessRegressor(kernel=kernel, n_restarts_optimizer=10)
     X_sample = np.array([[1.0], [1.5], [2.0], [2.5]])
     y_sample = objective(X_sample)
     gp.fit(X_sample, y_sample)
     ```

### 143. **Visualisation d'un modèle d'autoencodeur avec réduction de dimensionnalité**
   - Appliquez un **autoencodeur** à des données de haute dimension et visualisez les résultats après réduction de dimensionnalité via t-SNE ou PCA.
     ```python
     from sklearn.manifold import TSNE
     from keras.models import Model
     from keras.layers import Input, Dense
     # Autoencodeur
     input_layer = Input(shape=(X.shape[1],))
     encoded = Dense(64, activation='relu')(input_layer)
     decoded = Dense(X.shape[1], activation='sigmoid')(encoded)
     autoencoder = Model(input_layer, decoded)
     autoencoder.compile(optimizer='adam', loss='binary_crossentropy')
     autoencoder.fit(X, X, epochs=50, batch_size=256, shuffle=True)
     # Visualisation
     tsne = TSNE(n_components=2)
     X_tsne = tsne.fit_transform(X)
     plt.scatter(X_tsne[:, 0], X_tsne[:, 1])
     ```

### 144. **Visualisation de l’apprentissage par renforcement avec Matplotlib**
   - Appliquez un algorithme d'**apprentissage par renforcement** sur un environnement simulé et tracez les récompenses obtenues au fil du temps.
     ```python
     import numpy as np
     import matplotlib.pyplot as plt
     rewards = []
     for episode in range(100):
         reward = np.random.rand()  # Remplacer par votre algorithme RL
         rewards.append(reward)
     plt.plot(rewards)
     ```

### 145. **Visualisation avancée de modèles de séries temporelles avec Matplotlib**
   - Utilisez **ARIMA** ou **LSTM** pour analyser une série temporelle, puis visualisez les prévisions avec les vraies valeurs à l’aide de Matplotlib.
     ```python
     from statsmodels.tsa.arima.model import ARIMA
     model = ARIMA(time_series, order=(5, 1, 0))
     model_fit = model.fit()
     forecast = model_fit.forecast(steps=10)
     plt.plot(time_series, label='Vrai')
     plt.plot(forecast, label='Prévisions')
     plt.legend()
     ```

### 146. **Visualisation d’un réseau de neurones avec Matplotlib**
   - Créez une **architecture de réseau de neurones** simple avec Keras et visualisez les connexions entre les neurones.
     ```python
     from keras.models import Sequential
     from keras.layers import Dense
     model = Sequential([
         Dense(32, input_dim=8, activation='relu'),
         Dense(1, activation='sigmoid')
     ])
     model.summary()
     ```

### 147. **Visualisation de données de texte avec Matplotlib et Wordcloud**
   - Appliquez une **analyse de texte** pour extraire les mots-clés d’un corpus et visualisez le nuage de mots avec Matplotlib.
     ```python
     from wordcloud import WordCloud
     text = 'Voici un exemple de texte avec plusieurs mots récurrents'
     wordcloud = WordCloud().generate(text)
     plt.imshow(wordcloud, interpolation='bilinear')
     plt.axis('off')
     plt.show()
     ```

### 148. **Visualisation avancée des erreurs de prédiction avec Matplotlib**
   - Tracez un graphique montrant les **erreurs de prédiction** par rapport aux prédictions dans un modèle de régression.
     ```python
     plt.scatter(y_test, y_pred, label='Prédictions')
     plt.plot([min(y_test), max(y_test)], [min(y_test), max(y_test)], color='red', lw=2)
     plt.xlabel('Valeurs réelles')
     plt.ylabel('Valeurs prédites')
     plt.title('Erreurs de prédiction')
     ```

### 149. **Analyse de la stabilité d'un modèle avec un graphique d'importance des variables**
   - Utilisez un modèle d’**arbre décisionnel** ou un modèle de forêt aléatoire et tracez un graphique montrant l'importance des variables.
     ```python
     from sklearn.ensemble import RandomForestClassifier
     model = RandomForestClassifier()
     model.fit(X_train, y_train)
     feature_importance = model.feature_importances_
     plt.barh(range(len(feature_importance)), feature_importance)
     plt.yticks(range(len(feature_importance)), df.columns)
     ```

### 150. **Visualisation de l'impact de l'échantillonnage avec Matplotlib**
   - Visualisez l'impact de différentes stratégies d'**échantillonnage** sur un jeu de données déséquilibré en utilisant Matplotlib.
     ```python
     from imblearn.over_sampling import SMOTE
     smote = SMOTE()
     X_resampled, y_resampled = smote.fit_resample(X, y)
     plt.scatter(X_resampled[:, 0], X_resampled[:, 1], c=y_resampled, cmap='viridis')
     ```

---
