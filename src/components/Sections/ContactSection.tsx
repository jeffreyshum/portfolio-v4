import { FC } from "react"
import LabeledSection from "./LabeledSection"
import { ContactIcons } from "../IconChip"
import styled from "styled-components"

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.75rem;
`

const ContactSection: FC = () => {
  return (
    <LabeledSection
      anchor="contact"
      sectionTitle="Get in Touch"
      sectionCardImage="/images/handshake.png"
    >
      <StyledIconContainer>
        <ContactIcons />
      </StyledIconContainer>
      <div style={{ textAlign: "center" }}>
        <h1>My Resume</h1>
        <iframe
          src="https://drive.google.com/file/d/1PeMZNQvbEJHkLMD4xgBc5bF6w6WvRHN-/preview"
          style={{
            width: "100%",
            height: "750px",
          }}
          allow="autoplay"
        ></iframe>
      </div>
    </LabeledSection>
  )
}

export default ContactSection
