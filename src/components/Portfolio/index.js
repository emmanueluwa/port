import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import design from '../../assets/images/design.jpg'
import akita from '../../assets/images/akita.jpg'
import { Link } from 'react-router-dom'


const About = () => {
  //set initial value for class
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
      return setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 3000)
  }, [])


  return (
      <body>
        <div className='container portfolio-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        //1.5s delay
                        index={15}
                    />
                </h1>
                <p>
                    I am Software Engineer looking for opportunities
                    to test myself and solve important problems using the most efficient 
                    technology for the job.
                </p>
                <p>
                    {' '}
                </p>
            </div>
            <div className="project-container">
                <div className="project-card">
                    <Link to=''>
                        <img className="project-image" src={akita} alt='first project'/>
                        <h3>Project 1</h3>
                    </Link>
                </div>
                <div className="project-card">
                    <Link to=''>
                        <img className="project-image" src={design} alt='second project'/>
                        <h3>Project 2</h3>
                    </Link>
                </div>
            </div>

           
        </div>
        <Loader type="pacman" />
      </body>

  )
}

export default About;