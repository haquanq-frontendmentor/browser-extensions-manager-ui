## Frontend Mentor - Browser Extensions Manager UI Solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<p>
  <a href="https://www.frontendmentor.io/solutions/dynamic-rendering-using-vanilla-jsts-mobile-first-responsive-hz3HLTQIHW">
    <img
      alt="Solution post"
      src="https://img.shields.io/badge/Frontendmentor-blue?label=Solution%20on"
    /></a>
  <a href="https://haquanq-frontendmentor.github.io/browser-extensions-manager-ui/">
    <img
      alt="Live demo"
      src="https://img.shields.io/badge/Demo-teal?label=Live"
    /></a>
  <a href="./LICENSE"
    ><img
      allt="MIT License"
      src="https://img.shields.io/badge/MIT-blue?label=license"
  /></a>
</p>

## Table of Contents

- [Project Overview](#sunrise-project-overview)
- [Tech Stack and Approach](#stars-tech-stack-and-approach)
- [Local Development](#leaves-local-development)
- [Deployment](#maple_leaf-deployment)

## :sunrise: Project Overview

### Challenge Requirements

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Status

Features

- [x] Remove, toggle extensions

Accessibility

- [x] Responsive accross different screen sizes
- [x] Interactive elements have clear focus indicator

### Preview (Desktop)

![](./docs/design/desktop-design-dark.jpg)

## :stars: Tech Stack and Approach

### Built With

- **HTML5** – Semantic structure
- **CSS Grid & Flexbox** – Layout
- **PostCSS** – Nested rules, custom media queries, future CSS features, minification
- **Stylelint** – CSS linting, code style consistency
- **TypeScript** - Interactivity and application logic
- **Vite** - Fast development server, production build and easy configuration

### Approach

- Mobile-first workflow for better performance on smaller devices
- Accessibility guided by [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)

## :leaves: Local Development

### Prerequisites

Install the following:

- Git (latest version)
- Node.js (latest LTS recommended)
- pnpm (latest version)

### Setup

```
git clone https://github.com/haquanq-frontendmentor/browser-extensions-manager-ui.git
cd browser-extensions-manager-ui
pnpm install
```

### Start Development Server

```
pnpm dev
```

## :maple_leaf: Deployment

Deployed to Github Pages via Github Actions (manually triggered).
