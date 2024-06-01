import { motion } from "framer-motion"
import React, { useLayoutEffect, useMemo } from "react"
import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

const StyledCard = styled.li`
  border-radius: 20px;
  position: relative;
  flex: 0 0 40%;
  max-width: 40%;
  padding: 10px;

  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: 0 0 55%;
    max-width: 55%;
  }

  &:nth-child(odd) {
    padding-left: 0;
  }

  &:nth-child(even) {
    padding-right: 0;
  }

  &:last-child:nth-child(odd) {
    flex: 1 0 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex: 1 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
`
const StyledCardImage = styled.img<{ isSelected: boolean; $hovered: boolean }>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s;

  ${(props) =>
    props.isSelected || props.$hovered
      ? `
    opacity: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `
      : `
    opacity: 0.8;
  `}
`

const StyledImageContainer = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: ${(props) => (props.isSelected ? "300px" : "100%")};
  position: relative;
`

const StyledXButton = styled(Link)<{ isSelected: boolean }>`
  display: ${(props) => (props.isSelected ? "inline-block" : "none")};
  color: black;
  text-decoration: none;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 4;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-image: url(/images/icons/close.svg);
  background-position: center;
  background-repeat: no-repeat;
`

const StyledCardTitle = styled.h1<{ color?: string }>`
  position: absolute;
  top: 0;
  left: 15px;
  font-size: 2.5rem;
  color: ${(props) => (props.color ? props.color : "black")};
`

const StyledCardContent = styled(motion.div)<{
  isSelected: boolean
  $hovered: boolean
}>`
  pointer-events: auto;
  cursor: auto;
  border-radius: 20px;
  z-index: 0;
  height: 400px;
  overflow-clip-margin: content-box;
  overflow: clip;

  ${(props) =>
    props.isSelected
      ? `
    top: 25px;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 3;
    max-width: 700px;
    place-self: center;
    width: 95%;
    padding-top: 0;
    background-color: var(--bg-primary);
    height: auto;
  `
      : ``}

  ${(props) =>
    props.$hovered ? "box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.9)" : ""};
`

const StyledCardBodyContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  letter-spacing: normal;

  * {
    flex: 1;
  }

  p {
    margin-top: 0;
  }
`

const StyledBackgroundOverlay = styled(motion.div)`
  z-index: 2;
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  position: fixed;
  inset: 0;

  a {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    min-width: 100vw;
    left: 0;
  }
`

const OverlayBackground: FC<{ isSelected: boolean }> = ({ isSelected }) => {
  return (
    <StyledBackgroundOverlay
      initial={false}
      animate={{ opacity: isSelected ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isSelected ? "auto" : "none" }}
    >
      <Link to="/" />
    </StyledBackgroundOverlay>
  )
}

const StyledFullBoxLink = styled(Link)<{ isSelected: boolean }>`
  ${(props) =>
    props.isSelected
      ? ``
      : `
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
`

const StyledSuitIcon = styled.img`
  filter: brightness(0) saturate(100%) invert(100%) sepia(6%) saturate(0%)
    hue-rotate(115deg) brightness(108%) contrast(108%);
  height: 20px;
  width: 20px;
  align-self: center;
  margin-top: 15px;
  rotate: 180deg;
`

const SuitIcon: FC = () => {
  const suits = useMemo(() => ["clubs", "diamonds", "hearts", "spades"], [])
  const suit = useMemo(() => suits[Math.floor(Math.random() * 4)], [suits])

  return <div>
    <StyledSuitIcon src={`/images/standard/${suit}.svg`} />
    <StyledSuitIcon style={{float: "right"}} src={`/images/standard/${suit}.svg`} />
    </div>
}

interface CardProps extends PropsWithChildren {
  id: string
  isSelected: boolean
  title: string
  titleColor?: string
  image: string
}

const ProjectCard: FC<CardProps> = (props) => {
  const [cardHovered, setCardHovered] = useState(false)
  const [y, setY] = useState(0)
  const [boundary, setBoundary] = useState({ top: 0, bottom: 0 })
  const contentRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // TODO: swipe away works for scroll but not for drag
  // Dragging leaves the card in a weird location 
  // For swipe away
  // const checkSwipeAway = useCallback(() => {
  //   const swipeAwayDistance = 100
  //   if (actualY.get() > swipeAwayDistance) {
  //     setY(0)
  //     navigate("/")
  //   }
  // }, [actualY, navigate])

  useLayoutEffect(() => {
    const update = () => navigate("/")
    
    if (props.isSelected) window.addEventListener("resize", update)
    else window.removeEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [navigate, props.isSelected])

  const onWheel = useCallback(
    (event: WheelEvent) => {
      if (!props.isSelected) return

      event.preventDefault()
      const newY = y + event.deltaY

      if (newY < 0) {
        setY(0)
        return
      }
      if (newY > -boundary.top) {
        setY(-boundary.top)
        return
      }

      setY(newY)
    },
    [props.isSelected, y, boundary.top]
  )

  // For scroll wheel event listener
  useEffect(() => {
    if (props.isSelected) {
      addEventListener("wheel", onWheel, { passive: false })
    } else {
      setY(0)
      removeEventListener("wheel", onWheel)
    }
    return () => {
      removeEventListener("wheel", onWheel)
    }
  }, [onWheel, props.isSelected])

  // For Draggable Boundary
  useEffect(() => {
    if (!props.isSelected) return

    if (contentRef.current) {
      const scrollableViewport =
        window.innerHeight - contentRef.current.offsetTop * 2
      const top = Math.min(
        scrollableViewport - contentRef.current.offsetHeight,
        0
      )
      setBoundary({ top, bottom: 0 })
    }
  }, [setBoundary, props.isSelected])

  // For escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) =>
      (e.key === "Escape" || e.key === "Esc") && navigate("/"),
    [navigate]
  )

  useEffect(() => {
    if (props.isSelected) {
      addEventListener("keydown", handleEscape)
    } else {
      removeEventListener("keydown", handleEscape)
    }

    return () => {
      removeEventListener("keydown", handleEscape)
    }
  }, [handleEscape, props.isSelected])

  return (
    <StyledCard>
      <OverlayBackground isSelected={props.isSelected} />
      <StyledCardContent
        $hovered={cardHovered}
        isSelected={props.isSelected}
        layout
        transition={{
          type: "spring",
          duration: 0.8,
          damping: 35,
          stiffness: 300,
        }}
        // Reset transition animation after close and resets drags
        animate={props.isSelected ? { y: -y } : {}}
        onDragTransitionEnd={() => !props.isSelected && console.log("ended")}
        ref={contentRef}
        drag={props.isSelected ? "y" : false}
        dragConstraints={boundary}
      >
        <StyledImageContainer isSelected={props.isSelected}>
          <StyledCardImage
            src={props.image}
            isSelected={props.isSelected}
            $hovered={cardHovered}
          />
          <StyledCardTitle color={props.titleColor || "white"}>
            {props.title}
          </StyledCardTitle>
          <StyledXButton to="/" isSelected={props.isSelected} />
        </StyledImageContainer>
        <StyledCardBodyContent>
          {React.Children.map(props.children, (child) => (
            <p>{child}</p>
          ))}
          <SuitIcon />
        </StyledCardBodyContent>
      </StyledCardContent>
      <StyledFullBoxLink
        to={`/${props.id}`}
        isSelected={props.isSelected}
        onMouseOver={() => setCardHovered(true)}
        onMouseOut={() => setCardHovered(false)}
      />
    </StyledCard>
  )
}

export default ProjectCard
