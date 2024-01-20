/*
  TailwindCSS is a utility-first CSS framework. It's important to note that Tailwind is NOT a component library, but rather a different way to write your CSS. Tailwind provides you with `utility` classes that have pre-defined styles, so that you don't have to write your CSS in a CSS file. These classes are applied inline to elements and can do anything that vanilla CSS can do, with the benefit of more predictable specificity.

  Because Tailwind is capable of anything vanilla CSS is, it is also capable of responsive design. Tailwind does this through built in `screen` breakpoints (these can be customized, but come with default values). When applying a style to a specific breakpoint, it is prefaced with the screensize name first (ex: `sm:flex` would apply `display: flex` to any screen larger than 640px).
*/

import { ScreenTooSmall } from "../../components/ScreenTooSmall/ScreenTooSmall"

import heroImage from "../../assets/hero-image.webp"

import '../../index.css'

export const TailwindLayout = () => {
  return (
    <>
      <div className='hidden font-sans tiny:block'>
        <header className='h-20 p-4 flex items-center justify-between bg-violet-700'>
          <h2 className='text-2xl text-white tracking-wide'>Handsome Squidward</h2>
          <button className='text-white sm:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  width="24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <nav className='hidden text-white sm:flex sm:gap-6'>
            <span>Blog</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </header>
        <main className='h-screen p-4 flex flex-col-reverse items-center justify-end md:flex-row'>
          <div>
            <p className='my-6 text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis justo vitae nunc porttitor tincidunt. Ut ut lectus nulla.
              In maximus commodo orci, non tristique augue sollicitudin nec.
              Aenean velit massa, laoreet condimentum lorem in, commodo molestie
              dui. Nulla cursus nibh quis ipsum facilisis congue. Duis a
              convallis felis, eu malesuada ante. Phasellus non purus nisl. Sed
              lacinia tincidunt nibh, in porta mi convallis et. Maecenas
              scelerisque a urna eget imperdiet. Vivamus sem ligula, convallis
              eget quam elementum, dignissim egestas urna.
            </p>
          </div>
          <img 
            alt='hero image' 
            className='w-[320px] rounded-lg shadow-lg sm:w-[450px] md:w-[550px] md:ml-8' 
            src={heroImage} 
          />
        </main>
        <footer className='h-20 bg-violet-700'>
          <p className='text-white'>©2024 Handsome Squidward</p>
        </footer>
      </div>
      <ScreenTooSmall />
    </>
  )
}