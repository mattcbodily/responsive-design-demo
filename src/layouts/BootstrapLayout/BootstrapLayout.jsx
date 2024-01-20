import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { ScreenTooSmall } from "../../components/ScreenTooSmall/ScreenTooSmall"

import heroImage from "../../assets/hero-image.webp"

import "./BootstrapLayout.css"
import { NavDropdown } from "react-bootstrap"

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
