import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
  } from "@chakra-ui/react"

  import React, {useState, useRef} from 'react';
  
  const Alert = ({word, title, alert, confirm}) => {

    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    return (
      <>
        <Button colorScheme="red" onClick={() => setIsOpen(true)}>
          {word}
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>
              {alert}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                {confirm}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    </>
    );
  };
  
  export default Alert;