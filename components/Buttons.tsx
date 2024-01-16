/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Project } from "../src/services/projectData";

export const Buttons = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-[300px] md:max-w-none grid md:flex flex-wrap gap-x-4 mx-auto justify-center">
      {project.sourceCode ? (
        <Link
          target="blank"
          href={project.sourceCode}
          className="flex justify-center  button-group"
        >
          <button className="project_btn11 flex items-center justify-center md:h-[60px] px-5 h-10 bg-[#cb5858] shadow-2xl mt-3 text-xl w-full text-white hover:bg-[#b34c4c] ">
            Code
            <svg
              className="github_logo w-[47px] h-[31px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 54 54"
            >
              <path fill="none" d="M-.2.1h53.8v53.4H-.2z"></path>
              <path
                className="inner-path"
                d="M15.9 7.7c3.3-1.9 6.9-2.9 10.8-2.9 3.9 0 7.5 1 10.8 2.9s5.9 4.5 7.8 7.8c1.9 3.3 2.9 6.9 2.9 10.8 0 4.7-1.4 8.9-4.1 12.6-2.7 3.7-6.2 6.3-10.6 7.7-.5.1-.9 0-1.1-.2-.2-.2-.4-.5-.4-.8v-5.9c0-1.8-.5-3.1-1.5-4 1.1-.1 2-.3 2.9-.5.8-.2 1.7-.6 2.6-1.1.9-.5 1.7-1.1 2.3-1.9.6-.7 1.1-1.7 1.5-2.9s.6-2.6.6-4.2c0-2.2-.7-4.1-2.2-5.7.7-1.7.6-3.6-.2-5.7-.5-.2-1.3-.1-2.3.3-1 .4-1.8.8-2.6 1.2l-1.1.7c-1.7-.5-3.5-.7-5.4-.7-1.8 0-3.6.2-5.4.7-.3-.2-.7-.5-1.2-.8-.5-.3-1.3-.7-2.3-1.1-1.1-.4-1.9-.5-2.4-.4-.8 2.1-.9 4-.2 5.7-1.4 1.7-2.1 3.6-2.1 5.8 0 1.6.2 3 .6 4.2.4 1.2.9 2.2 1.5 2.9.6.7 1.3 1.4 2.2 1.9.9.5 1.8.9 2.6 1.1.8.2 1.8.4 2.9.5-.7.7-1.2 1.6-1.4 2.9-.4.2-.8.3-1.3.4-.4.1-1 .1-1.6.1s-1.2-.2-1.8-.6c-.6-.4-1.1-1-1.5-1.7-.4-.6-.8-1.1-1.4-1.5-.5-.4-1-.6-1.4-.7l-.6-.1c-.4 0-.7 0-.8.1-.1.1-.2.2-.1.3s.1.3.3.4c.1.1.2.2.4.3l.2.1c.4.2.8.5 1.2 1.1.4.5.7 1 .9 1.4l.3.6c.2.7.7 1.3 1.2 1.7.6.4 1.2.7 1.9.8.7.1 1.3.2 1.9.2.6 0 1.1 0 1.5-.1l.6-.1v4c0 .3-.1.6-.4.8-.2.2-.6.3-1.1.2-4.3-1.4-7.8-4-10.6-7.7S5.1 30.7 5.1 26c0-3.9 1-7.5 2.9-10.8 2-3 4.6-5.6 7.9-7.5zm-2.6 27.9c.1-.1 0-.2-.2-.3-.2-.1-.3 0-.4.1-.1.1 0 .2.2.3.2.1.4.1.4-.1zm.9 1c.1-.1.1-.2-.1-.4s-.3-.2-.4-.1c-.1.1-.1.2.1.4.1.2.3.2.4.1zm.8 1.2c.2-.1.2-.3 0-.5-.1-.2-.3-.3-.5-.2-.2.1-.2.3 0 .5s.4.3.5.2zm1.2 1.2c.1-.1.1-.3-.1-.5s-.4-.3-.6-.1c-.2.1-.1.3.1.5.3.2.5.2.6.1zm1.6.7c.1-.2-.1-.4-.4-.4-.3-.1-.5 0-.5.2-.1.2 0 .3.4.4.2.1.4 0 .5-.2zm1.8.1c0-.2-.2-.3-.5-.3s-.4.1-.4.3c0 .2.2.3.5.3.2 0 .4-.1.4-.3zm1.6-.3c0-.2-.2-.3-.5-.3-.3.1-.4.2-.4.4s.2.3.5.2c.3.1.4-.1.4-.3z"
              ></path>
            </svg>
          </button>
        </Link>
      ) : null}

      {project.liveWebsite ? (
        <Link
          target="blank"
          href={project.liveWebsite}
          className="flex justify-center "
        >
          <button className="flex items-center justify-center px-5 md:h-[60px] h-10 bg-[#cb5858] shadow-2xl mt-3 text-xl self-end w-full   text-white hover:bg-[#b34c4c] ">
            Live Website
          </button>
        </Link>
      ) : (
        " "
      )}
    </div>
  );
};