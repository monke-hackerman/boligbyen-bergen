# Boligbyen Bergen

Statisk nettsted med HTML, CSS, JavaScript og bilder. Ingen byggekommando er nødvendig.

## Deploy til Cloudflare Workers

`wrangler.jsonc` publiserer nettstedet med Workers Static Assets. Forsiden `/`
viser `index.html`. Lenker med `.html` videresendes automatisk til adresser uten
filendelsen. `.assetsignore` utelater konfigurasjon og lokale filer.

### Fra GitHub

1. Commit og push oppsettet til GitHub-repositoriet sammen med nettstedet.
2. I Cloudflare: Workers & Pages → Create application → importer et eksisterende Git-repositorium.
3. Velg repositoriet og grenen du vil publisere.
4. Bruk disse innstillingene:
   - Project/Worker name: `boligbyen-bergen`
   - Root directory: la stå tomt (filene ligger i roten av dette repositoriet)
   - Build command: la stå tomt
   - Deploy command: `npx wrangler deploy`
5. Klikk Deploy. Cloudflare viser nettstedets `workers.dev`-adresse når det er ferdig.

Hvis repositoriet i stedet inneholder en overordnet mappe med `boligbyen-bergen/`,
sett Root directory til `boligbyen-bergen`.

### Fra terminalen

Kjør fra mappen som inneholder `wrangler.jsonc` (krever Node.js/npm):

```sh
npx wrangler login
npx wrangler deploy
```

For lokal forhåndsvisning: `npx wrangler dev`.

Dokumentasjon: https://developers.cloudflare.com/workers/static-assets/
