# TadaaBiss Flammen & Käse

Designe und baue eine vollständige Restaurant-Website für "TADAABISS" – Slogan "EAT · MEET · REPEAT" – ein lebendiges Pizza-, Döner- und Street-Food-Restaurant in Münsingen (Marktplatz 12, 72525 Münsingen). Die Seite soll sich anfühlen wie ein kleiner Film über Hitze, Käse, Feuer und Hunger – laut, warm, handgemacht. NICHT wie ein generisches Template und NICHT wie KI-generiert.

═══════════════════════════════════════
MARKEN-DNA (aus Logo, Speisekarte und Flyer übernehmen)
═══════════════════════════════════════
- Logo: kursive, dicke Pinsel-Schrift "Tadaa" in Weiß + "Biss" im orange-gelben Verlauf, schwarze Kontur mit orangem Außenrand, goldene Krone, Kochmütze, Banner "EAT · MEET · REPEAT" mit gekreuzter Gabel und Messer. Das Original-Logo wird 1:1 verwendet, nicht nachgebaut und nicht verzerrt.
- Charakter: freundlich, schnell, satt, ein bisschen frech. Man sagt "du". "Tadaa!" ist der Moment, in dem das Essen ankommt – dieser Moment zieht sich durch die ganze Seite.
- Visuelle Sprache aus den Drucksachen: schwarzer Grund mit Kreide-/Tafeltextur, orange Pinselstriche hinter Überschriften, Nummern-Badges (01, 02 …), Sticker, schräge Texte, Dampf und Hitze auf den Fotos.

═══════════════════════════════════════
DESIGN TOKENS
═══════════════════════════════════════
Hintergrund:        #0B0B0B (warm, mit Filmkorn 4–6 %)
Karten:             #161616 mit feiner Kreidetextur
Orange Primär:      #FF9A00
Orange-Gelb Verlauf: #FF8A00 → #FFC400 (Logo-Wort "Biss", Preise, Hover)
NEU – Rot (Feuer/Hitze): #E11D2E, helles Rot #FF3B3B, dunkles Rot #7A0B14
Rot-Orange Flammenverlauf: #E11D2E → #FF6A00 → #FFB800 (Hero-Glühen, Scharf-Badges, Kategorie-Akzent Döner, "LIVE"-Punkte, Rabatt-Sticker)
Text Primär:        #FFFFFF
Text Sekundär:      #B5B0A8
Papier-Creme:       #FFF1DC (Allergen-Box, Preis-Etiketten)
Erfolg #22C55E | Fehler #EF4444 (Fehlerrot bleibt klar vom Marken-Rot getrennt, immer mit Icon + Text)
Verwendungsregel Farben: Schwarz ist die Bühne, Orange führt, Rot ist das Feuer. Rot nie flächig auf großen Blöcken, sondern als Glut: Glühen hinter Fotos, Flammenkanten, Sticker, Scharf-Hinweise, Rabatt-Stempel. Pro Kategorie ein Akzent: Pizza = Rot-Orange, Döner = Orange-Gelb, Bowls = Orange + Grün-Spritzer (Frische).
Überschriften:      "Bebas Neue" / alternativ "Anton" – riesig, eng, kondensiert
Akzent-Schrift:     Pinsel-Script (z. B. "Permanent Marker" / "Caveat Brush") nur für kleine Kommentare
Fließtext:          "Inter" oder "DM Sans"
Raster/Radius:      8-px-System | Karten 14 px | Buttons 10 px
Schatten:           tiefer Schatten + warmes Glühen (Orange, bei Pizza/Scharf Rot) bei Hover

═══════════════════════════════════════
SO WIRKT ES NICHT WIE KI (verbindliche Regeln)
═══════════════════════════════════════
- Bewusste Asymmetrie: leicht gedrehte Elemente (−2° bis +3°), Sticker, die über Kartenränder ragen, überlappende Preisschilder.
- Pinselstrich-Masken hinter Überschriften, jeder Strich anders.
- Echte Food-Fotografie mit Dampf, Käsefäden, Händen, Teig; keine glatten Render-Bilder. Platzhalter klar markieren.
- Eigene handgezeichnete Linien-Icons (dicke Kontur, leicht unperfekt), keine Icon-Pakete.
- Texte wie ein Mensch aus Münsingen: kurze Sätze, keine Floskeln.
- Jeder Abschnitt hat einen anderen Rhythmus (Vollbild, Pin-Sequenz, versetzte Collage, Ticker). Niemals dreimal dieselbe Dreierkarten-Reihe.
- Keine Standard-Glasmorphism-Karten, keine lila/blauen Verläufe.
- Entfernt: der Abschnitt "Dein Essen. Dein Weg." mit den drei Bestellart-Karten (Abholung | Lieferung | Vor Ort). Die Bestellart wird stattdessen leicht gewählt (siehe Hero-Schalter, Warenkorb-Sheet und Checkout).

