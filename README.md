# Zyklus

Privater Periodenkalender als Web-App fürs iPhone. Alle Daten bleiben auf dem Gerät – kein Konto, kein Server, kein Tracking.

**App:** https://lkz481.github.io/Zyklus/

## Installieren (iPhone)
1. Link in **Safari** öffnen.
2. Teilen-Symbol → **Zum Home-Bildschirm**.
3. Ab jetzt die App nur noch über das Symbol auf dem Home-Bildschirm öffnen.

## Was die App kann

- **Heute:** „Periode hat heute begonnen“ bzw. „Periode ist heute vorbei“ mit einem Tipp, dazu ein Countdown bis zur nächsten Periode und zum Eisprung.
- **Kalender:** Perioden, Vorhersage und fruchtbare Tage auf einen Blick.
- **Tagebuch:** Stärke der Blutung, Symptome, Stimmung und Notizen pro Tag.
- **Verlauf:** alle Perioden mit Länge und Zykluslänge, frühere Perioden lassen sich nachtragen.
- **Sicherung:** Daten als Datei speichern und auf einem neuen Handy wieder laden.
- **Code-Sperre:** optionaler 4-stelliger Code beim Öffnen.

## Wichtig

- **Regelmäßig eine Sicherung machen.** Löscht man die App vom Home-Bildschirm oder die Safari-Websitedaten, sind die Einträge weg.
- Die Vorhersage ist nur eine Schätzung und **kein Verhütungsmittel**.
- Die Code-Sperre schützt vor neugierigen Blicken, verschlüsselt die Daten aber nicht.

## Für Entwickler: Updates veröffentlichen

Nach Änderungen in `sw.js` die Zeile `const VERSION = 'zyklus-v…'` hochzählen und die Versionsnummer
in den Einstellungen (`index.html`, „Zyklus · Version …“) anpassen. Sonst bekommen installierte Apps das Update nicht sicher.
