#!/bin/bash

mkdir -p src/components/{AboutMe,Contact,Home,Portfolio,Skills,Navigation,Footer}
mkdir -p src/animations
mkdir -p src/assets/images
mkdir -p src/data
mkdir -p src/i18n
mkdir -p src/routes

touch src/components/AboutMe/{AboutMe.tsx,AboutMe.styles.ts}
touch src/components/Contact/{Contact.tsx,Contact.styles.ts}
touch src/components/Home/{Home.tsx,Home.styles.ts}
touch src/components/Portfolio/{Portfolio.tsx,Portfolio.styles.ts}
touch src/components/Skills/{Skills.tsx,Skills.styles.ts}
touch src/components/Navigation/{Navigation.tsx,Navigation.styles.ts}
touch src/components/Footer/{Footer.tsx,Footer.styles.ts}

touch src/animations/index.ts
touch src/data/{projects.json,skills.json}
touch src/i18n/{index.ts,en.json,de.json,fr.json,es.json}
touch src/routes/index.ts

