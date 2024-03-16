import { motion } from "framer-motion"
import { FC, useState } from "react"
import styled from "styled-components"

interface CardProps {
  title: string
  num: number
  active: boolean
  onClick: () => void
}

const StyledCardContainer = styled(motion.div)`
  display: flex;
  width: 200px;
  height: 250px;
  color: black;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  cursor: pointer;
  user-select: none;
`

const CardLabel = styled(motion.h2)`
  font-size: 1.5rem;
  margin: auto;
`

const Card: FC<CardProps> = ({ title, num, active, onClick }) => {
  const containerVariants = {
    active: {
      y: -300,
    },
    inactive: {
      x: num * 30,
      rotate: num * 10 - 10,
      y: num * 12,
    },
    hover: {
      scale: 1.1,
      x: 0,
      rotate: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  }

  const labelVariants = {
    active: {
      rotate: 0,
    },
    inactive: {
      rotate: 45,
    },
    hover: {
      rotate: 0,
      marginTop: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <StyledCardContainer
      whileHover={!active ? "hover" : ""}
      variants={containerVariants}
      animate={active ? "active" : "inactive"}
      onClick={onClick}
    >
      <CardLabel variants={labelVariants}>{title}</CardLabel>
    </StyledCardContainer>
  )
}

export default Card
