import styles from "./index.module.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const referes = [
    {
      id: 1,
      name: "Maye Edwin",
      tel: "0713850804",
    },
    {
      id: 2,
      name: "Kelvin Mwangi",
      tel: "0725071076",
    },
  ];
  return (
    <>
      <div className={styles.work} data-aos="fade-right">
        <table>
          <th>Company</th>
          <th>Responsibility</th>
          <tr>
            <td>Talco Contactors</td>
            <td>Front End Engineer</td>
          </tr>
          <tr>
            <td>Saboja</td>
            <td>Front End Engineer</td>
          </tr>
        </table>
      </div>

      <div className={styles.skills} data-aos="flip-up">
        <h1>Skills</h1>

        <h3>
          Great Understanding in <b>React js,</b> <b>Svelte, </b>
          <b>Typescript,</b> <b>Angular,</b> <b>React Redux, </b>{" "}
          <b>Javascript, </b> <b>HTML,</b> <b>Css,</b> <b>Next js,</b>{" "}
          <b>Express,</b> <b>node js,</b> <b>veu</b>{" "}
        </h3>
        <h3>Team Player</h3>
        <h3>Problem Solver</h3>
        <h3>Anatlytic skill</h3>
      </div>
      <div className={styles.p_work} data-aos="fade-up">
        <h1>Personal Work</h1>
        <h3>E-commerce App:</h3>{" "}
        <a target="_blank" href="https://maye-a3160.web.app/">
          Lc Waikiki
        </a>
        <h3>E-Travelling Agency App:</h3>{" "}
        <a target="_blank" href="https://superpass-fdeeb.web.app/">
          Superpass Travells
        </a>
        <h3>E-commerce App:</h3>{" "}
        <a target="_blank" href="https://deploy-revision.web.app/">
          Superpass E Market
        </a>
        <h3>Git:</h3>{" "}
        <a target="_blank" href="https://github.com/innocentmayemuhavi">
          Github
        </a>
      </div>

      <div className={styles.references} data-aos="fade-up">
        {referes.map((data) => (
          <div key={data.id} className={styles.refcard}>
            <p> Name:{data.name}</p>
            <p>Tel: {data.tel}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export { Work };
