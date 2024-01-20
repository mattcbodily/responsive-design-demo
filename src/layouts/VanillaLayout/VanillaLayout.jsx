import { ScreenTooSmall } from "../../components/ScreenTooSmall/ScreenTooSmall"

import heroImage from "../../assets/hero-image.webp"

import "./VanillaLayout.css"

export const VanillaLayout = () => {
  return (
    <>
      <div className='vanilla-layout-wrapper'>
        <header>
          <h2>Handsome Squidward</h2>
          <button className='hamburger-menu-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  width="24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <nav>
            <span>Blog</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </header>
        <main className='hero-flex'>
          <div className='hero-text'>
            <p>
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
            className='hero-image' 
            src={heroImage} 
          />
        </main>
        <footer>
          <p>©2024 Handsome Squidward</p>
        </footer>
      </div>
      <ScreenTooSmall />
    </>
  )
}
