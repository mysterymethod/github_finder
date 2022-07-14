import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

function NotFound() {
  return (
    <div className="notFound">
      <h1 className='notFound__header'>Oops!</h1>
      <h2 className='notFound__subHeader'>404 - Page not found!</h2>
      <Link className='notFound__link' to='/'> <FaHome />&nbsp; back to home</Link>
    </div>
  )
}

export default NotFound