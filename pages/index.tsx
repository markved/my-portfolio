import { GetStaticProps } from "next";
import data from "../_data/data.json";
import ProjectCard from '../components/project-card'
import Layout from '../components/layout'
import SEO from "../components/seo";
import Link from "next/link";

interface Portfolio {
  skills: string[];
  certifications: string[];
  experience: string[];
  projects: { title: string; description: string; link: string }[];
  education: string[];
  contact: { email: string; phone: string; location: string };
}

// the Index component is being used to render the data fetched from the data.json file.
const Index = ({ skills, experience, certifications, projects, education, contact }: Portfolio) => {
  return (
    <>
      <SEO
        title="Homepage"
        description="This is the homepage for my portfolio website"
        image="https://example.com/image.jpg"
      />
      <Layout title="Home Page">
        <div>
          <div className="py-10 bg-hero-blue">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row">
                <img src="https://i.imgur.com/mcbNllL.jpg" alt="Ved Mishra" className="rounded-full p-2 h-44 w-44 mx-auto md:h-full md:w-48" />
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-bold mb-2 text-white">
                    Hello, my name is Ved Mishra!
                  </h2>
                  <h3 className="text-xl mb-8 text-gray-200">
                    17 years experienced full stack engineer with a strong background in designing, developing, and maintaining web and mobile applications.<br></br>
                    Proven success in delivering projects on time and within budget, with a focus on usability and user experience.<br></br>
                    Skilled in working independently and as part of a team, and able to communicate effectively with both technical and non-technical stakeholders.<br></br>
                  </h3>
                  <Link href="/contact">
                    <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-3xl font-medium mb-4">Skills Overview</h1>
              <div className="mb-4">I have more than 17 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?</div>
            </div>
          </div>

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <img src="/assets/home/icons8-front-end-64.png" alt="Front End" className="w-20 h-20 -mt-10 mx-auto" />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-center">Frontend</h3>
                  <ul className="list-square">
                    <li>React</li>
                    <li>NextJS</li>
                    <li>Angular</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <img src="/assets/home/icons8-database-50.png" alt="Backend" className="w-20 h-20 -mt-10 mx-auto" />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-center">Backend</h3>
                  <ul className="list-square">
                    <li>C#</li>
                    <li>NestJS</li>
                    <li>Python</li>
                    <li>RUST</li>
                    <li>C++</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md m-4 p-4">
                <img src="/assets/home/icons8-more-100.png" alt="Other" className="w-28 h-28 -mt-14 mx-auto" />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-center">Other</h3>
                  <ul className="list-square">
                    <li>Docker</li>
                    <li>Azure</li>
                    <li>AWS</li>
                    <li>Ethereum/Solana</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <section className="flex snap-x snap-mandatory flex-nowrap gap-5 overflow-x-auto px-5 pb-5 pt-5">
            <div className="flex-none snap-center snap-always bg-white rounded-lg shadow-md p-4">
              <p>I have more than 17 years' experience building rich web applications for clients all over the world.<br></br> Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?</p>
            </div>
            <div className="flex-none snap-center snap-always bg-white rounded-lg shadow-md p-4">
              <p>content goes here</p>
            </div>
            <div className="flex-none snap-center snap-always bg-white rounded-lg shadow-md p-4">
              <p>content goes here</p>
            </div>
            <div className="flex-none snap-center snap-always bg-white rounded-lg shadow-md p-4">
              <p>content goes here</p>
            </div>
            <div className="flex-none snap-center snap-always bg-white rounded-lg shadow-md p-4">
              <p>content goes here</p>
            </div>           
          </section> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
// the getStaticProps function is used to fetch the data from the data.json file at BUILD TIME and pass it to the Index component.
export const getStaticProps: GetStaticProps<Portfolio> = async () => {
  return {
    props: {
      skills: data.skills,
      certifications: data.certifications,
      experience: data.experience,
      projects: data.projects,
      education: data.education,
      contact: data.contact,
    },
  };
};

export default Index;
