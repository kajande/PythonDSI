### **Exercice de preparation au projet de fin de formation : Analyse et visualisation des données produits d'un site e-commerce**

---

#### **Étapes modifiées :**

1. **Récupération de la page principale avec `requests`.**
   - Charger la page HTML principale à partir de l'URL du site e-commerce (`python-dsi.github.io/e-commerce`).
   - Utiliser **BeautifulSoup** pour analyser et extraire les informations principales des produits affichés.

2. **Navigation dynamique avec Selenium.**
   - Automatiser le clic sur chaque produit pour accéder à sa page de détails.
   - Extraire des informations supplémentaires sur les produits (description, disponibilité, etc.).

3. **Organisation et analyse des données.**
   - Structurer les données dans un DataFrame avec **Pandas**.
   - Effectuer des opérations de nettoyage et de transformation.

4. **Visualisation des données.**
   - Créer des graphiques avec **Matplotlib** pour répondre aux questions clés.

---

### **Code Exemple**

```python
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import matplotlib.pyplot as plt
import time

# Étape 1 : Récupération de la page principale avec requests
url = "https://python-dsi.github.io/e-commerce"
headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    print("Page principale récupérée avec succès.")
else:
    print(f"Erreur lors de la récupération : {response.status_code}")
    exit()

# Extraire les informations des produits depuis la page principale
products = []
product_divs = soup.find_all('div', class_='product')
for product in product_divs:
    name = product.find('h3').text
    price = float(product.find('p', class_='price').text.replace('€', '').strip())
    link = product.find('a', class_='details')['href']
    products.append({'Name': name, 'Price': price, 'Details_Link': link})

# Étape 2 : Navigation dynamique avec Selenium
driver = webdriver.Chrome()  # Assurez-vous que le ChromeDriver est installé
detailed_products = []

for product in products:
    driver.get(product['Details_Link'])
    time.sleep(2)  # Pause pour charger la page

    # Extraire des détails supplémentaires
    try:
        description = driver.find_element(By.CLASS_NAME, 'product-description').text
        availability = driver.find_element(By.CLASS_NAME, 'availability-status').text
        reviews = int(driver.find_element(By.CLASS_NAME, 'reviews-count').text.split()[0])
        rating = len(driver.find_element(By.CLASS_NAME, 'rating').text.split('★')) - 1

        product_details = {
            'Name': product['Name'],
            'Price': product['Price'],
            'Description': description,
            'Availability': availability,
            'Reviews': reviews,
            'Rating': rating,
        }
        detailed_products.append(product_details)

    except Exception as e:
        print(f"Erreur lors de la récupération des détails pour {product['Name']}: {e}")

driver.quit()

# Étape 3 : Organisation des données avec Pandas
df = pd.DataFrame(detailed_products)
df.drop_duplicates(inplace=True)

# Ajouter une colonne "Prix par Étoile"
df['Price_Per_Star'] = df['Price'] / df['Rating']

# Étape 4 : Analyse et Visualisation
plt.figure(figsize=(10, 6))

# Distribution des prix
plt.subplot(2, 2, 1)
df['Price'].hist(bins=10, color='skyblue', edgecolor='black')
plt.title('Distribution des Prix')
plt.xlabel('Prix (€)')
plt.ylabel('Nombre de produits')

# Répartition des avis par évaluation
plt.subplot(2, 2, 2)
df.groupby('Rating')['Reviews'].sum().plot(kind='bar', color='orange')
plt.title('Répartition des Avis par Évaluation')
plt.xlabel('Évaluation (Étoiles)')
plt.ylabel('Nombre d\'Avis')

# Meilleur rapport qualité-prix
plt.subplot(2, 2, 3)
top_quality_price = df.sort_values('Price_Per_Star').head(5)
plt.barh(top_quality_price['Name'], top_quality_price['Price_Per_Star'], color='green')
plt.title('Meilleurs Rapports Qualité-Prix')
plt.xlabel('Prix par Étoile (€)')
plt.ylabel('Produit')

# Produits disponibles vs non disponibles
plt.subplot(2, 2, 4)
availability_count = df['Availability'].value_counts()
plt.pie(availability_count, labels=availability_count.index, autopct='%1.1f%%', colors=['lightgreen', 'salmon'])
plt.title('Disponibilité des Produits')

plt.tight_layout()
plt.show()
```

---

### **Améliorations possibles :**
1. **Multithreading** pour accélérer la collecte des données avec **Selenium**.
2. Utiliser **Seaborn** pour des visualisations plus avancées.
3. Ajouter une sauvegarde des données extraites au format CSV ou Excel.
4. Étendre le projet pour inclure une analyse prédictive ou des recommandations de produits.

---

### **Livrables attendus :**
1. Script Python complet et fonctionnel.
2. Rapport d'analyse accompagné de visualisations.
3. Documentation du processus, y compris les erreurs rencontrées et les solutions apportées.