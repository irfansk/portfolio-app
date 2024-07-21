import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import Link from 'next/link'
import Header from "./view/Header";
import Footer from "./view/Footer";
import { BiCode } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import { projectList } from "@/components/data/constants";
// import IconButton from "@material-ui/core/IconButton";
// import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {

  const [limit, setLimit] = useState(7);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  return (
    <>
    <Header />
    <div id="projects" className="about background-alt mb-16">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {projectList.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work drop-shadow-2xl"
                  // contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<BiCode />}
                  iconStyle={{
                    background: "#0563bb",
                    // color: "#fff",
                  }}
                >
                <h3
                  className="vertical-timeline-element-title"
                  style={{
                    fontSize: "12",
                    color: "#7e8890",
                  }}
                >
                  {data.cardTitle}
                </h3>
                  <div className="projects-technologies flex w-full flex-wrap">
                    {data.technologies.map((name, i) => (
                        <div
                            key={i}
                            data-te-chip-init
                            data-te-ripple-init
                            className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {name}
                        </div>
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </span>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div key={j}>
                        <br></br>
                        <Link
                          href={link.url}
                          target="_blank"
                        >
                          <button
                            type="button"
                            className="inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal no-underline bg-primary-500 rounded hover:bg-primary-600 hover:underline hover:text-blue-200 drop-shadow-2xl">
                            {link.text}
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={<MdAdd />}
                  iconStyle={{
                    background: "#0563bb",
                    // color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  // icon={
                  //   <IconButton aria-label="add">
                  //     <RemoveIcon
                  //       style={{
                  //         color: "#fff",
                  //         marginTop: "0.1px",
                  //       }}
                  //     />
                  //   </IconButton>
                  // }
                  iconStyle={{
                    background: "#0563bb",
                    // color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Projects;