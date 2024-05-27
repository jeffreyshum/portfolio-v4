import { FC } from "react"
import styled from "styled-components"
import { StyledIconContainer } from "./Hero"
import { ContactIcons } from "../IconChip"

const StyledFooter = styled.footer`
  background-color: var(--bg-footer);
  margin: 0;
  padding-top: 20px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  letter-spacing: var(--font-letter-spacing);
`

const StyledFooterContainer = styled.div`
  max-width: 768px;
`

const StyledFooterText = styled.p`
  color: var(--footer-text-color);
`

const StyledFooterAccreditation = styled(StyledFooterText)`
  margin-top: 3rem;
  font-size: 0.75rem;
  letter-spacing: normal;
`

const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterText>Copyright &copy; 2024 Jeffrey Shum</StyledFooterText>
      </StyledFooterContainer>
      <StyledIconContainer>
        <ContactIcons />
      </StyledIconContainer>
      <StyledFooterAccreditation>
        Icons by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noreferrer">
          Icons8
        </a>{" "}
        and from{" "}
        <a
          href="https://github.com/microsoft/vscode-icons"
          target="_blank"
          rel="noreferrer"
        >
          VSCode Icons
        </a>
        <br />
        Cards generated from{" "}
        <a href="https://robohash.org/" target="_blank" rel="noreferrer">
          me.uk
        </a>{" "}
        by{" "}
        <a href="https://github.com/revk" target="_blank" rel="noreferrer">
          RevK
        </a>
        <br />
        Favicon made by{" "}
        <a
          href="https://www.linkedin.com/in/wimie-hsieh/"
          target="_blank"
          rel="noreferrer"
        >
          Wimie Hsieh
        </a>
      </StyledFooterAccreditation>
    </StyledFooter>
  )
}

export default Footer
