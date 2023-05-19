import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./index.module.css";
const Introduction = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(./images/IMG-20230505-WA0006.jpg)`,
        }}
        className={styles.introduction_page}
        data-aos="slide-left"
      >
        <div className={styles.intro_sec_1}>
         <h3> <Typewriter
            options={{
              strings: ["Hi", "Welcome", "To", "My", "Portforlio ..."],
              autoStart: true,
              loop: true,
            }}
          /></h3>
        </div>
        <div className={styles.intro_sec_2}>
          <h3>
            Am a <span></span>
            <Typewriter
              options={{
                strings: [
                  " Front-End Engineer",
                  " Software Developer",
                  " Ui-Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <h3>
            I Have Great Understanding Of <span></span>
            <Typewriter
              options={{
                strings: [
                  "React-js",
                  "React-Redux",
                  "Typescript",
                  "Angular",
                  "Next js",
                  "Express",
                  "HTML",
                  "Javascript",
                  "Css",
                  'vue',
                  'node js',

                ],
              
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
      <div className={styles.personal_details} data-aos='fade-up'>
        <h1>Personal Details</h1>
        <h2>Name:Muhavi Innocent Maye</h2>
        <h2>
          Date Of Birth: 10<sup>th</sup> July 2003
        </h2>
        <h2>Phone Number:0796331359</h2>
        <h2>Email:innocentmuhavimaye@gmail.com</h2>
        <h2>Religion:Christian</h2>
        <h2>Language:Kiswahili,English</h2>
      </div>
    </>
  );
};

export { Introduction };
