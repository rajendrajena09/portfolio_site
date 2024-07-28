import styles from "./Hero.module.css";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className={styles.container} >
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Rajendra</h1>
        <p className={styles.description}>
          I’m a full-stack developer now working with React and
          NodeJS and ExpressJs Reach out if you’d like to learn more!
        </p>
        <div className={styles.buttons}>
        <a className={styles.contactBtn} href="mailto:work.rajendrajena@gmail.com">Contact Me</a>
        <a className={styles.contactBtn} href="./resume.pdf" download>{<><FaDownload className={styles.download}/>Resume</>}</a>
        </div>
      </div>
      <img className={styles.heroimg} src="./my_profile.png" alt="My_image" />
    
    <div className={styles.topBlur}  />
    <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
