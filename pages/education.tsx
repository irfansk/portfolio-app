import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Header from './view/Header'
import Footer from "./view/Footer";
import { MdSchool } from 'react-icons/md'
import { MdStar } from 'react-icons/md'
import { educationList } from "@/components/data/constants";

const education = () => {

  return (
    <>
    <Header />
    <div id="education" className="about background-alt mb-16">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {educationList.map((data, i) => (
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
                  icon={<MdSchool />}
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
                      marginTop: "5px",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <h5
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1em",
                      fontWeight: "250",
                      color: "#7e8890",
                      marginTop: "5px",
                      fontStyle: "italic",
                    }}
                  >
                    {data.location}
                  </h5>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#0563bb",
                }}
                icon={<MdStar />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default education;