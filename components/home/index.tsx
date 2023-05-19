import { Introduction } from "../Introduction";
import { Education } from "../Education";
import {Work} from '../Work'
import './index.css'
const Home = () => {
  return (
    <main className="main">
     <div className="page"> <Introduction />
      <Education />
      <Work/></div>
    </main>
  );
};

export default Home;