═══════════════════════════════════════
SEITENSTRUKTUR (neue Reihenfolge)
═══════════════════════════════════════

0. TADAA-INTRO (ca. 1,2 s, überspringbar, einmal pro Sitzung)
Schwarzer Screen. Ein Funke, dann Flamme (Rot → Orange) fährt über den Bildschirm und "brennt" das Logo frei; Krone und Kochmütze landen mit kleinem Bounce, "Tadaa!" blitzt auf, der Screen teilt sich wie ein Vorhang nach oben. prefers-reduced-motion = einfacher Fade.

1. NAVIGATION
Sticky, dunkel, beim Scrollen halbtransparent. Logo links, Links mittig: Speisekarte · So geht's · Über uns · Kontakt. Rechts: DE/EN + Warenkorb-Icon mit hüpfendem Zähler. Mobil: Hamburger oben rechts, Vollbild-Menü mit großen Bebas-Links, die einzeln eingefahren werden.

2. HERO MIT ZWEI HAUPT-KATEGORIEN (erste Bildschirmseite)
Konzept: der Bildschirm ist in zwei große, lebendige Hälften geteilt – die zwei Hauptkategorien der Marke:
  LINKS – "PIZZA & CO." (Pizzen, Calzone, Pizzabrötchen): Hintergrund Steinofen-Glut, Rot-Orange Glühen, Käsefaden, Dampf.
  RECHTS – "DÖNER & GRILL" (Döner, Lahmacun, Bowls, Falafel, Schnitzel): Hintergrund Dönerspieß, Funken, Orange-Gelb Glühen.
Jede Hälfte ist ein großes Foto bzw. Loop (kurz, stumm, komprimiert, Poster-Bild als Fallback), mit riesigem Bebas-Titel, einem Satz in Script-Schrift ("Frisch aus dem Ofen." / "Vom Spieß. Heiß.") und einem Button "Jetzt entdecken".
Interaktion: Hover (Desktop) lässt die Hälfte auf ca. 60 % wachsen, die andere schrumpft auf 40 %, Video läuft, Glut flackert. Mobil: zwei übereinander gestapelte Vollbreite-Karten (je ca. 45 % der Höhe), Tipp scrollt direkt in die jeweilige Kategorie der Speisekarte (nicht in einen Dialog).
Über beiden Hälften mittig: Logo, darunter Schlagzeile "DEIN LIEBLINGS-ESSEN, JETZT ONLINE GENIESSEN!" (Weiß + Orange auf Pinselstrich) und Script "Frisch. Heiß. Lecker. Direkt zu dir nach Hause."
Oben rechts ein schräger roter Sticker: "10 % RABATT bei Online-Bestellung" (Einkaufstüten-Icon).
Unten: kleiner Bestellart-Schalter als Pille (Abholung | Lieferung | Vor Ort), live gespeichert, ersetzt den entfernten Abschnitt. Daneben Live-Status "Heute geöffnet bis 22:00 · Lieferung ca. 35 Min." mit pulsierendem roten Punkt.
Scroll-Hinweis: kleine Gabel/Messer-Maus, die nach unten zeigt.

3. KINO-SCROLL-SEQUENZ "VOM TEIG ZUM TADAA" (Pin-Section, das Highlight)
Die Seite "pinnt" eine Vollbild-Szene, und beim Scrollen läuft eine Geschichte wie ein Film (GSAP ScrollTrigger oder scrub-gesteuertes Video / Bildsequenz):
  Szene 1 – Teig: Hände ziehen Pizzateig, Mehlstaub, Titel "01 FRISCH" fährt aus dem Schwarz.
  Szene 2 – Feuer: Pizza geht in den Ofen, der Hintergrund glüht von Schwarz zu Rot-Orange, "02 HEISS".
  Szene 3 – Spieß: Schnitt auf Dönerspieß, Funken, Fleisch wird geschnitten, Gelb-Orange, "03 KNUSPRIG".
  Szene 4 – Tadaa: Teller/Box kommt ins Bild, Kamera "zieht auf", Konfetti-Funken, großes "TADAA!" und Button "Jetzt bestellen".
