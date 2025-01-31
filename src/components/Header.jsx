import React from 'react';
import { Navbar } from 'flowbite-react';

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Viviendo con CUCI</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Cursos</Navbar.Link>
        <Navbar.Link href="#">E-Books</Navbar.Link>
        <Navbar.Link href="#">Merch</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
