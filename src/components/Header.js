import {Link} from "react-router-dom"
import '../styles/index.scss'

function Header(props) {

    return (
        <header>
            <nav className="navbar">
            <h1>My Portfolio Page</h1>
                <Link to ="/">
                    <div>HOME</div>
                </Link>
                <Link to ="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to ="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header