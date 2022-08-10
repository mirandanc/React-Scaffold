import React from 'react';
import classNames from 'classnames';
import { NavLink } from '../../Navbar/NavbarElements';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <NavLink to="#0">Contato</NavLink>
        </li>
        <li>
          <NavLink to="hero" spy={true} offset={-400} duration={500}>Pagina Principal</NavLink>
        </li>
        <li>
          <NavLink to="#0">Support</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
