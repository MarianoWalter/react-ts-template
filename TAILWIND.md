# Installing Tailwind CSS in a Vite project

[Link to docs](https://tailwindcss.com/docs/guides/vite)

## Steps I followed to install Tailwind CSS:

1. Install the dependencies by running `npm install -D tailwindcss postcss autoprefixer`

2. Initialize the configuration by running `npx tailwindcss init -p`

3. Configure the template paths in [tailwind.config.js](./tailwind.config.js) by adding:

```json
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
]
```

4. Add the Tailwind directives to the main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install Tailwind extension for VS Code

Install the extension [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
