import './App.scss'
import Btn from './components/btn'

function App() {

  return (
    <>
      <h1>Abduxabir</h1>



      <div className="light">
        <img src="/01.png" alt="" />
        <div className="text">
          <h1>Light, Fast & Powerful</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum  sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </div>

      <div className="light">
        <img src="/02.png" alt="" />
        <div className="text">
          <h1>Light, Fast & Powerful</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum  sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </div>

      <div className="light">
        <img src="/03.png" alt="" />
        <div className="text">
          <h1>Light, Fast & Powerful</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum  sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <Btn />
        </div>
      </div>

      <div className="price">
        <span>
          <h1>A Price To Suit Everyone</h1>
          <p className='p1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        </span>
        <span>
          <h1 className='h12'>$40</h1>
          <p>UI Design Kit</p>
        </span>
        <span>
          <h4>See, One price. Simple.</h4>
          <Btn />
        </span>
      </div>

      <div className="footer">
        <div className="ft">
          <p>©2020 Yourcompany</p>
          <h1>Landie</h1>
          <Btn />
        </div>

        <div className="fb ft">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>

          <div className="icons">
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
