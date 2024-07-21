import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Header from "./view/Header";
import Footer from "./view/Footer";
import { MdWork } from 'react-icons/md'
import { experienceList } from "@/components/data/constants";
  
const experience = () => {

  return (
    <>
      <Header />
        <div id="experience" className="about background-alt mb-16">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Experience</h2>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <VerticalTimeline className="custom-line">
                  {experienceList.map((data, i) => {
                    return (
                      <VerticalTimelineElement
                        key={i}
                        className="vertical-timeline-element--work drop-shadow-2xl"
                        // contentStyle={{ background: "#343a40" }}
                        style={{color: '#74808a'}}
                        date={data.date}
                        dateClassName="timeline-date"
                        contentArrowStyle={{
                          borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        iconStyle={{
                          background: "#0563bb",
                          color: "#fff",
                        }}
                        icon={<MdWork />}
                      >
                        <h3
                          className="vertical-timeline-element-title"
                          style={{
                            fontSize: "14",
                            color: "#7e8890",
                          }}
                        >
                          {data.cardTitle}
                        </h3>
                        <h4
                          className="vertical-timeline-element-subtitle"
                          style={{
                            fontSize: "1.2em",
                            fontWeight: "350",
                            color: "#7e8890",
                          }}
                        >
                          {data.cardSubtitle}
                        </h4>
                        <span
                          style={{
                            fontSize: "1em",
                            fontWeight: "350",
                            color: "#74808a",
                          }}
                        >
                          {data.cardDetailedText}
                        </span>
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default experience;