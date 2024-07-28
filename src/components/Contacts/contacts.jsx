import styles from "./contacts.module.css"
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Contacts = () => {
    return ( 
        <footer className={styles.container} id="contact">
           <div className={styles.text}>
              <h2>Contact</h2>
              <p>Feel free to reach out!</p>
           </div>
           <ul className={styles.links}>
            <li>
            <IoMdMail className={styles.img}/>
            <a href="mailto:work.rajendrajena@gmail.com">work.rajendrajena@gmail.com</a>
            </li>
            <li>
            <FaLinkedin className={styles.img}/>
            <a href="https://www.linkedin.com/in/me-rajendra-jena/">linkedin.com/in/me-rajendra-jena</a>
            </li>
            <li>
            <FaGithub className={styles.img}/>
            <a href="https://github.com/rajendrajena09">github.com/rajendrajena09</a>
            </li>
           </ul>
           <a className={styles.up} href="#home"> 
              <FaArrowUp />
           </a>
        </footer>
     );
}
 
export default Contacts;
