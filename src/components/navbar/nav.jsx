import Btn from '../btn'
import './nav.scss'
export function Navbar(){
    return(
        <>
        <div className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1>Landie</h1>
            <Btn/>
        </div>
        </>
    )
}