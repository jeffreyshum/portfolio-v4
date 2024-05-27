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
`

const StyledFooterContainer = styled.div`
  max-width: 768px;
`

const StyledFooterText = styled.p`
  color: var(--footer-text-color);
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
    </StyledFooter>
  )
}

export default Footer
