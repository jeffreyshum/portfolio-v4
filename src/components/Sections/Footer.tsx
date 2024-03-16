import { FC } from "react"
import styled from "styled-components"
import { StyledIconContainer } from "./Hero"
import IconChip from "../IconChip"

const StyledFooter = styled.footer`
  background-color: var(--bg-footer);
  margin: 0;
  padding-top: 20px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
        <a
          href="https://github.com/jeffreyshum"
          target="_blank"
          rel="noreferrer"
        >
          <IconChip color="grey" src="/images/icons/github.svg" alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/jeffreyshum_/"
          target="_blank"
          rel="noreferrer"
        >
          <IconChip
            color="orange"
            src="/images/icons/instagram.svg"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shumjeffrey/"
          target="_blank"
          rel="noreferrer"
        >
          <IconChip
            color="#7B68EE"
            src="/images/icons/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
      </StyledIconContainer>
    </StyledFooter>
  )
}

export default Footer
