import { FC } from "react"
import styled from "styled-components"
import { StyledAppSection } from "./Section"
import Card from "../Card"
import { ContactIcons } from "../IconChip"

const StyledHeroSection = styled(StyledAppSection)`
  padding-top: 7rem;
  padding-bottom: 7rem;
  overflow-x: hidden;
`

const HeroText = styled.span`
  font-size: 3rem;
`

const HeroCard = styled(Card)`
  transform: scale(0.75)
    rotate(${(Math.random() < 0.5 ? -1 : 1) * Math.random() * 25}deg);
  position: static;
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

const SplitContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    ${HeroCard} {
      transform: rotate(-15deg);
    }

    ${Right} {
      margin-top: 100px;
    }
  }
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
            <ContactIcons />
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
