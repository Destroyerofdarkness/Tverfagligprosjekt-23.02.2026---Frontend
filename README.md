README — WCAG Vurderingsplattform
📌 Beskrivelse

Dette prosjektet er en webapplikasjon hvor brukere kan registrere seg, logge inn og publisere vurderinger av nettsteder basert på WCAG (Web Content Accessibility Guidelines). Påloggede brukere kan også kommentere på vurderinger, mens ikke-påloggede brukere kun kan lese vurderinger og kommentarer.

Målet med løsningen er å skape et forum for tilgjengelighetsvurdering av nettsteder.

✨ Funksjonalitet
👤 Brukerhåndtering

Registrering av bruker

Pålogging med brukernavn og passord

Passord lagres kryptert i databasen

Unikt brukernavn

Passord må være minst 6 tegn

Innlogget bruker får cookie (sesjon)

Mulighet for å logge ut (sletter cookie)

📝 Vurderinger

Kun påloggede brukere kan publisere vurderinger

En vurdering inneholder:

Unik tittel

Lenke til vurdert nettsted

Beskrivelse (minst 100 tegn)

Forfatter (brukernavn)

Vurderinger lagres i databasen

Bruker kan slette egne vurderinger

Alle kan lese vurderinger uten å være innlogget

💬 Kommentarer

Kun påloggede brukere kan kommentere

Kommentar inneholder:

Beskrivelse

Hvilken vurdering den tilhører

Forfatter (brukernavn)

Bruker kan slette egne kommentarer

Alle kan lese kommentarer

🧭 Navigasjon

Navigasjon via navbar

Hovedside med liste over vurderinger

Klikk på tittel åpner vurderingen

🧱 Datamodeller
Bruker
Felt	Beskrivelse
brukernavn	Unik identifikator
passord	Kryptert passord
Vurdering
Felt	Beskrivelse
tittel	Unik
lenke	URL til nettsted
beskrivelse	Minst 100 tegn
forfatter	Brukernavn
Kommentar
Felt	Beskrivelse
beskrivelse	Kommentarinnhold
vurdering	Referanse til vurdering
forfatter	Brukernavn
🔐 Autentisering
Registrering

Bruker skriver inn brukernavn og passord to ganger

Systemet sjekker:

Om brukernavn er ledig

Om passordene matcher

Passord krypteres og lagres

Bruker logges inn automatisk

Pålogging

Bruker oppgir brukernavn og passord

Systemet verifiserer mot kryptert passord

Ved suksess sendes cookie og bruker føres til hovedsiden

🖥️ Systemarkitektur
Frontend

Viser brukergrensesnittet

Kommuniserer kun med API-server

Har ikke tilgang til databasen

Kjører via Nginx proxy

Åpne porter:

80 — HTTP

22 — SSH

.env variabler

HOST=<CORS>
PORT=<frontend port>
API=<backend url>
API / Backend

Håndterer autentisering og forespørsler

Kommuniserer med MongoDB

Bruker JWT secret key

Åpne porter:

6001 — API

22 — SSH

.env variabler

HOST=<CORS>
PORT=6001
MONGO=<mongodb connection string>
SECRET=<jwt secret>
Database — MongoDB

Lagrer brukere, vurderinger og kommentarer

Kun tilgjengelig fra API-server

Åpne porter:

27017 — Kun for API

22 — SSH

🚀 Drift og sikkerhet

Frontend har ikke direkte database tilgang

Sensitive nøkler lagres i .env

Passord lagres kryptert

JWT brukes for autentisering

Begrensede åpne porter for sikkerhet

⏱️ Tidsestimat

Estimert utviklingstid: 24 timer

📄 Lisens

Dette prosjektet er laget for utdanningsformål.
