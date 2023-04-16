import { Route, Routes} from 'react-router-dom';

import Home from '../components/Home/Home';
import About from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact';

const WebsiteRouter = () => {

  return (
    <Routes>
        <Route path="#" element={<Home/>} />
        <Route path="#about" element={<About/>} />
        <Route path="#skills" element={<Skills/>} />
        <Route path="#portfolio" element={<Portfolio/>} />
        <Route path="#contact" element={<Contact/>} />
    </Routes>
  );
};

export default WebsiteRouter;
