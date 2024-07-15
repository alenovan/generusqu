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
    closeTimer?:number
  }
  
export default function Success(props: LoadingData) {
    let { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    const { title,body,closeTimer } = props
    return <ModalSlideUp
    title={title}
    isCentered
    isOpen={isOpen} onClose={onClose}
>
    <Center>
        <VStack >
            <HiCheckCircle size={120} color={"green"} />
            <Alert variant='subtle' status='success'>
            {body}
            </Alert>
            <Box h='50' />
        </VStack>
    </Center>
</ModalSlideUp>
}