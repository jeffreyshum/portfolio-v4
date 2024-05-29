import { FC } from "react"
import styled from "styled-components"
import { LabelCard, LabelCardImage, LabelCardText } from "./LabeledSection"

const StyledNavContainer = styled.ul`
  display: flex;
  width: 100%;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 600px;
  }
`

const StyledNavCard = styled(LabelCard)<{ $order: number }>`
  position: static;
  margin: 0 10px;
  padding: 0;
  transform: none;

  @media (max-width: 768px) {
    position: absolute;
    top: ${(props) => props.$order * 8 + 30}%;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }
`

interface NavCardProps extends React.HTMLProps<HTMLDivElement> {
  sectionTitle: string
  sectionCardImage: string
  href: string
  order: number
}

const NavCard: FC<NavCardProps> = (props) => {
  return (
    <a href={props.href} style={{ textDecoration: "none" }}>
      <StyledNavCard $order={props.order}>
        <LabelCardText>{props.sectionTitle}</LabelCardText>
        <LabelCardImage src={props.sectionCardImage} />
      </StyledNavCard>
    </a>
  )
}

const Nav: FC = () => {
  return (
    <nav>
      <StyledNavContainer>
        <li>
          <NavCard
            order={0}
            href="#about"
            sectionTitle="About"
            sectionCardImage={"/images/pencil-wrench.png"}
          />
        </li>
        <li>
          <NavCard
            order={1}
            href="#projects"
            sectionTitle="Projects"
            sectionCardImage={"/images/lightbulb-gear.png"}
          />
        </li>
        <li>
          <NavCard
            order={2}
            href="#contact"
            sectionTitle="Get in Touch"
            sectionCardImage={"/images/handshake.png"}
          />
        </li>
      </StyledNavContainer>
    </nav>
  )
}

export default Nav
