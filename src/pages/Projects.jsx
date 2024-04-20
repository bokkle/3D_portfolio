import { Link } from 'react-router-dom';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've developed numerous projects throughout the years, but these are
          the ones I hold closest to my heart.
        </p>
      </div>
      <div className="my-20 flex flex-wrap gap-16">
        {projects.map((project) => (
          <div className="w-full lg:w-[400px]" key={project.name}>
            <div className="block-container h-12 w-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front flex items-center justify-center rounded-xl">
                <img
                  src={project.iconUrl}
                  className="h-1/2 w-1/2 object-contain"
                  alt="Project icon"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="font-poppins text-2xl font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live link
                </Link>
                <img
                  src={arrow}
                  className="h-4 w-4 object-contain"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
