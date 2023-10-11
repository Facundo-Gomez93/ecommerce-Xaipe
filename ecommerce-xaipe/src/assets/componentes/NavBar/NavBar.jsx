import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../../Context/Context';
import "./NavBar.css";


function NavBar() {
  const {cantidadTotal} = useCartContext()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/' >
          <img src="/apple-touch-icon.png" alt="ícono Xaipe" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='fs-4'>¿Quienes somos?</Nav.Link>
            <Link className='nav-link fs-4' to = '/'>Productos</Link>
            <NavDropdown title="Categorías" className='fs-4' id="basic-nav-dropdown">
              <Link className='nav-link' to= '/category/Alfajor' >Alfajores</Link>
              <Link className='nav-link' to= '/category/Pan' >
                Pan
              </Link>
              <Link className='nav-link' to= '/category/Tarta'>Tartas</Link>

            </NavDropdown>
            <Nav>
              <Link to='/cart'> 
              { cantidadTotal() !== 0 && cantidadTotal()} <CartWidget/>
              </Link>
            </Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;