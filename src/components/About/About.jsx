import { PiCursorClickFill } from "react-icons/pi";
import { SiVorondesign } from "react-icons/si";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
    return ( 
        <section className={styles.container} id="about">
         
        <div className={styles.subContainer}>
          
        <h2 className={styles.title} >About</h2>
         <div className={styles.content}>
         
         <img className={styles.aboutImg} src="./about.png" />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <PiCursorClickFill className={styles.logo}/>
                <div>
                <h3>Frontend Developement</h3>
                <p>I’m a front-end developer with experience
                in building responsive and optimized sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
            <img className={styles.logo} src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div>
                <h3>Backend Developement</h3>
                <p>
                Have the skills in node js and express js to work in backend
                </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <SiVorondesign className={styles.logo} />
                <div>
                <h3>Generative Ai</h3>
                <p>I am aware of Ai tools and can do  hard tasks in very less time with help of Ai tools.

                </p>
                </div>
            </li>
        </ul>
         </div>

        </div>
        </section>
     );
}
 
export default About;