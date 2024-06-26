import { FC, useRef } from "react"
import { StyledAppSection } from "./Section"
import { StyledCardBase } from "../Card"
import styled from "styled-components"
import { motion } from "framer-motion"

const StyledLabelSection = styled(StyledAppSection)`
  border-top: 1px solid var(--border-color);
  padding-bottom: 330px;
  margin-bottom: 50px;
`

const StyledSectionHeading = styled.h1`
  font-size: 3rem;
  text-align: center;
`

const StyledChildrenContainer = styled.div`
  margin-bottom: 100px;
`
const StyledLabelContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 10%;
  width: 100%;
  z-index: 1;
`

export const LabelCard = styled(StyledCardBase)`
  background: white;
  text-align: center;
  padding-top: 0;
  transform: rotateY(180deg);
  transition: transform 0.5s;
`

export const LabelCardImage = styled.img`
  margin-top: 25px;
  width: 200px;
  height: 225px;
  object-fit: contain;
`

export const LabelCardText = styled.h1`
  margin-top: 5px;
`

interface LabelSectionProps extends React.HTMLProps<HTMLDivElement> {
  sectionTitle: string
  sectionCardImage: string
  anchor: string
}

const LabeledSection: FC<LabelSectionProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <StyledLabelSection ref={ref}>
      <StyledSectionHeading id={props.anchor}>{props.sectionTitle}</StyledSectionHeading>
      <StyledChildrenContainer>{props.children}</StyledChildrenContainer>
      <StyledLabelContainer>
        <LabelCard whileInView={{ rotateY: "0deg" }}>
          <LabelCardText>{props.sectionTitle}</LabelCardText>
          <LabelCardImage src={props.sectionCardImage} />
        </LabelCard>
      </StyledLabelContainer>
    </StyledLabelSection>
  )
}

export default LabeledSection
