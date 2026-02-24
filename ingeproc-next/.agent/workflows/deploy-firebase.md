---
description: Cómo desplegar la web de INGEPROC a Firebase Hosting
---

# Deploy a Firebase Hosting

// turbo-all

## Pasos para desplegar:

1. Hacer login en Firebase (solo la primera vez):
```
npx firebase-tools login
```

2. Generar el build estático de producción:
```
npx next build
```

3. Desplegar a Firebase Hosting:
```
npx firebase-tools deploy --only hosting
```

La web estará disponible en: **https://ingeproc-55b06.web.app**

## Notas importantes:
- El build genera la carpeta `out/` con todos los archivos estáticos.
- Firebase Hosting está configurado en `firebase.json` para servir desde `out/`.
- Si agregas nuevos servicios o proyectos en `constants/`, recuerda hacer `npx next build` antes de deploar.