Stilmittel: Parallax in 3 Ebenen (Vordergrund Mehl/Funken schneller, Mitte Food, Hintergrund langsam), leichte Kamera-Zooms (Scale 1.0 → 1.15), Letterbox-Balken (kinoartige schwarze Balken oben/unten), Filmkorn, Textzeilen werden Wort für Wort enthüllt, sanfte Farbwechsel des Hintergrunds. Fortschrittsleiste links (4 Punkte). Mobil: gleiche Sequenz, kürzer (2–3 Szenen), keine schweren Videos, stattdessen komprimierte Bildsequenz.

4. LAUFBAND (Ticker)
Schräg, endlos laufend, rot-orange: "PIZZA · DÖNER · LAHMACUN · BOWLS · FALAFEL · SCHNITZEL · CALZONE · EAT · MEET · REPEAT". Scroll-Geschwindigkeit koppelt sich an die Scrollrichtung/-geschwindigkeit. Pausiert bei Hover.

5. SPEISEKARTE (Herzstück)
Sticky Kategorie-Tabs (wischbar), aktive Kategorie mit Pinselstrich unterlegt. Reihenfolge so, dass die zwei Hauptkategorien zuerst stehen:
Pizza & Co. (Pizzen 30 cm · Calzone · Gefüllte Pizzabrötchen) | Döner & Grill (Döner & Lahmacun · Bowls · Falafel & Halloumi · Schnitzel · Sandwiches) | Salate | Pommes & Snacks | Getränke
Beim Wechsel der Kategorie: Karten "fliegen" gestaffelt (stagger 40 ms) hinein.
Jedes Gericht trägt seine Nummer als Badge (01, 02 …), wie auf der gedruckten Karte.
Karte: Foto oben, Name, Kurzbeschreibung, Allergen-Chips (A–N) in Creme, Preis in Orange-Gelb-Verlauf, Button "In den Warenkorb". Scharfe Gerichte tragen einen roten Flammen-Chip. Hover: 4 px anheben, Glühen (Orange; bei scharf/Pizza Rot), Foto zoomt 4 %.
Allergen-Filter: Chips "ohne Gluten", "ohne Milch", "vegetarisch", "scharf".
Optionen (Größe/Extras/Soßen) laufen im Produkt-Bottom-Sheet (siehe unten).

Preise exakt von der gedruckten Karte:
PIZZEN 30 cm – 01 Margherita 7,50 | 02 Salami 8,50 | 03 Prosciutto 8,50 | 04 Funghi 8,50 | 05 Fantasia 9,00 | 06 Tonno 9,50 | 07 Diavolo (scharf) 9,00 | 08 Vegetaria 10,50 | 09 Capricciosa 11,00 | 10 Quattro Stagioni 10,00
DÖNER & LAHMACUN – 01 Döner Kebap 7,00 | 02 Dürüm Döner 8,00 | 03 Döner Teller 11,00 | 04 Döner Box 7,00 | 05 Lahmacun 8,00 | 06 Lahmacun mit Dönerfleisch 9,00
BOWLS (je 10,00) – 11 Shawarma Bowl (Hähnchenfleisch, Reis oder Pommes, Salat & Knoblauchcreme) | 12 Crispy Chicken Bowl | 13 Halloumi Bowl (G, K) | 14 Falafel Bowl (G, K) | 15 Falafel-Halloumi Bowl | 16 Veggie Bowl (G, K)
SANDWICHES – 17 Crispy Chicken Sandwich 8,00 | 18 Pommes Sandwich 6,00
FALAFEL & HALLOUMI – 19 Falafel im arabischen Brot 8,00 | 20 Falafel Teller 12,00 | 21 Halloumi im Brot 7,00 | 22 Halloumi Teller 12,00
CALZONE – 23 Calzone (Schinken, Salami, Champignons, Zwiebeln) 10,00 | 24 Döner-Calzone 11,00
GEFÜLLTE PIZZABRÖTCHEN – 25 Salami 9,00 | 26 Schinken 9,00 | 27 Thunfisch 9,50 | 28 Dönerfleisch 9,50 | 29 Sucuk 9,50
SCHNITZEL – 30 Wiener Art 10,00 | 31 Hawaii 11,00 | 32 Holsteiner Art 11,00
SALATE – 33 Insalata Mista 10,00 | 34 Italia 10,00 | 35 Tonno 10,00 | 36 Capricciosa 11,00 | 37 Fiorida 11,00 | 38 Caprese 10,00 | 39 della Casa 11,00
POMMES & SNACKS – 40 Pommes (Preis vor Launch prüfen, als Variable eintragen) | 41 Chicken Nuggets (6 Stk.) 6,00 | 42 Mozzarella Sticks (6 Stk.) 6,00 | 43 Zwiebelringe (6 Stk.) 5,00
GETRÄNKE – Coca-Cola, Coca-Cola Light, Fanta, Sprite, Mezzo Mix, Ayran (je 0,33 l) 2,50 | Wasser 0,5 l 2,00
(Hinweis an den Betreiber: In der Vorlage sind Calzone 23/24 doppelt, der Preis von Nr. 40 Pommes fehlt (als Variable eintragen), "Falloumi Bowl" ist ein Tippfehler, Allergen-Zeilen sind doppelt – bitte vor Livegang prüfen.)

