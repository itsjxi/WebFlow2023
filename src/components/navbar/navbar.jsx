import "./navbar.css"
import { navbarData } from "./data";


const Navbar = () =>{
  return (
    <div className="nav-bar">
      <div className="nav-container">
      <a href="/" className="nav-logo">

      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.3352 3.3C12.3352 4.05939 11.717 4.675 10.9544 4.675C10.1918 4.675 9.57367 4.05939 9.57367 3.3C9.57367 2.54061 10.1918 1.925 10.9544 1.925C11.717 1.925 12.3352 2.54061 12.3352 3.3ZM11.485 6.55793C11.3123 6.58562 11.135 6.60001 10.9544 6.60001C10.7965 6.60001 10.6411 6.589 10.489 6.56772L7.46038 12.5118C8.5174 11.9562 9.72198 11.6416 11.0003 11.6416C12.2668 11.6416 13.4609 11.9503 14.5108 12.4964L11.485 6.55793ZM16.0654 16.6835C15.6325 17.2411 15.375 17.9406 15.375 18.6999C15.375 20.5224 16.8586 21.9999 18.6888 21.9999C20.5189 21.9999 22.0026 20.5224 22.0026 18.6999C22.0026 16.8774 20.5189 15.3999 18.6888 15.3999C18.515 15.3999 18.3443 15.4132 18.1778 15.4389L13.2198 5.70843C13.8651 5.10632 14.2682 4.25004 14.2682 3.3C14.2682 1.47746 12.7846 0 10.9544 0C9.12426 0 7.64062 1.47746 7.64062 3.3C7.64062 4.27334 8.06378 5.14825 8.73688 5.75226L3.80298 15.4356C3.64334 15.4121 3.47999 15.3999 3.31379 15.3999C1.48363 15.3999 0 16.8773 0 18.6999C0 20.5224 1.48363 21.9999 3.31379 21.9999C5.14394 21.9999 6.62757 20.5224 6.62757 18.6999C6.62757 17.9399 6.36957 17.2399 5.93604 16.682C6.86553 14.8347 8.78423 13.5666 11.0003 13.5666C13.217 13.5666 15.1362 14.8354 16.0654 16.6835ZM3.31379 20.0749C4.07635 20.0749 4.69453 19.4593 4.69453 18.6999C4.69453 17.9405 4.07635 17.3249 3.31379 17.3249C2.55122 17.3249 1.93304 17.9405 1.93304 18.6999C1.93304 19.4593 2.55122 20.0749 3.31379 20.0749ZM20.0695 18.6999C20.0695 19.4593 19.4513 20.0749 18.6888 20.0749C17.9262 20.0749 17.308 19.4593 17.308 18.6999C17.308 17.9405 17.9262 17.3249 18.6888 17.3249C19.4513 17.3249 20.0695 17.9405 20.0695 18.6999Z" fill="currentColor"></path>
      </svg>
     
     
      
      <div className="logo">
        <img src="/images/logo.png"/>
      </div>
      
      </a>
      <nav className="nav-menu">

        <div className="nav-link-container">
          {
            navbarData.map((item,index) =>{
              return (
                <div className="nav-link" key={index} id={index}>{item.label}</div>
              )
            })
          }
        </div>

        <div className="nav-cta-container">
          <a href="" className="free-trail free-trial-btn">Start free 14-day trial</a>
          <a href="" className="schedule  product-tour-btn">Schedule demo</a>
        </div>

      </nav>
      <a href="/" className="nav-menu-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </a>
      </div>
    </div>
  )
}

export default Navbar;