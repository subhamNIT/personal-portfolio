<h1 align="center"> Personal Portfolio </h1>

### Deployed link: https://subhamfolio.netlify.app/

## Table of Contents 📁

1. [Tech Stack](#tech-stack-)
2. [Implemented Sections](#implemented-sections-%EF%B8%8F)
3. [Use as a theme](#using-as-a-theme-)
4. [Contributing](#contributing-)
5. [Installation Guide](#installation-guide-)
6. [Sample Git Workflow](#sample-git-workflow)
7. [References & Inspirations](#references--inspirations-)
8. [Illustrations](#illustrations-%EF%B8%8F)
   <br>

## Tech Stack 🧰

<li>Frameworks</li>

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

<li>Libraries/Tools</li>
    
- [ViteJS](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons")
- [Framer](https://www.framer.com/)
- [React Lottie](https://www.npmjs.com/package/react-lottie)
- [Meraki UI](https://merakiui.com/components/)

<br/>

## Implemented Sections ☑️

- Hero Section
- Skills & Experience
- Education
- Projects
- Blogs
- Open Source Contributions
- Extra Curricular
- Contact Me

## Using as a theme ✨

### Code changes

Three main things have to be changed to customize it your way (please open an issue if you find more such instances):

1. Personal Information

- [/src/constants/index.js](https://github.com/subhamNIT/personal-portfolio/blob/main/src/constants/index.js) contains all the personal information one needs to change. Each website section is written as a JavaScript object and is pretty intuitive to change.

- Icons
  - Whenever you want to use an icon, you'll have to make sure that the icon is imported.
  - Head to [https://react-icons.github.io/react-icons/search](https://react-icons.github.io/react-icons/search) and search for the desired icon. (Eg: SiReact for ReactJS)
  - Note the package it belongs to (Eg: 'Si' here)
  - Import the icon into [`/src/constants/index.js`](https://github.com/subhamNIT/personal-portfolio/blob/main/src/constants/index.js) (Eg: `import { ... SiReact, } from "react-icons/si";` here)

2. Website title and icon

- Go to [`index.html`](https://github.com/subhamNIT/personal-portfolio/blob/main/index.html) and change the [`title`](https://github.com/subhamNIT/personal-portfolio/blob/main/index.html#L7") to your name.
- Also, change the link to the title [icon](https://github.com/subhamNIT/personal-portfolio/blob/main/index.html#L5)

3. Assets

- Add any assets (images) to the [`assets`](https://github.com/subhamNIT/personal-portfolio/tree/main/src/assets) folder.
- Import the asset and export it using the[`/src/assets/index.js`](https://github.com/subhamNIT/personal-portfolio/blob/main/src/assets/index.js) file.

### Deployment

You can use [Netlify](https://docs.netlify.com/) to deploy your site. Follow the instructions in their docs to do so.

## Contributing 🏆

We welcome contributions in the form of pull requests, issues and documentation. Feel free to help us in any way! ❤️

- Please read and abide by our [Code of Conduct](https://github.com/subhamNIT/personal-portfolio/blob/main/CODE_OF_CONDUCT.md);
our community aspires to be a respectful place both during online and in-person interactions.
- Please follow the [installation guide](https://github.com/subhamNIT/personal-portfolio/blob/main/readme.md#installation-guide) and the [sample git workflow](https://github.com/subhamNIT/personal-portfolio/blob/main/readme.md#sample-git-workflow) to contribute.

## Installation Guide 🧑‍💻

### Using Git and Github

- [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repo
- [Clone](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#cloning-a-fork) the forked repository
- Enter the new `portfolio` directory with `cd portfolio`
- Set the upstream remote to the original repository url so that git knows where to fetch updates from in future: `git remote add upstream https://github.com/subhamNIT/personal-portfolio.git`

### Install required packages

- `npm install`

### Run server

- `npm run dev`

<br/>

## Build

- `npm run build`

<br/>