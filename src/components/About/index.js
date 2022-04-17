import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faPython, faHtml5, faCss3, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  //set initial value for class
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
      return setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 3000)
  }, [])


  return (
      <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        //1.5s delay
                        index={15}
                    />
                </h1>
                <p>
                    I am an ambitious Jr Full Stack Developer looking for opportunities
                    to test myself and solve important problems using the most effecient 
                    technology for the job.
                </p>
                <p>
                    {' '}
                    I am curious and enjoy completing objectives, I will continue to iterate
                    until the desired outcome is met, this is a result of my positive approach
                    to complex problems.
                </p>
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
  )
}

export default About;