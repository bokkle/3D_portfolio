import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="text-center font-medium sm:text-xl">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="h-4 w-4 object-contain" alt="arrow" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="neo-brutalism-blue mx-5 px-8 py-4
  text-center text-white sm:text-xl sm:leading-snug"
    >
      Hi, I&apos;m <span className="font-semibold">Mitch</span> 👋🏻
      <br />A Software Engineer from Canada.
    </h1>
  ),
  2: (
    <InfoBox
      text="I've developed projects for several companies and picked up many skills along the way..."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Lead multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
