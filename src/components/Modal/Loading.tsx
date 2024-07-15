import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Text, Spinner, Center, VStack, Box, Alert
} from "@chakra-ui/react"
import ModalSlideUp from "./ModalSlideUp"

interface LoadingData  {
    title?: string,
    body?: string,
  }
  
export default function Loading(props: LoadingData) {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    const { title,body } = props

    return <ModalSlideUp
    isCentered
    isOpen={isOpen} onClose={onClose}
    title={title}
>
    <Center>
        <VStack >
            <Box h='6' />
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
            <Box h='2' />
            <Alert variant='info'>
                {body}
            </Alert>
            <Box h='50' />
        </VStack>
    </Center>
</ModalSlideUp>
}