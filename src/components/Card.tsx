import { HTMLMotionProps, motion } from "framer-motion"
import { forwardRef } from "react"
import styled from "styled-components"

interface CardProps extends HTMLMotionProps<"div"> {
  card?: string
  side?: "front" | "back"
  image?: string
}

export const StyledCardBase = styled(motion.div)`
  width: 225px;
  height: 315px;
  padding: 5px;
  color: black;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  user-select: none;
  position: absolute;
  backface-visibility: hidden;
`
const StyledCardContainer = styled(StyledCardBase)<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
`
// https://www.me.uk/cards/makeadeck.cgi
const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  // const Card: FC<CardProps> = (props) => {
  const imagePath =
    props.side === "front"
      ? `/images/standard/${props.card}.svg`
      : `/images/red_back.svg`
  return (
    <StyledCardContainer
      ref={ref}
      className="card"
      image={props.image ? props.image : imagePath}
      {...props}
    />
  )
})

export default Card
