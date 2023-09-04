import {
    Box,
    Button,
    HStack,
    Heading,
    IconButton,
    LightMode,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
function Header() {
    const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
    const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
    const { toggleColorMode } = useColorMode();
    const customFont = 'YourCustomFont, sans-serif';
    const logoColor = useColorModeValue('red.500', 'red.200');
    // component는 대문자여야 한다.
    const Icon = useColorModeValue(FaMoon, FaSun);
    return (
        <Stack
            justifyContent={'space-between'}
            alignItems="center"
            py={5}
            px={40}
            direction={{
                sm: 'column',
                md: 'row',
            }}
            spacing={{
                sm: 4,
                md: 0,
            }}
            borderBottomWidth={1}
        >
            <Box color={logoColor}>
                <Heading as="h1" size="md" fontFamily={customFont}>
                    Happy Preschool
                </Heading>
            </Box>
            <HStack spacing={2}>
                <IconButton onClick={toggleColorMode} variant={'ghost'} aria-label="Toggle dark mode" icon={<Icon />} />
                <Button onClick={onLoginOpen}>Log in</Button>
                <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme="red">
                        Sign up
                    </Button>
                </LightMode>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </Stack>
    );
}

export default Header;
