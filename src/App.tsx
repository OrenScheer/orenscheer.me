import * as React from "react";

import {
  Box,
  Heading,
  Flex,
  Image,
  Button,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/all";
import ColorModeSwitcher from "./ColorModeSwitcher";
import Pine from "./images/Pine.png";

const App: React.FC = () => {
  const teal = useColorModeValue("#38B2AC", "#81E6D9");
  return (
    <Box
      textAlign="center"
      fontSize="xl"
      pb={8}
      d="flex"
      flexDir="column"
      alignItems="center"
    >
      <Flex width="100%" zIndex="9" pos="sticky" top="0">
        <Flex
          width="100%"
          justifyContent="flex-end"
          pt={6}
          pb={6}
          px={8}
          height="100px"
          alignItems="flex-end"
        >
          {/* <Heading d="flex" alignItems="center" color="#38B2AC" size="2xl">
          <Image
            borderRadius="full"
            boxSize="40px"
            src={Pine}
            alt="Oren Scheer"
            me={3}
          />
          Oren Scheer
        </Heading> */}
          <ColorModeSwitcher zIndex="9" />
        </Flex>
      </Flex>
      <Flex direction="column" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src={Pine}
          alt="Oren Scheer"
        />
        <Heading color={teal} size="3xl" mt={3} mb={4}>
          Oren Scheer
        </Heading>
        <Flex justifyContent="space-between" width="250px">
          <Link href="https://linkedin.com/in/orenscheer" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="teal">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/orenscheer" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="teal">
              GitHub
            </Button>
          </Link>
        </Flex>
        <Text mt={3} mb={3} width="420px">
          I&apos;m in my third year at the University of Ottawa, studying
          computer science and math.
        </Text>
        <Flex alignItems="center">
          <Link href="https://nextavailableread.orenscheer.me" isExternal>
            <Button variant="ghost" colorScheme="teal">
              NextAvailableRead
            </Button>
          </Link>
          <Text>/</Text>
          <Link
            href="https://github.com/orenscheer/find-my-representatives"
            isExternal
          >
            <Button variant="ghost" color="#3899A0">
              Find My Representatives
            </Button>
          </Link>
          <Text>/</Text>
          <Link href="https://travelorange.orenscheer.me" isExternal>
            <Button variant="ghost" colorScheme="orange">
              Travel Orange
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
