import { FC } from "react"
import LabeledSection from "./LabeledSection"
import styled from "styled-components"

const StyledSkillItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  text-align: center;
`

interface SkillItemProps extends React.HTMLProps<HTMLImageElement> {
  label?: string
}

const StyledItemContainer = styled.div`
  width: 150px;
  margin: auto 10px;
`

const StyledSkillItemImage = styled.img`
  width: 100px;
  margin: 0;
`

const StyledSkillItemLabel = styled.p`
  font-size: 1.5rem;
  font-style: bold;
  margin: 0;
`

const SkillItem: FC<SkillItemProps> = (props) => {
  return (
    <StyledItemContainer>
      <StyledSkillItemImage {...props} />
      <StyledSkillItemLabel>{props.label}</StyledSkillItemLabel>
    </StyledItemContainer>
  )
}

const SkillSection: FC = () => {
  return (
    <LabeledSection
      sectionTitle={"Skills"}
      sectionCardImage={"/images/pencil-wrench.png"}
    >
      <StyledSkillItemContainer>
        <SkillItem
          label={"JavaScript"}
          src={"/images/icons/javascript.svg"}
          alt="JavaScript"
        />
        <SkillItem
          label={"TypeScript"}
          src={"/images/icons/typescript.svg"}
          alt="TypeScript"
        />
        <SkillItem
          label={"React"}
          src={"/images/icons/react.svg"}
          alt="React"
        />
        <SkillItem
          label={"Next.js"}
          src={"/images/icons/next.svg"}
          alt="Next.js"
        />
        <SkillItem label={"HTML"} src={"/images/icons/html.svg"} alt="HTML5" />
        <SkillItem label={"CSS"} src={"/images/icons/css.svg"} alt="CSS3" />
        <SkillItem
          label={"Python"}
          src={"/images/icons/python.svg"}
          alt="Python"
        />
        <SkillItem label={"Java"} src={"/images/icons/java.svg"} alt="Java" />
      </StyledSkillItemContainer>
    </LabeledSection>
  )
}

export default SkillSection
