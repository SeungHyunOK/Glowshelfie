import React from 'react'
import styled from 'styled-components'

interface SlickArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const ArrowButton = styled.button<{ position: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f7dfde;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: #ec4899;
  }

  ${(props) => (props.position === 'left' ? `left: -40px;` : `right: -40px;`)}
  z-index: 10;
`

export const CustomPrevArrow = (props: SlickArrowProps) => {
  const { onClick } = props
  return (
    <ArrowButton position="left" onClick={onClick}>
      ❮
    </ArrowButton>
  )
}

export const CustomNextArrow = (props: SlickArrowProps) => {
  const { onClick } = props
  return (
    <ArrowButton position="right" onClick={onClick}>
      ❯
    </ArrowButton>
  )
}
