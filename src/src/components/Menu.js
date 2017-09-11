import { Link } from 'react-router'



export const Menu = () =>
    <nav className='menu'>
        <Link to='/' className='menu a'>Set Plateau</Link>
        <Link to='/plateu' className='menu a'>Plateau</Link>
    </nav>
