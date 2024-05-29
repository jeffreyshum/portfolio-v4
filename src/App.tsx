import styled from "styled-components"
import Deck from "./components/Deck"
import { useState } from "react"
import HeroSection from "./components/Sections/Hero"
import Footer from "./components/Sections/Footer"
import ProjectsSection from "./components/Sections/ProjectsSection"
import ContactSection from "./components/Sections/ContactSection"
import AboutSection from "./components/Sections/AboutSection"
import { motion } from "framer-motion"

const StyledAppContainer = styled.div`
  padding: 0;
  margin: 0;
`

const MainContainer = styled.main`
  min-height: 90vh;
  padding-bottom: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 750px;
  }
`

const StyledContentContainer = styled(motion.div)`
  max-width: 768px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: opacity 0.5s;
`

const App = () => {
  const [activeSection, setActiveSection] = useState("")

  return (
    <StyledAppContainer>
      <MainContainer>
        <Deck setActiveSection={setActiveSection} />
        {activeSection && (
          <StyledContentContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <AboutSection />
            {/* <SkillSection /> */}
            <ProjectsSection />
            <ContactSection />
          </StyledContentContainer>
        )}
      </MainContainer>
      {activeSection && <Footer />}
    </StyledAppContainer>
  )
}

export default App
