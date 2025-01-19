# Employee Management Demo

Tento malý projekt ukazuje, jak vyvíjet frontend aplikaci v Reactu a TypeScriptu, ukládat data do Reduxu a LocalStorage, a vytvářet pěkné uživatelské rozhraní pomocí SASS.

---

## Tech Stack

- **React**, **TypeScript**
- **Redux** – správa globálního stavu aplikace (employee data, filtry)
- **LocalStorage** – jednoduchá perzistence dat na straně prohlížeče
- **SASS**
- **Webpack**
- **NPM**

---

## Funkce

- **Správa zaměstnanců**  
  Umožňuje přidávat, upravovat a mazat záznamy zaměstnanců (jméno, pozice, oddělení).

- **Lokální úložiště**  
  Díky propojení s `localStorage` zůstávají všechna data zachována i po obnovení stránky. Nepřišlo mi důležité napojovat projekt na databázi.

- **Filtrování**  
  Jednoduchý vyhledávací box, který filtruje zaměstnance podle jména nebo pozice.

- **Redux Store**  
  Veškerá data o zaměstnancích a filtru se ukládají do Reduxu, aby byly změny vždy konzistentní (moje první zkušenost s Reduxem).

- **Ukázka CRUD (Create, Read, Update, Delete)**  
  Plný cyklus práce s daty, což je v praxi často vyžadováno.

---

## Instalace a spuštění

1. Naklonujte tento repozitář:
   ```bash
   git clone https://github.com/uzivatel/employee-management-demo.git
2. Přejděte do složky nainstalujte potřebné balíčky:
   ```cd employee-management-demo + npm install
     cd employee-management-demo
     npm install
3. npm start:
   ```npm start
    npm start
