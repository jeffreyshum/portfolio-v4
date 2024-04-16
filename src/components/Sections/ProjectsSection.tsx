import { FC } from "react"
import LabeledSection from "./LabeledSection"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StyledCardBase } from "../Card"
import styled from "styled-components"

const StyledProjectItemContainer = styled(StyledCardBase)`
  background-color: white;
  text-align: center;
  position: static;
  margin-right: 1rem;
  width: 281px;
  height: 394px;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;
  background-position: center;
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`

const StyledSliderContainer = styled.div`
  height: 100vh;
`

interface ProjectItemProps extends React.HTMLProps<HTMLImageElement> {
  name: string
  image?: string
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
  return (
    <StyledProjectItemContainer
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    ></StyledProjectItemContainer>
  )
}

const ProjectsSection: FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
  }
  return (
    <LabeledSection
      sectionTitle={"Projects"}
      sectionCardImage={"/images/lightbulb-gear.png"}
    >
      <StyledSliderContainer>
        <Slider {...settings}>
          <ProjectItem name={"Milton"} image={"/images/milton.png"} />
          <ProjectItem name={"Blog"} />
          <ProjectItem name={"This Website"} />
        </Slider>
      </StyledSliderContainer>
    </LabeledSection>
  )
}

export default ProjectsSection
