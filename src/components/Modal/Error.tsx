import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Text, Spinner, Center, VStack, Box, Alert
} from "@chakra-ui/react"
import { HiCheckCircle } from "react-icons/hi"
import ModalSlideUp from "./ModalSlideUp"

interface LoadingData  {
    title?: string,
    body?: string,
  }
  
export default function Error(props: LoadingData) {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    const { title,body } = props
    
    return <ModalSlideUp
    title={title}
    isCentered
    isOpen={isOpen} onClose={onClose}
>
    <Center>
        <VStack >
            <Alert variant='error' status='success'>
            {body}
            </Alert>
            <Box h='50' />
        </VStack>
    </Center>
</ModalSlideUp>
}