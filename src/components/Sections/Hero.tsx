import { FC } from "react"
import styled from "styled-components"
import { StyledAppSection } from "./Section"
import Card from "../Card"
import IconChip from "../IconChip"

const StyledHeroSection = styled(StyledAppSection)`
  padding-top: 7rem;
  overflow-x: hidden;
`

const HeroText = styled.span`
  font-size: 3rem;
`

const HeroCard = styled(Card)`
  transform: scale(0.75)
    rotate(${(Math.random() < 0.5 ? -1 : 1) * Math.random() * 25}deg);
  position: absolute;

  @media (max-width: 768px) {
    transform: scale(0.65) rotate(-15deg);
  }
`

const SplitContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.75rem;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Right = styled(Left)`
  position: relative;
`

const HeroSection: FC = () => {
  return (
    <StyledHeroSection>
      <SplitContainer>
        <Left>
          <HeroText>
            Hi, I'm
            <br />
            Jeffrey Shum.
          </HeroText>
          <StyledIconContainer>
            <a
              href="https://github.com/jeffreyshum"
              target="_blank"
              rel="noreferrer"
            >
              <IconChip
                color="grey"
                src="/images/icons/github.svg"
                alt="GitHub"
              />
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
        </Left>
        <Right>
          <HeroCard card="AS" side="front" />
        </Right>
      </SplitContainer>
    </StyledHeroSection>
  )
}

export default HeroSection
