import './Styles/experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';

const Experience = () => {
  return (
  <div className='experience'>
  <h1>Experience</h1>
  <div className='experience-item'>
    <div className='experience-card'>
      <h2 className='experience-title'>Frontend Developer Intern</h2>
      <br />
      <div className='experience-details'>
        <p><FontAwesomeIcon icon={faBuilding} />Company: Anylatus ICT Services</p>
        <p><FontAwesomeIcon icon={faClock} />Duration: April 2025 – Present</p>
        <p><FontAwesomeIcon icon={faLocationDot} /> Location: Remote</p>
      </div>
      <br />
      <p>Projects:</p>
      <br />
      <ul>
        <li>
          <strong>DigiLawyer Landing Page:</strong> Developed a responsive legal tech landing page with clean layout and modern design.
          <a href="https://digilawyer-three.vercel.app/">Visit</a>
        </li>
        <li>
          <strong>Random Quote App:</strong> Built a functional quote generator app using HTML, CSS, and JavaScript.
          <a href="https://randomquoteapp-tan.vercel.app/">Visit</a>
        </li>
        <li>
          <strong>Car Web Design:</strong> Designed a sleek car-themed frontend interface showcasing modern UI principles.
          <a href="https://github.com/Mr-UsmanKhalid/Car-front-end-Web-Design">Visit</a>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Experience