6. FEUER-HIGHLIGHTS (Bestseller, statt 3-Spalten-Raster)
Horizontaler Scroll-Tunnel: beim vertikalen Scrollen wandern die Top-Gerichte seitlich durchs Bild (pinned, horizontal scrub), jedes wird groß mit Name, Preis, Glut-Hintergrund und Sticker ("BESTSELLER" orange, "NEU" weiß, "SCHARF" rot). Mobil: normales Wisch-Karussell mit Snap. Vorschlag: Döner Kebap, Shawarma Bowl, Crispy Chicken Sandwich, Pizzabrötchen Sucuk, Falafel Teller, Pizza Diavolo.

7. TADAA-MENÜ ZUSAMMENSTELLEN
Mini-Konfigurator: Hauptgericht → Beilage (Pommes/Salat) → Getränk. Das fertige Paket klappt mit "Tadaa!"-Animation (Karte dreht sich auf, Funken) auf. Ersparnis als roter Stempel ("−1,50 €"). Erhöht den Warenkorbwert.

8. SO FUNKTIONIERT'S
Drei Schritte, verbunden durch eine gestrichelte Linie, die sich beim Scrollen "zeichnet" (SVG stroke-dashoffset): 1. Gericht auswählen → 2. Online bestellen → 3. Abholen oder liefern lassen. Riesige orange Nummern, halb hinter dem Text; handgezeichnete Icons (Roller, Servierglocke, Qualitätssiegel). Darunter Banner "Jetzt scannen und genießen!" mit QR-Code im Sticker-Look. Statt eigener Bestellart-Kacheln hier ein kurzer Satz zu Abholung, Lieferung und Vor Ort.

9. ÜBER UNS – "EAT · MEET · REPEAT" (Scroll-Enthüllung)
Drei große Wörter (EAT, MEET, REPEAT) füllen nacheinander den Bildschirm, jedes mit eigenem Foto, das beim Scrollen aufgezogen wird (Clip-Path-Reveal von unten nach oben) und einem kurzen Text:
EAT – Frisch zubereitet, heiß serviert. Pizza, Döner, Bowls, Schnitzel – alles unter einem Dach.
MEET – Bei uns trifft man sich: Mittagessen, nach der Arbeit, Freunde, Familie.
REPEAT – Du kommst wieder, weil es schmeckt. Und weil wir dich kennen.
Am Ende Handschrift mit Herz: "Danke für deine Unterstützung!"

10. BEWERTUNGEN
Drei dunkle Karten im Google-Reviews-Stil, leicht versetzt/gedreht, goldene Sterne; Mobil: Wisch-Karussell. Platzhalter klar als "Beispiel" kennzeichnen und vor Livegang durch echte Google-Bewertungen ersetzen (keine erfundenen Bewertungen als echt ausgeben).

