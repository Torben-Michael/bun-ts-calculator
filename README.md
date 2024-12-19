# bun-ts-calculator

## Schritte zur Erstellung des Projekts:

### 1. Git-Repository erstellen

```bash
# Repository auf GitHub erstellen
# Klone das Repository lokal auf deinem Computer
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Bun im project initialisieren

```bash
bun init
bun build index.ts --outdir=dist
(erzeugt den Ordner "dist" mit der Datei index.js)
bun build index.ts --outdir=dist --watch
(kompiliert automatisch nach dem speichern)
```

### 3. HTML-Struktur erstellen

```bash
Script ganz unten im Body einfügen:
<script src="./dist/index.js"></script>

```

### 4. Mit CSS stylen

### 5. Funktionen in Typescript schreiben

### 6. DOM
