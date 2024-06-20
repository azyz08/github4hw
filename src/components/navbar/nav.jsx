import Btn from '../btn'
import './nav.scss'
export function Navbar() {
    return (
        <>
            <div className="nav">
                <input type="checkbox" id='m' />
                <ul>
                    <div className="ulBox">
                        <label htmlFor="m"><i class="fa-solid fa-xmark"></i></label>
                        <p>.</p>
                    </div>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <h1>Landie</h1>
                <Btn />
                <label htmlFor="m"><i class="fa-solid fa-bars"></i></label>
            </div>
        </>
    )
}