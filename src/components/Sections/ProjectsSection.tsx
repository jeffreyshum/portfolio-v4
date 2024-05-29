import { FC } from "react"
import LabeledSection from "./LabeledSection"
import styled from "styled-components"
import { MemoryRouter, useMatch, useRoutes } from "react-router-dom"
import ProjectCard from "./ProjectCard"

const Items = [
  {
    id: "milton",
    title: "Milton",
    titleColor: "black",
    image: "/images/milton.png",
    children: [
      "Named after 17th century poet John Milton, Milton is an app that helps you learn about art.\
      Much of Milton's work was written completely in the dark, as he lost his sight in his 40s. Yet in his blindness, \
      his work grew more vivid and imaginative. His magnum opus, \
      Paradise Lost, is a testament to the power of art to transcend the physical world.",
      "Milton is designed to help you experience art in a new way, by providing audio descriptions of art pieces. \
      All you need to do is scan a piece of art, and Milton will provide you with information about the art and an audio description if desired.",
      "Built with React Native, AWS, Django, and Landing Lens by Landing AI.",
      <a
        href="https://devpost.com/software/milton-a9shl7"
        target="_blank"
        rel="noreferrer"
      >
        Submission for SBUHacks 2024
      </a>,
    ],
  },
  // {
  //   id: "blog",
  //   title: "Blog",
  //   titleColor: "white",
  //   image: "/images/blog.png",
  // },
]

const StyledCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  list-style-type: none;
  padding: 5px;

  @media (max-width: 768px) {
    align-content: center;
    justify-content: center;
  }
`

const CardList: FC = () => {
  const match = useMatch(":id")

  return (
    <StyledCardList>
      {Items.map((item) => (
        <ProjectCard
          key={item.id}
          isSelected={match?.params.id === item.id}
          {...item}
        />
      ))}
    </StyledCardList>
  )
}

const ProjectsSection: FC = () => {
  const RouterApp = () => {
    const cardList = <CardList />
    const routes = [
      {
        path: "/",
        children: [
          { index: true, element: cardList },
          { path: ":id", element: cardList },
        ],
      },
    ]

    return useRoutes(routes)
  }

  return (
    <LabeledSection
      anchor={"projects"}
      sectionTitle={"Projects"}
      sectionCardImage={"/images/lightbulb-gear.png"}
    >
      <MemoryRouter>
        <RouterApp />
      </MemoryRouter>
    </LabeledSection>
  )
}

export default ProjectsSection
