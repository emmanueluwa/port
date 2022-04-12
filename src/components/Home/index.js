import LogoTitle from '../../assets/images/logo_f.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  //arrays for animated words
  const nameArray = ['m', 'm', 'a', 'n', 'u', 'e', 'l']
  const jobArray = ['f', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
      return setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

  return (
      <div className="container home-page">
          <div className="text-zone">
              <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br /> 
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters letterClass={letterClass}
              strArray={nameArray}
              index={15}/>
              <br />
              <AnimatedLetters letterClass={letterClass}
              strArray={jobArray}
              index={22}/>
              </h1>
              <h2>Full Stack Developer</h2>
              <Link to="/contact" className='flat-button'>CONTACT ME</Link>
          </div>
          <Logo />
      </div>
  );
}

export default Home