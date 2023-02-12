import Layout from "../components/layout";
import data from '../_data/data.json';
import SEO from "../components/seo";
import "../styles/resume.module.scss";
import { env } from "process";

interface Props {
    education: string[];
    experience: string[];
    contact: {
        email: string;
        phone: string;
        location: string;
    };
}

const Resume = ({ education, experience, contact }: Props) => {
    return (
        <>
            <SEO
                title="About"
                description="This is the about page for my portfolio website"
                image="https://example.com/image.jpg"
            />
            <Layout title="About">
                <div className="bg-white p-4">

                    <h2 className="text-lg font-medium text-gray-800">Education</h2>
                    {education ? (
                        <ul>
                            {education.map((edu, index) => (
                                <li key={index} className="text-gray-600">
                                    {edu}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No education information provided.</p>
                    )}
                    <h2 className="text-lg font-medium text-gray-800 mt-4">Summary</h2>
                    <ul>
                        {experience.map((exp, index) => (
                            <li key={index} className="text-gray-600">
                                {exp}
                            </li>
                        ))}
                    </ul>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="card">
                            <h2 className="text-lg font-medium text-gray-800 mt-4">Skills</h2>
                            <ul>
                                {data.skills.map((skill, index) => (
                                    <li key={index} className="text-gray-600">
                                        <b>{skill.area}: </b>{skill.tech.join(', ')}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card">
                            <h2 className="text-lg font-medium text-gray-800 mt-4">Certifications</h2>
                            <ul>
                                {data.certifications.map((certification, index) => (
                                    <li key={index} className="text-gray-600">
                                        {certification}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <div className="mt-8">
                    {data.workExperience.map((work, index) => (
                    <div key={index}>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{work.startDate} - {work.endDate}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{work.position} <b>{work.company}</b></h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                {work.projects.map((project, index) => (
                                    <ul className="list-disc list-inside" key={index}>{project.title} 
                                        {project.highlights.map((highlight, index) => (
                                            <li  key={index}>{highlight}</li>
                                        ))}
                                    </ul>    
                                ))}
                            </p>
                            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                    </ol>
                    </div>))}

                    </div>

                    <h2 className="text-lg font-medium text-gray-800 mt-4">Contact</h2>
                    <ul>
                        <li className="text-gray-600">Email: {data.contact.email}</li>
                        <li className="text-gray-600">Phone: {data.contact.phone}</li>
                        <li className="text-gray-600">Location: {data.contact.location}</li>
                    </ul>
                </div>
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            education: data.education,
            experience: data.experience,
            contact: {
                email: process.env.CONTACT_EMAIL,
                phone: process.env.CONTACT_PHONE,
                location: process.env.CONTACT_LOCATION,
            }
        },
    }
}

export default Resume;
