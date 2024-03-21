import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => (
  <VStack spacing={4} alignItems="flex-start" borderRadius="md" borderWidth="1px" p={4} backgroundColor="white">
    <Image src={imageSrc} alt={title} borderRadius="md" />
    <Heading as="h3" size="md" fontWeight="bold" color="black">{title}</Heading>
    <Text color="gray.500">{description}</Text>
    <HStack>
      <Text color="black">See More</Text>
      <FontAwesomeIcon icon={faArrowRight} color="black" />
    </HStack>
  </VStack>
);

export default Card;