11. KONTAKT & ANFAHRT
Eingebettete Karte (Marktplatz 12, 72525 Münsingen), Öffnungszeiten (heutiger Tag hervorgehoben, "Jetzt geöffnet" mit grünem Punkt), Tap-to-Call: 0176 60850594 und 01521 9529649, WhatsApp-Button (optional).

12. FOOTER
Logo, Instagram-Link prominent (Handle als Variable), weitere Social Media, Adresse, Telefon, Öffnungszeiten. Links: Impressum | Datenschutz | AGB | Allergenhinweise. Allergen-Legende (A–N) in der Creme-Box. Riesiger, angeschnittener "TADAA!"-Schriftzug als Deko, mit Glut-Verlauf Rot → Orange.

═══════════════════════════════════════
KINO-ANIMATIONSSYSTEM (global)
═══════════════════════════════════════
- Technik: GSAP + ScrollTrigger (oder Lenis für weiches Scrollen), CSS-Transforms und opacity (GPU-freundlich), IntersectionObserver als Fallback.
- Weiches Scrollen (Lenis) mit leichtem Nachlauf, damit Bewegungen "gleiten".
- Bewegungsprinzipien: Elemente erscheinen mit Masken-Reveal (Text steigt aus einer Linie auf), Bilder öffnen sich per clip-path, nichts blendet nur flach ein. Easing: power3.out / expo.out, Dauer 0,6–1,0 s.
- Parallax: Fotos bewegen sich langsamer als der Rahmen (innen Scale 1.1 → 1.0).
- Farbwechsel: der Seiten-Hintergrund verschiebt sich dezent zwischen Schwarz, Dunkelrot (#1A0508) und warmem Schwarz je nach Szene.
- Filmkorn und leichter Vignetten-Rand dauerhaft, aber sehr subtil.
- Magnetische Buttons (ziehen sich leicht zum Cursor, Desktop), Funken-Partikel beim Klick auf "Jetzt bestellen".
- Leistung: maximal 1–2 schwere Pin-Sequenzen, Videos komprimiert (WebM/MP4), Bilder AVIF/WebP, Lazy Loading, Ziel 60 fps, LCP unter 2,5 s.
- Barrierefreiheit: prefers-reduced-motion schaltet Pin-Sequenzen, Parallax und Partikel ab und zeigt statische Szenen; Inhalte bleiben ohne Animation vollständig lesbar.

═══════════════════════════════════════
BOTTOM SHEETS STATT DIALOGE (verbindlich, Uber-Eats-Prinzip)
═══════════════════════════════════════
KEINE zentrierten Modals/Dialoge für Produkte, Optionen oder Warenkorb. Alles, was "aufgeht", ist ein Bottom Sheet, das von UNTEN ins Bild fährt.
- Tipp auf eine Produktkarte oder "+" öffnet das Produkt-Sheet mit weicher Federanimation (ca. 300 ms). Hintergrund abgedunkelt, Seite dahinter sichtbar.
- Starthöhe ca. 75 % der Bildschirmhöhe, per Ziehen am Griff auf 100 % oder nach unten zum Schließen. Griff-Balken oben mittig (36 × 4 px).
- Obere Ecken abgerundet (20–24 px), Hintergrund #161616, Schatten nach oben. Snap-Punkte 50 | 75 | 100 %. Schnelles Wischen nach unten schließt.
- Schließen: Wischen, Tippen auf den Hintergrund, Esc, X oben rechts. Inhalt scrollt im Sheet, Seite dahinter ist gesperrt (scroll lock).
- Desktop: gleiches Prinzip, max. Breite 560 px, zentriert, von unten.
Produkt-Sheet von oben nach unten: großes Foto (Verlauf unten) + Nummer-Badge + Name | Beschreibung + Allergen-Chips | Optionsgruppen mit Pflicht/Optional (Soße, Extras, Schärfe) | Feld "Anmerkung für die Küche" | fester Fußbereich mit Mengensteuerung und orangem Button "Hinzufügen · 8,50 €" (live aktualisiert).
Warenkorb: sobald ein Artikel drin ist, erscheint unten eine feste orange (bei Hover rot-orange) Leiste: Anzahl im Kreis, "Warenkorb ansehen", Summe. Sie ersetzt den Sticky-Button "Jetzt bestellen". Tipp öffnet das Warenkorb-Sheet von unten (75 % → 100 %). KEIN Slide-in von rechts.
Weitere Sheets: Bestellart und Zeit, Liefer-PLZ prüfen, Gutschein, Zahlungsart, Allergen-Filter. Keine Alert-/Confirm-Dialoge; Rückmeldungen als Toast/Snackbar.
Barrierefreiheit: role="dialog", aria-modal, Fokusführung hinein und zurück, Ziehen auch per Button/Tastatur.

═══════════════════════════════════════
WARENKORB & BESTELLABLAUF
═══════════════════════════════════════
WARENKORB (Bottom Sheet): Artikelliste mit Bild, Nummer + Name, Extras, Mengensteuerung (– / +), Einzelpreis, Löschen. Bestellart-Schalter (Abholung | Lieferung | Vor Ort) ganz oben, mit PLZ-Prüfung bei Lieferung (Liefergebiet Münsingen und Umgebung als PLZ-Liste, Mindestbestellwert und Gebühr als Variablen). Trennlinie. Gutschein-Feld (Hinweis "10 % Online-Rabatt automatisch aktiv", Code z. B. TADAA10 als Variable; Rabattzeile sichtbar). Liefergebühr-Zeile nur bei Lieferung, Fortschrittsbalken zum Mindestbestellwert ("Noch 4,50 € bis zur Lieferung"). Gesamtbetrag fett im Orange-Gelb-Verlauf. Großer Button "Zur Kasse". Leerer Warenkorb: "Hier ist noch nix. Dein Bauch weiß Bescheid." mit Zeichnung.

CHECKOUT: Fortschrittsanzeige Warenkorb → Daten → Zahlung → Bestätigung. Formular: Vorname, Nachname, E-Mail, Telefon, Straße + Hausnummer, PLZ, Stadt (nur Lieferung), Tischnummer (nur Vor Ort), Wunschzeit (So schnell wie möglich / Uhrzeit), Anmerkungen. Inline-Validierung mit klaren deutschen Fehlermeldungen. Zahlungsarten als auswählbare Karten: Kreditkarte | Klarna | PayPal | Bar bei Lieferung/Abholung. Rechts sticky Bestellübersicht (Artikel, Rabatt, Gebühr, Gesamt). Mobil: Vollseite, Übersicht oben einklappbar. Button "Jetzt bezahlen" bzw. "Bestellung aufgeben". Pflicht-Checkbox AGB/Datenschutz.

BESTÄTIGUNG: Großes oranges Checkmark, das sich selbst zeichnet, Konfetti-Funken in Orange/Rot/Weiß. Text "Tadaa! Deine Bestellung ist eingegangen." Bestellnummer, geschätzte Wartezeit, Zusammenfassung, Live-Statuszeile (Eingegangen → Wird zubereitet → Unterwegs/Abholbereit). Buttons: "Zurück zur Startseite" und "Nochmal bestellen" (Repeat!).

═══════════════════════════════════════
RESPONSIVE / MOBILE
═══════════════════════════════════════
Mobile-First im Stil einer App (Uber Eats): Produkte und Warenkorb als Bottom Sheets, Sticky "Jetzt bestellen" bzw. Warenkorb-Leiste unten, Hamburger oben rechts, wischbare Kategorie-Tabs, einspaltige kompakte Produktkarten (kleines Foto links, Text rechts, Plus-Button), Checkout als Vollseite, Touch-Ziele mindestens 48 px. Hero auf Mobil: zwei gestapelte Kategorie-Karten. Schwere Animationen werden mobil vereinfacht.

═══════════════════════════════════════
TECHNIK & QUALITÄT
═══════════════════════════════════════
Zweisprachig DE/EN (Standard DE, alle Texte aus einer Sprachdatei). Warenkorb im localStorage, Preise und Rabatt serverseitig neu berechnen. Kontrast mindestens AA (Orange/Rot nur auf Schwarz für kleinen Text), Fokus-Ringe in Orange, Alt-Texte. Lokales Schema.org (Restaurant, Menü, Öffnungszeiten), Titel "TadaaBiss – Pizza, Döner & Bowls in Münsingen". Impressum, Datenschutz, AGB, Allergenhinweise als eigene Seiten.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tadaa-heat-flavor.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2ca935f0-2d61-4764-9437-d06ee6c4383c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
