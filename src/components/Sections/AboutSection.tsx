import { FC } from "react"
import LabeledSection from "./LabeledSection"
import styled from "styled-components"

const AboutText = styled.p`
  letter-spacing: normal;
  font-size: 1.3rem;
  padding-left: 20px;
  padding-right: 20px;
`

const StyledAboutImage = styled.img`
margin: 0 auto;
display: block;
width: 200px;
height: 225px;
`


const AboutSection: FC = () => {
  return (
    <LabeledSection
      anchor="about"
      sectionTitle="About Me"
      sectionCardImage="/images/about.png"
    >
      <AboutText>
        I am a front-end developer with a passion for creating beautiful,
        immersive, and functional user experiences. I have experience with React
        (including Next.js), TypeScript, and backend technologies like Python,
        Django, and Flask. I am always looking to learn new things and improve
        my skills. I have a strong academic background in Computer Science and
        Applied Mathematics & Statistics, and I am currently looking for
        opportunities to apply my skills in a professional setting.
      </AboutText>
      <AboutText>
        Much of my time at Stony Brook University has been spent dedicated to
        bridging the gap for historically underrepresented groups in STEM. I
        have been a part of organizations like{" "}
        <a
          href="https://www.nysed.gov/postsecondary-services/collegiate-science-and-technology-entry-program-cstep"
          target="_blank"
          rel="noreferrer"
        >
          CSTEP (Collegiate Science and Technology Entry Program)
        </a>{" "}
        which aims to provide resources and support for students for
        historically underrepresented groups in STEM. I have also been the{" "}
        <a
          href="https://www.stonybrook.edu/commcms/ceas-undergrad/current_students/ceas_tutoring_program/meet_the_tutors"
          target="_blank"
          rel="noreferrer"
        >
          sole tutor representing the Mathematics and Applied Mathematics
          departments
        </a>{" "}
        for the College of Engineering and Applied Sciences at Stony Brook
        University. I also have 2 years of experience as a teaching assistant
        making me well-versed in teaching and mentoring students.
      </AboutText>
      <AboutText>
        <a href="#contact">Let's connect!</a>
      </AboutText>
      <StyledAboutImage src="/images/favicon.svg" />
    </LabeledSection>
  )
}

export default AboutSection
