import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faPython, faHtml5, faCss3, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  //arrays for animated words
  const nameArray = [' ', 'E','m', 'm', 'a', 'n', 'u', 'e', 'l']
  const jobArray = ['a', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r','.']

  useEffect(() => {
      return setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

  return (
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                index={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={22}/>
                </h1>
                <h2>Software Engineer</h2>
            </div>            
            <div className="resources">
                <div className="projects">
                    <h1>PORTFOLIO</h1>
                    <h2>Have a web application you need developed?</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    <Link to="/portfolio" className='flat-button'>PROJECTS</Link>
                </div>
                <div className="blog">
                    <h1>BLOG</h1>
                    <h2>I sometimes blog about things that interest me.</h2>
                    <Link to="/blog" className='flat-button'>BLOG</Link>    
                </div>
            </div>
            <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faPython} color="#5ED4F4"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                        </div>
                    </div>
            </div>
        </div>
        <Loader type="pacman" />
      </>
  );
}

export default Home