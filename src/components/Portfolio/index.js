import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import design from '../../assets/images/design.jpg'
import akita from '../../assets/images/akita.jpg'


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
                    <a rel="noopener noreferrer" target="_blank" href='https://pets.fulodev.com/'>
                        <img className="project-image" src={akita} alt='first project'/>
                        <div className='content'>
                            <h3>Petful</h3>
                        </div>
                    </a>
                </div>
                <div className="project-card">
                    <a rel="noopener noreferrer" target="_blank" href='https://www.portfolio.fulodev.com/'>
                        <img className="project-image" src={design} alt='second project'/>
                        <div className='content'>
                            <h3>Figma Design</h3>
                        </div>
                    </a>
                </div>
            </div>

           
        </div>
        <Loader type="pacman" />
      </body>

  )
}

export default About;