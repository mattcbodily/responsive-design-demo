# Responsive Design

Responsive design is the practice of making your websites layout "responsive" to changes in screen size. With many different screen sizes on today's devices, it's important to make sure your websites are able to look good on multiple sizes of screens. This demo code will lay the foundation of how to use media queries for responsive design, as well as demo how you can use responsive design with a couple popular tools: Bootstrap and TailwindCSS

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
