import './App.scss';
import { Routes, Route } from 'react-router-dom';
import  Layout  from './components/Layout';
import  Home  from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="portfolio" index element={<Portfolio />} />
            <Route path="contact" index element={<Contact />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
