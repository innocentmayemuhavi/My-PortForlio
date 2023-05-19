import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import styles from "./index.module.css";
import Typewriter from "typewriter-effect";
const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.education} data-aos="fade-up">
      <table>
        <th>Year</th>
        <th>Level</th>
        <th>School</th>

        <tr>
          <td>2021 -</td>
          <td>
            {" "}
            University <span>BSCIT</span>
          </td>
          <td>Mount Kenya University</td>
        </tr>
        <tr>
          <td>2017 - 2020</td>
          <td>
            {" "}
            Secondary School <span>KCSE</span>
          </td>
          <td>
            Dr. Maurice Dang'ana Sec Sch <span>B Plain</span>
          </td>
        </tr>
        <tr>
          <td>2007 -2016</td>
          <td>
            {" "}
            Primary Sch <span>KCPE</span>
          </td>
          <td>
            Kamenon Pri Sch <span> 291 </span>
          </td>
        </tr>
      </table>

      <div>
        <h3>
          Vision :{" "}
          <Typewriter
            options={{
              strings: [
                "To Work On Projects That Will Have Direct Impact On Peoples Lives.",
              ],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </h3>
        <h3>
          Mission :{" "}
          <Typewriter
            options={{
              strings: ["Giving Back to society."],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </h3>
      </div>
    </div>
  );
};

export { Education };
