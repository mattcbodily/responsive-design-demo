/*
  Component libraries, such as Bootstrap, generally come with the advantage of being responsive by default. This means that there is generally less work to do to make your website responsive when you are using a component library, IF you use it the way they tell you to in the documentation. It is important to note that not all component libraries support responsive design, so when choosing a component library for your website, make sure to read the documentation to determine if it's right for your project.

  Even when a component library is responsive by default, you may need to extend the styles of the components to match your projects designs. Many component libraries let you extend their components styles by passing in your own CSS classes. Bootstrap (and some others) also will provide you with `utility classes` that you can pass into components (and even just plain elements that you write) to extend their styles.
*/

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { ScreenTooSmall } from "../../components/ScreenTooSmall/ScreenTooSmall"

import heroImage from "../../assets/hero-image.webp"

import "./BootstrapLayout.css"

export const BootstrapLayout = () => {
  return (
    <div className='bootstrap-layout-wrapper'>
      <Navbar
        expand='md'
        className='px-4 d-flex justify-content-between bg-primary'
        variant='dark'
      >
        <h2 className='text-white'>Handsome Squidward</h2>
        <Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='' />
          <Navbar.Collapse>
            <Nav.Link className='text-white'>Blog</Nav.Link>
            <Nav.Link className='text-white'>About</Nav.Link>
            <Nav.Link className='text-white'>Contact</Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
      <Container className='h-100 py-4'>
        <div className='d-flex flex-column-reverse align-items-center flex-lg-row justify-content-lg-between'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis justo vitae nunc porttitor tincidunt. Ut ut lectus nulla.
            In maximus commodo orci, non tristique augue sollicitudin nec.
            Aenean velit massa, laoreet condimentum lorem in, commodo molestie
            dui. Nulla cursus nibh quis ipsum facilisis congue. Duis a convallis
            felis, eu malesuada ante. Phasellus non purus nisl. Sed lacinia
            tincidunt nibh, in porta mi convallis et. Maecenas scelerisque a
            urna eget imperdiet. Vivamus sem ligula, convallis eget quam
            elementum, dignissim egestas urna.
          </p>
          <img alt='hero image' className='hero-image' src={heroImage} />
        </div>
      </Container>
      <footer className='bg-primary text-white'>
        <p>©2024 Handsome Squidward</p>
      </footer>
      <ScreenTooSmall />
    </div>
  )
}
