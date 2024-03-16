// Initial idea, scrapped due to animation issues
// and inconsistent behavior
// TODO: Need a better solution
import {
  HTMLMotionProps,
  Variants,
  useAnimation,
  useInView,
} from "framer-motion"
import { FC, useEffect, useRef } from "react"
import styled from "styled-components"
import Card, { StyledCardBase } from "./Card"

interface FlipCardProps extends HTMLMotionProps<"div"> {}

const StyledFrontCard = styled(StyledCardBase)`
  background-color: #f5f5f5;
`

const FlipCard: FC<FlipCardProps> = (props) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const cardControl = useAnimation()
  const frontCardControl = useAnimation()

  useEffect(() => {
    const animation = async () => {
      if (inView) {
        frontCardControl.start("frontEnd")
        cardControl.start("backEnd")
      } else {
        frontCardControl.start("frontStart")
        cardControl.start("backStart")
      }
    }

    animation()

    return () => {
      cardControl.stop()
      frontCardControl.stop()
    }
  }, [inView, cardControl, frontCardControl])

  const flipVariants: Variants = {
    frontEnd: {
      position: "static",
      top: "20%",
      rotateY: 0,
      transition: {
        rotateY: { delay: 1, duration: 1 },
        top: { delay: 1, duration: 1 },
      },
      width: "100%",
      height: "100%",
    },
    backEnd: {
      rotateY: 180,
      top: "20%",
      transition: { duration: 1 },
    },
    frontStart: {
      rotateY: 180,
      top: "90%",
    },
    backStart: {
      top: "90%",
    },
  }

  return (
    <>
      <Card
        ref={ref}
        side="back"
        card=""
        variants={flipVariants}
        animate={cardControl}
        initial="backStart"
      />
      <StyledFrontCard
        variants={flipVariants}
        initial="frontStart"
        animate={frontCardControl}
      >
        {props.children}
      </StyledFrontCard>
    </>
  )
}

export default FlipCard
