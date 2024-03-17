import { useEffect, useState } from "react"
import Card from "./Card"
import styled from "styled-components"
import { Variants, motion, useAnimation } from "framer-motion"

const initializeStandardDeck = () => {
  const suits = ["H", "D", "C", "S"]
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ]
  const deck = []
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(ranks[j] + suits[i])
    }
  }

  return deck
}

const StyledDeckContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: sticky;
  width: 100%;
  top: 0;
  padding-top: 200px;
  z-index: 1;
`

interface DeckProps extends React.HTMLProps<HTMLDivElement> {
  setActiveSection: (section: string) => void
}

const Deck: React.FC<DeckProps> = ({ setActiveSection }) => {
  const [cards, ]   = useState(initializeStandardDeck())
  const cardControl = useAnimation()
  const cardContainerControl = useAnimation()

  const deckVariants: Variants = {
    sweep: () => ({
      x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * window.outerWidth,
      y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * window.outerHeight,
      rotate: Math.random() * 90,
    }),
    leftSpring: (i) => ({
      x: -75,
      y: -100,
      rotate: -15,
      transition: {
        duration: 1 - (i / cards.length) * 0.5,
      },
    }),
    rightSpring: (i) => ({
      x: 75,
      y: -100,
      rotate: 15,
      transition: {
        duration: 1 - (i / cards.length) * 0.5,
      },
    }),
    together: (i) => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.5 - (cards.length - i) / cards.length,
      },
    }),
    end: {
      top: "90%",
      paddingTop: 0,
      transition: {
        duration: 1.25,
      },
    },
  }

  useEffect(() => {
    const animation = async () => {
      // await cardControl.start("together")
      // await cardControl.start("leftSpring")
      // await cardControl.start("together")
      // await cardControl.start("rightSpring")
      await cardControl.start("together")
      await cardContainerControl.start("end")
      setActiveSection("home")
    }

    animation()

    return () => {
      cardControl.stop()
    }
  }, [cardControl, cardContainerControl, setActiveSection])

  return (
    <StyledDeckContainer variants={deckVariants} animate={cardContainerControl}>
      {cards.map((card, index) => (
        <Card
          custom={index}
          variants={deckVariants}
          initial="sweep"
          animate={cardControl}
          key={card}
          card={card}
          side="back"
        />
      ))}
    </StyledDeckContainer>
  )
}

export default Deck
