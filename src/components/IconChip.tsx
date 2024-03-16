import { FC } from "react"
import styled from "styled-components"

const StyledChip = styled.div<StyledProps>`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 0 11px ${(props) => props.color};
  outline: dashed 12px black;
  transform: rotate(${(props) => props.rotate}deg);
  margin: 5px 15px;
`

const StyledImage = styled.img<StyledProps>`
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  transform: rotate(${(props) => -props.rotate}deg);
`

interface StyledProps {
  color?: string
  rotate: number
}

interface IconChipProps extends React.HTMLProps<HTMLImageElement> {
  color: string
}
const IconChip: FC<IconChipProps> = (props) => {
  const rotate = Math.random() * 360
  return (
    <StyledChip color={props.color} rotate={rotate}>
      <StyledImage src={props.src} alt={props.alt} rotate={rotate} />
    </StyledChip>
  )
}

export default IconChip
