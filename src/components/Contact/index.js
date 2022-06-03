import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  //arrays for animated words

  useEffect(() => {
      return setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)
  }, [])


  return (
    <>
        <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                      <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        index={15}
                      />
                    </h1>
                    <p>
                      I am interested in both full-time and freelance opportunities.
                      If you have any other requests or questions, please do not hesitate 
                      to reach out to me by email at: emmanuel@fulodev.com

                      Thank you!
                    </p>
                </div>
        </div>
        <Loader type="pacman"/>
        
    </>
  )
}

export default Contact;