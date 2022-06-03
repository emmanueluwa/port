import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
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

           
        </div>
        <Loader type="pacman" />
      </>
  )
}

export default About;