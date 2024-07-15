"use client";

import { Box, Flex, Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import HeaderSection from './HeaderSection';
import { HiArrowLeft, HiChevronLeft } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import AppIcon from '../AppIcon';
export interface NavbarHeaderProps {
  showBackButton?: boolean
  showTitle?: boolean
  title?: string
  customRightRender?: ReactNode,
  content?: ReactNode
  showBackground?: boolean
  showBorderRadius?: boolean
  variant?: "black" | "white"
  height?: string
  containerBackgroundColor?: "white" | "gray.soft" | "gray.700"
}

const NavbarHeader: FC<NavbarHeaderProps> = (props) => {
  const {
    showBackButton = true,
    showTitle = true,
    title,
    content,
    showBackground = true,
    showBorderRadius = true,
    variant = "white",
    height,
    customRightRender,
    containerBackgroundColor
  } = props
  const router = useRouter();
  return (
    <>
      {showBackButton && <Box>
        <HeaderSection
          showBorderRadius={showBorderRadius}
          showBackground={showBackground}
          variant={variant}
          height={height}
          containerBackgroundColor={containerBackgroundColor}
        >
          <Flex
            height="56px"
            alignItems="center"
          >
            <Box
              mr="auto"
              display="flex"
              gap={2}
              alignItems="center"
            >
              <Box cursor="pointer" onClick={() => router.back()}>
                <AppIcon src={"chevron-left"} color={"black"} />
              </Box>
              <Heading fontSize="md" fontFamily="Poppins" fontWeight="semibold" color={"black"} mt={"3px"}>{title}</Heading>
            </Box>
            <Box
              ml="auto"
            >
              {customRightRender && customRightRender}
            </Box>
          </Flex>
          {!!content && (
            <Box pt="24px">
              {content}
            </Box>
          )}
        </HeaderSection>
      </Box >}

    </>
  )
}

export default NavbarHeader