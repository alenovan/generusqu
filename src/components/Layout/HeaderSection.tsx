import { Box, Container, StyleProps } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

interface Props extends StyleProps {
  children: ReactNode
  showBackground: boolean
  showBorderRadius?: boolean
  variant?: "black" | "white"
  containerBackgroundColor?: "white" | "gray.soft" | "gray.700"
}

const HeaderSection: FC<Props> = (props) => {
  const { children, showBackground, showBorderRadius, variant = "white", containerBackgroundColor, ...restProps } = props
  return (
    <Box
      {...restProps}
      color={variant}
      position="relative"
      overflow="hidden"
    >
      <Container
        bg={containerBackgroundColor || "transparent"}
        pt="20px"
      >
        <Box position="relative" >
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default HeaderSection