import { Box, Center, Container, Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type FloatingFooterProps = {
    children?: ReactNode
}

const FloatingFooter = (props: FloatingFooterProps) => {
    const { children } = props
    return (
        <Box
            position="fixed"
            bottom={0}
            left={0}
            borderColor="gray.600"
            backgroundColor="white"
            p={4}
            width="100%"
            textAlign="center"
        >
            <Flex justifyContent="center">{children}</Flex>
        </Box>
    )
}

export default FloatingFooter