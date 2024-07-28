import { useState } from "react";
import styles from "./navbar.module.css";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const[menuOpen,setmenuOpen] = useState(false);

    return (
        <nav className={styles.nav} id="home"> 

         <div className={styles.logo}>
            <a href="#">Portfolio</a>
         </div>
        <div className={styles.menu}>

        <div className={styles.menuBtn}
        onClick={() => setmenuOpen(!menuOpen)}
        >
        {menuOpen ? <RxCross2 /> : 
        <IoMdMenu /> }
        
        </div>
        
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setmenuOpen(false)}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            
         </div>
        </nav>

     );
}
 
export default Navbar;
