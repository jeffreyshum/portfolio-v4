import styled from "styled-components"
import Deck from "./components/Deck"
import { useState } from "react"
import HeroSection from "./components/Sections/Hero"
import SkillSection from "./components/Sections/SkillSection"
import Footer from "./components/Sections/Footer"
import ProjectsSection from "./components/Sections/ProjectsSection"
import ContactSection from "./components/Sections/ContactSection"

const StyledAppContainer = styled.div`
  padding: 0;
  margin: 0;
`

const MainContainer = styled.main`
  min-height: 150vh;
  padding-bottom: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 750px;
  }
`

const StyledContentContainer = styled.div`
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
        <StyledContentContainer
          style={
            activeSection
              ? {}
              : {
                  opacity: 0,
                  minHeight: 0,
                  height: 0,
                }
          }
        >
          <HeroSection />
          <SkillSection />
          <ProjectsSection />
          <ContactSection />
          {/* Remember to do icons8 footer attribution */}
        </StyledContentContainer>
      </MainContainer>
      {activeSection && <Footer />}
    </StyledAppContainer>
  )
}

export default App
