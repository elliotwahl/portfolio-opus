# elliotwahl.se – statisk portfolio

Ren HTML/CSS-portfolio utan beroenden utöver Google Fonts.

## Deploy till Netlify

### Alternativ 1 – Drag-and-drop (enklast)
1. Gå till [app.netlify.com](https://app.netlify.com)
2. Dra hela `portfolio/`-mappen till dropzonen
3. Klart – du får en `*.netlify.app`-URL direkt

### Alternativ 2 – GitHub + auto-deploy
1. Pusha mappen till ett GitHub-repo
2. Koppla repot i Netlify → "New site from Git"
3. Bygg-kommando: (lämna tomt)
   Publish directory: `.`
4. Varje push till `main` triggar automatisk deploy

## Egen domän (elliotwahl.se)
1. I Netlify: Site settings → Domain management → Add custom domain
2. Lägg till `elliotwahl.se` och `www.elliotwahl.se`
3. Hos din domänregistrar: ändra nameservers till Netlifys, **eller** lägg till en CNAME/A-post enligt Netlifys instruktioner
4. Netlify sätter upp HTTPS (Let's Encrypt) automatiskt

## Profilbild
Lägg din profilbild som `profil.jpg` i samma mapp.
Rekommenderad storlek: minst 300×300 px, kvadratisk.

## Uppdatera innehåll
Redigera `index.html` direkt – lägg till artiklar, projekt osv.
All styling finns i `style.css`.
