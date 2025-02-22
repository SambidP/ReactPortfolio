import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhp,
  faWordpressSimple,
  faGithub,
  faLaravel,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
        I am a Software Engineer with a strong foundation in JavaScript, React, Laravel, and AI-driven technologies. My expertise lies in developing efficient, scalable, and user-friendly applications, with a focus on clean code and modern development practices.
        </p>
        <p>
        With experience in front-end and back-end development, I have worked extensively with React for dynamic UI design and Laravel for robust API and backend solutions. 
        </p>
        <p>
        I am always exploring new technologies, frameworks, and methodologies to stay ahead in the evolving tech landscape. Passionate about problem-solving and innovation, I strive to create impactful digital experiences that blend technology with seamless functionality.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
        <div className="face1">
            <FontAwesomeIcon icon={faWordpressSimple} color="#21759B" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faLaravel} color="#FF2D20" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faNodeJs} color="#339933" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPhp} color="#777BB4" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGithub} color="#181717" />
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About
