import { FC, useEffect, useRef, useState } from "react"
import LabeledSection from "./LabeledSection"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StyledCardBase } from "../Card"
import styled from "styled-components"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"

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
  cursor: pointer;

  @media (max-width: 768px) {
    transform: scale(0.75);
  }
`

const StyledSlider = styled(Slider)`
  .slick-slide {
    transition: 0.3s;
    position: relative;
  }

  .slick-slide:not(.slick-active) {
    opacity: 0.2;
  }

  .slick-slide:hover {
    opacity: 1;
  }

  .slick-dots li button:before {
    color: white;
  }
`

const StyledSliderContainer = styled.div`
  height: 100vh;
`

interface ProjectItemProps extends HTMLMotionProps<"img"> {
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

const data = [
  {
    id: 0,
    title: "Milton",
    thumbnail: "/images/milton.png",
    description: "some long data",
  },
  {
    id: 1,
    title: "Blog",
    thumbnail: "/images/milton.png",
    description: "some long description",
  },
]

const ProjectsSection: FC = () => {
  const [selected, setSelected] = useState(0)
  const sliderRef = useRef<Slider | null>(null)

  // This useEffect prevents partial drags from changing selected but not .active CSS
  useEffect(() => {
    sliderRef.current?.slickGoTo(selected)
  }, [selected])
  
  const settings = {
    dots: true,
    infinite: false,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
    swipe: true,
    initialSlide: selected,
    focusOnSelect: true,
    afterChange: (index: number) => {
      setSelected(index)
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,

        },
      },
    ],
  }

  return (
    <LabeledSection
      sectionTitle={"Projects"}
      sectionCardImage={"/images/lightbulb-gear.png"}
    >
      <StyledSliderContainer>
        <StyledSlider {...settings} ref={sliderRef}>
          {data.map((item) => (
            <ProjectItem
              name={item.title}
              image={item.thumbnail}
              key={item.id}
              layoutId={item.title}
            />
          ))}
        </StyledSlider>
        <AnimatePresence>
          {selected >= 0 && (
            <motion.div
              layoutId={data[selected].title}
              key={data[selected].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ display: "none" }}
            >
              <div>
                <h1>{data[selected].title}</h1>
                <p>{data[selected].description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </StyledSliderContainer>
    </LabeledSection>
  )
}

export default ProjectsSection
