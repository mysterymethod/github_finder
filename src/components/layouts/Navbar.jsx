import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  return (
    <nav className='nav'>
      <div className="logo-box">
        <FaGithub className='logo-box__img' size={40} />
        <Link className='logo-box__title' to='/'>{title}</Link>
      </div>

      <div className="nav_buttons">
        <Link to='/' className='nav_buttons__home'>home</Link>
        <Link to='/about' className='nav_buttons__about'>about</Link>
      </div>
    </nav>

  )

}

Navbar.defaultProps = {
  title: 'Github Finder'
}

export default Navbar