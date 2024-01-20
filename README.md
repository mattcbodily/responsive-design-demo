# Responsive Design

Responsive design is the practice of making your websites layout "responsive" to changes in screen size. With many different screen sizes on today's devices, it's important to make sure your websites are able to look good on multiple sizes of screens. This demo code will lay the foundation of how to use media queries for responsive design, as well as demo how you can use responsive design with a couple popular tools: Bootstrap and TailwindCSS

## Mobile first vs. Desktop first

There are commonly two approaches to responsive design:

* Mobile first. This is when you design your website for a mobile sized screen first and use responsive design to spread out and enhance the layout as the screen expands. This is arguable the most common approach to responsive design
* Desktop first. This is when you design your website for a desktop sized screen first and use responsive design to collapse the website content to fit a shrinking screen.

### Why is mobile first a more common approach?

1. Mobile phones are the most common way to view the internet today
2. It forces you to think about what is truly necessary for your websites layout, helping you keep things simple
3. It is generally easier to start small and expand out, as opposed to trying to shrink down large content.

## Running the demo code

1. `git clone` the repository to a folder on your computer
2. Open the demo code in VS code, or other editor of choice
3. Run `npm install` to install packages
4. Run `npm run dev` to run the development server and view in browser (by clicking the localhost link provided in the terminal)

## How to use the demo code

Since this demo code uses Vanilla CSS, Bootstrap, and TailwindCSS for various demos, you will need to comment and uncomment different imports to avoid styling collisions between the packages:

1. To view the Vanilla CSS demo:

* Uncomment the `reset.css` import in `src/main.jsx`, and make sure that the `bootstrap` and `index.css` imports are commented
* Uncomment the `VanillaLayout` component in `App.jsx` and make sure that the `BootstrapLayout` and `TailwindLayout` components are commented

2. To view the Bootstrap demo:

* Uncomment the `bootstrap` import in `src/main.jsx`, and make sure that the `reset.css` and `index.css` imports are commented
* Uncomment the `BootstrapLayout` component in `App.jsx` and make sure that the `VanillaLayout` and `TailwindLayout` components are commented

3. To view the TailwindCSS demo:

* Uncomment the `index.css` import in `src/main.jsx`, and make sure that the `reset.css` and `bootstrap` imports are commented
* Uncomment the `TailwindLayout` component in `App.jsx` and make sure that the `VanillaLayout` and `BootstrapLayout` components are commented

## Using these responsive design approaches in your own projects

### Vanilla CSS

No third party packages need to be installed to use vanilla CSS in your own projects. All you need to do is:

1. Create a `.css` file
2. Import that CSS file into the component you are applying styles to (NOTE: CSS file imports should include the path of the file only, ex: `import './styles.css'`)
3. Write your styles

### Bootstrap

To use Bootstrap in your React / Vite projects:

1. Run `npm install react-bootstrap bootstrap` in your projects root directory
2. Follow the [documentation](https://react-bootstrap.netlify.app/docs/getting-started/introduction/)

### TailwindCSS

To use Tailwind in your React / Vite projects:

1. Run the following in your projects root directory:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This will install packages and generate a `tailwind.config.js`

2. Replace the existing `content` field in your `tailwind.config.js` file with the following:

```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

This configures Tailwind to look at your `index.html` file, as well as files in your `src` folder to apply styles to

3. Replace the css in your `src/index.css` file with the following:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This applies Tailwind's utility classes, as well as provides a reset css for you so you don't have to provide your own

4. Follow the [documentation](https://tailwindcss.com/docs/installation) to learn what utility classes you can use for your project
