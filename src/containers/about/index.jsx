import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Rupesh Singh",
  },
  {
    label: "Location",
    value: "Kolkata , West Bengal , In",
  },
  {
    label: "Email",
    value: "rupeshsingh1345@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 9903348456",
  },
];

const jobSummary =
  "Hello everyone !! I completed my school curriculum in 2019. I took computer application as my optional subject in standard X and scored 92 marks out of 100. I was very fond of computer science so I chose computer science in java language instead of biology and scored decent marks in it. Therefore, I took a year gap to study for JEE competitive exam, after a lot of hard work I failed to make it into NIT by being just 86.515 percentile after that I landed in Meghnad Saha Institute of Technology pursuing a B.Tech in Electronics and Communication Engineering.  While being in the electronics department my passion for coding didn't hamper. I completed learning c and c++ language as earlier I learned java language during my school curriculum, I was also taking part in the regular practice of data structure codes on platforms like 'GeekForGeeks' and 'CodeChef' contest along with HTML, CSS, and JavaScript i.e, full frontend development and a part of PHP by the end of my second year of my B.Tech career. Now from the third year, by the end of 2022, I have formed a complete roadmap for the completion of full data structure and full stack development by creating a few projects for my resume.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
