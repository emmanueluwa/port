import './index.scss';
import LogoF from '../../../assets/images/fulodev_logo.png'
import { useRef, useEffect } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  
    //three elements will be hidden
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    //applying animation, empty array so it only executes once
    useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)

      //animation called in a sequence by timeline function
      gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity:1
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      )
    },[])

    return (
        <div className='logo-container' ref={bgRef}>
            <img 
              className='solid-logo'
              ref={solidLogoRef}
              src={LogoF} 
              alt="F"
            />
            <svg 
              width="83" 
              height="173" 
              viewBox="0 0 83 173" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                  className="svg-container"
                  transform="translate(0 457) scale(.1 -.1)"
                  fill="none" 
              >
              <path 
                ref={outlineLogoRef}  
                d="M76.9347 49.7273V75.4091H0.852273V49.7273H76.9347ZM18.2678 173V40.8189C18.2678 31.8838 20.0066 24.4735 23.4844 18.5881C27.0156 12.7026 31.831 8.28858 37.9304 5.34587C44.0298 2.40316 50.9586 0.931807 58.7166 0.931807C63.96 0.931807 68.7486 1.33309 73.0824 2.13565C77.4697 2.93821 80.7334 3.66051 82.8736 4.30255L76.7742 29.9844C75.4366 29.5563 73.7779 29.1551 71.7983 28.7805C69.8722 28.406 67.8925 28.2188 65.8594 28.2188C60.83 28.2188 57.3255 29.3958 55.3459 31.75C53.3662 34.0507 52.3764 37.2876 52.3764 41.4609V173H18.2678Z" 
              />
              </g>
            </svg>


        </div>
    )
}

export default Logo;