import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/home">home</Link>
                     <Link to="/about">about</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;