import { React } from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

const links = [
  {
    to: '/cursor.edu-hw-react-styled/',
    label: 'Home Page'
  },
  {
    to: '/cursor.edu-hw-react-styled/sign-in',
    label: 'Sign In'
  },
  {
    to: '/cursor.edu-hw-react-styled/sign-up',
    label: 'Sign Up'
  }
];

export const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__menu">
      {links.map(link => (
        <li className="navigation__item" key={link.to}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
)