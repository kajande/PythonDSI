# Partie 1 : Web Scraping avec BeautifulSoup

## Introduction
BeautifulSoup est une bibliothèque Python puissante utilisée pour analyser des documents HTML et XML. Elle permet de parcourir la structure d'une page web, de trouver des éléments spécifiques et d'extraire des données avec une syntaxe facile à comprendre. Cette partie explore ses fonctionnalités principales, accompagnées d'exemples pratiques pour faciliter l'apprentissage.

---

## 1. Installation et Prérequis

Pour commencer, vous devez installer la bibliothèque BeautifulSoup ainsi qu'un analyseur HTML comme `lxml` ou le parser intégré de Python.

### Installation
```bash
pip install beautifulsoup4 lxml
```

### Importation des Modules
```python
from bs4 import BeautifulSoup
```

---

## 2. Chargement et Analyse de Documents HTML

### Chargement de HTML
BeautifulSoup permet de charger un document HTML sous forme de chaîne de caractères et de le convertir en un objet manipulable.

#### Exemple Basique
```python
html_doc = """<html><head><title>Exemple</title></head>
<body><p class='intro'>Bienvenue sur le site!</p></body></html>"""

soup = BeautifulSoup(html_doc, 'html.parser')
print(soup.prettify())
```

#### Analyseurs Disponibles
- `html.parser` : Analyseur intégré de Python.
- `lxml` : Plus rapide et robuste pour les documents complexes.
- `html5lib` : Offre une compatibilité maximale avec les standards HTML5.

---

## 3. Parcourir la Structure HTML

### Trouver des Éléments par Balise
```python
print(soup.title)  # Affiche la balise <title>
print(soup.title.string)  # Affiche "Exemple"
```

### Accéder à des Éléments Enfants et Parents
- **Accéder aux enfants :**
  ```python
  print(soup.body.p)  # Accède au premier paragraphe dans <body>
  ```
- **Accéder au parent :**
  ```python
  print(soup.p.parent)  # Affiche le parent du paragraphe
  ```

### Parcourir les Frères
- **Frère suivant :**
  ```python
  print(soup.p.next_sibling)
  ```
- **Frère précédent :**
  ```python
  print(soup.p.previous_sibling)
  ```

---

## 4. Recherche d'Éléments Avancée

### Méthodes Principales
- **`find(tag)`** : Renvoie le premier élément correspondant au tag.
- **`find_all(tag)`** : Renvoie tous les éléments correspondant au tag sous forme de liste.

#### Exemple : Trouver tous les Paragraphes
```python
html_doc = """<html><body>
<p class="content">Premier paragraphe.</p>
<p class="content">Deuxième paragraphe.</p>
</body></html>"""

soup = BeautifulSoup(html_doc, 'html.parser')
paragraphs = soup.find_all('p')
for p in paragraphs:
    print(p.text)
```

### Recherche par Attributs
```python
link = soup.find('a', {'href': 'http://example.com'})
print(link['href'])
```

---

## 5. Manipulation de Données

### Modifier le Contenu
```python
soup.p.string = "Contenu modifié!"
print(soup.p)
```

### Ajouter ou Supprimer des Éléments
- **Ajouter un nouvel élément :**
  ```python
  new_tag = soup.new_tag("a", href="http://newlink.com")
  new_tag.string = "Nouveau Lien"
  soup.body.append(new_tag)
  print(soup)
  ```

- **Supprimer un élément :**
  ```python
  soup.p.decompose()
  print(soup)
  ```

---

## 6. Applications Pratiques

### Extraire tous les Liens d'une Page
```python
html_doc = """<html><body>
<a href="http://example.com/page1">Page 1</a>
<a href="http://example.com/page2">Page 2</a>
</body></html>"""

soup = BeautifulSoup(html_doc, 'html.parser')
links = [a['href'] for a in soup.find_all('a')]
print(links)
```

### Extraire les Données d'un Tableau
```python
html_doc = """<table>
<tr><th>Nom</th><th>Âge</th></tr>
<tr><td>Jean</td><td>30</td></tr>
<tr><td>Marie</td><td>25</td></tr>
</table>"""

soup = BeautifulSoup(html_doc, 'html.parser')
rows = soup.find_all('tr')
for row in rows:
    cols = row.find_all('td')
    data = [col.text for col in cols]
    print(data)
```

---

## Conclusion
BeautifulSoup est un outil essentiel pour le web scraping lorsque les pages sont statiques et bien structurées. Ses fonctionnalités intuitives et puissantes permettent de manipuler et d'extraire facilement des données. Pratiquez ces concepts avec les exemples fournis pour maîtriser cette bibliothèque.



# Partie 2 : Automatisation Web avec Selenium

