# Convenzioni di sviluppo

- Ogni richiesta si sviluppa su un branch **tecnico temporaneo** da `main`, presentato con una pull request verso `main`. Non mantenere branch per singole richieste dopo il merge.
- Terminata la verifica, fare merge e chiudere la PR, quindi eliminare il branch. Se la richiesta è annullata, chiudere senza merge ed eliminare il branch quando non serve più.
- Mantenere `README.md` sintetico; tutte le note sulle versioni e le modifiche vanno solo in `CHANGELOG.md` e la documentazione tecnica in altri file.
- Qualora esista `production`, usare PR dedicate per promuovere i soli file di runtime previsti, senza merge indiscriminati. Non includere dati riservati o introdurre nuovi deploy automatici senza richiesta.
- Abilitare la voce GitHub **Settings → General → Pull Requests → Automatically delete head branches**.
