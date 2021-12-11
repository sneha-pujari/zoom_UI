import ParticipantsWindows from "./ParticipantsWindows";
import { Box, Flex } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ParticipantListSidebar from "./ParticipantListSidebar";

export default function Home() {
  return (
    <>
      <Flex p={6}>
        <Box>
          <ParticipantsWindows />
        </Box>
        <Box width={"350px"}>
          <ParticipantListSidebar />
        </Box>
      </Flex>
    </>
  );
}