## Introduction
Selenium est une bibliothèque puissante pour automatiser les navigateurs web. Elle est utilisée dans une variété de cas, allant du test de logiciels à l'extraction de données depuis des pages web dynamiques. Cette section couvre en détail comment configurer Selenium, interagir avec des éléments de page, gérer des événements complexes, et manipuler des cookies et des sessions.

---

## 1. Configuration de Selenium

### Installation des Outils Nécessaires
Pour utiliser Selenium, vous aurez besoin de :
- La bibliothèque Selenium Python
- Un WebDriver adapté à votre navigateur (ex. : ChromeDriver pour Google Chrome, GeckoDriver pour Firefox).

#### Installation de Selenium
```bash
pip install selenium
```

#### Téléchargement d'un WebDriver
Téléchargez le WebDriver correspondant à votre navigateur :
- [ChromeDriver](https://chromedriver.chromium.org/downloads)
- [GeckoDriver](https://github.com/mozilla/geckodriver/releases)

#### Exemple de Configuration de WebDriver
```python
from selenium import webdriver

# Configuration avec Chrome
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
driver = webdriver.Chrome(executable_path="path/to/chromedriver", options=options)

# Ouvrir une URL
driver.get("https://example.com")
```

---

## 2. Localisation des Éléments
Selenium offre plusieurs méthodes pour localiser des éléments HTML sur une page.

### Méthodes de Localisation
- **find_element** : Trouve un élément unique.
- **find_elements** : Trouve tous les éléments correspondant au critère.

#### Sélecteurs Disponibles
- **Par ID** :
  ```python
  driver.find_element("id", "example-id")
  ```
- **Par nom** :
  ```python
  driver.find_element("name", "example-name")
  ```
- **Par classe CSS** :
  ```python
  driver.find_element("class name", "example-class")
  ```
- **Par sélecteur CSS** :
  ```python
  driver.find_element("css selector", ".example-class > div")
  ```
- **Par XPath** :
  ```python
  driver.find_element("xpath", "//div[@id='example-id']")
  ```

---

## 3. Interactions avec les Éléments

### Envoi de Texte dans un Champ
```python
search_box = driver.find_element("name", "q")
search_box.send_keys("Python Selenium")
search_box.submit()
```

### Clic sur un Bouton
```python
button = driver.find_element("id", "submit-btn")
button.click()
```

### Gestion des Menus Déroulants
```python
from selenium.webdriver.support.ui import Select

dropdown = Select(driver.find_element("id", "dropdown-id"))
dropdown.select_by_visible_text("Option 1")
```

### Gestion des Cases à Cocher et Boutons Radio
```python
checkbox = driver.find_element("id", "checkbox-id")
if not checkbox.is_selected():
    checkbox.click()
```

---

## 4. Gestion des Pages Dynamiques

### Attendre des Éléments avec WebDriverWait
Certaines pages dynamiques chargent du contenu avec un délai. Selenium permet d'attendre des conditions spécifiques.

#### Exemple : Attente de la Présence d'un Élément
```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.ID, "example-id")))
```

#### Conditions Communes
- **presence_of_element_located** : Vérifie que l'élément est présent dans le DOM.
- **element_to_be_clickable** : Vérifie que l'élément est cliquable.
- **visibility_of_element_located** : Vérifie que l'élément est visible.

---

## 5. Navigation Avancée

### Naviguer entre Pages
```python
# Ouvrir une nouvelle page
driver.get("https://example.com/page1")

# Retour à la page précédente
driver.back()

# Aller à la page suivante
driver.forward()
```

### Gestion des Onglets
```python
# Ouvrir un nouvel onglet
driver.execute_script("window.open('https://example.com', '_blank');")

# Basculer entre les onglets
tabs = driver.window_handles
driver.switch_to.window(tabs[1])
```

### Manipulation des Cookies
```python
# Ajouter un cookie
driver.add_cookie({"name": "test_cookie", "value": "test_value"})

# Obtenir tous les cookies
cookies = driver.get_cookies()
print(cookies)
```

---

## 6. Gestion des Captures d'Écran
```python
# Capturer une capture d'écran pleine page
driver.save_screenshot("screenshot.png")

# Capturer un élément spécifique
element = driver.find_element("id", "example-id")
element.screenshot("element_screenshot.png")
```

---

## 7. Fermer le Navigateur
Une fois les tâches terminées, fermez le navigateur pour libérer les ressources.
```python
# Fermer l'onglet actif
driver.close()

# Fermer complètement le navigateur
driver.quit()
```

---

## Conclusion
Cette partie vous offre une maîtrise avancée de Selenium, vous permettant d'interagir efficacement avec des pages web dynamiques. Combinez ces compétences avec BeautifulSoup pour une extraction de données complète et optimisée.


# Partie 3 : Cas Pratiques

Dans cette section, nous allons approfondir les cas pratiques pour mieux comprendre l'utilisation combinée de BeautifulSoup et Selenium. Nous fournirons des exemples d'applications concrètes avec des explications et des jeux de données fictifs.

---

## **Exemple 1 : Scraper les Articles d'un Blog avec BeautifulSoup**

### Objectif
Extraire les titres, descriptions et liens des articles publiés sur une page statique d'un blog.

### Code Exemple
```python
from bs4 import BeautifulSoup

html_doc = """<html><body>
<div class="article">
    <h2 class="title">Titre 1</h2>
    <p class="description">Description de l'article 1</p>
    <a href="http://example.com/article1">Lire plus</a>
</div>
<div class="article">
    <h2 class="title">Titre 2</h2>
    <p class="description">Description de l'article 2</p>
    <a href="http://example.com/article2">Lire plus</a>
</div>
</body></html>"""

soup = BeautifulSoup(html_doc, 'html.parser')

articles = []
for article in soup.find_all('div', class_='article'):
    title = article.find('h2', class_='title').text
    description = article.find('p', class_='description').text
    link = article.find('a')['href']
    articles.append({"title": title, "description": description, "link": link})

for article in articles:
    print(article)
```

### Résultat
```plaintext
{'title': 'Titre 1', 'description': "Description de l'article 1", 'link': 'http://example.com/article1'}
{'title': 'Titre 2', 'description': "Description de l'article 2", 'link': 'http://example.com/article2'}
```

### Explications
- Utilisation de `find_all` pour itérer sur tous les articles.
- Extraction des éléments pertinents comme les titres, descriptions et liens.
- Stockage des résultats dans une liste structurée pour un traitement ultérieur.

---

## **Exemple 2 : Remplir un Formulaire Dynamique avec Selenium**

### Objectif
Utiliser Selenium pour naviguer vers un site web, remplir un formulaire de recherche et extraire les résultats.

### Code Exemple
```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Configuration du driver
driver = webdriver.Chrome()
driver.get("https://example.com/search")

# Remplir le champ de recherche
search_box = driver.find_element(By.NAME, "query")
search_box.send_keys("Data Science")
search_box.send_keys(Keys.RETURN)

# Pause pour charger les résultats
time.sleep(3)

# Extraire les résultats
results = driver.find_elements(By.CLASS_NAME, "result")
for result in results:
    title = result.find_element(By.TAG_NAME, "h3").text
    link = result.find_element(By.TAG_NAME, "a").get_attribute("href")
    print(f"Titre: {title}, Lien: {link}")

# Fermer le navigateur
driver.quit()
```

### Résultat
```plaintext
Titre: Introduction à la Data Science, Lien: https://example.com/article1
Titre: Analyse des Données Avancées, Lien: https://example.com/article2
```

### Explications
- Utilisation de `find_element` et `find_elements` pour localiser des éléments sur la page.
- Interaction avec un champ de recherche et soumission du formulaire.
- Extraction des résultats dynamiques affichés après la recherche.

---

## **Exemple 3 : Combinaison de BeautifulSoup et Selenium**

### Objectif
Scraper une page web dynamique en utilisant Selenium pour charger la page, puis BeautifulSoup pour analyser son contenu HTML.

### Code Exemple
```python
from selenium import webdriver
from bs4 import BeautifulSoup
import time

# Charger la page dynamique avec Selenium
driver = webdriver.Chrome()
driver.get("https://example.com/articles")
time.sleep(5)  # Attente pour le chargement complet de la page

# Récupérer le code source de la page
html = driver.page_source
driver.quit()

# Analyser le HTML avec BeautifulSoup
soup = BeautifulSoup(html, 'html.parser')
articles = []
for article in soup.find_all('div', class_='article'):
    title = article.find('h2', class_='title').text
    link = article.find('a')['href']
    articles.append({"title": title, "link": link})

for article in articles:
    print(article)
```

### Résultat
```plaintext
{'title': 'Article 1', 'link': 'https://example.com/article1'}
{'title': 'Article 2', 'link': 'https://example.com/article2'}
```

### Explications
- Selenium permet de charger la page web dynamique et BeautifulSoup facilite l'analyse du contenu.
- Le code source complet de la page est extrait avec `page_source` et transmis à BeautifulSoup.
- Extraction des données structurées similaire au scraping statique.

---

## Exercices Pratiques

### Exercice 1 : Scraper des Commentaires de Blog
**Tâche :** Récupérer les noms des utilisateurs et leurs commentaires depuis une section de commentaires en HTML.

### Exercice 2 : Automatiser une Recherche de Produits
**Tâche :** Utiliser Selenium pour chercher un produit sur un site d'e-commerce et récupérer les noms et prix des premiers résultats.

### Exercice 3 : Extraction Dynamique avec Combinaison
**Tâche :** Charger une page dynamique d'actualités avec Selenium, puis utiliser BeautifulSoup pour extraire les titres et descriptions des articles.

