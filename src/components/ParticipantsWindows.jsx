import ParticipantWindow from "./ParticipantWindow";
import { participantsInfo } from "../data/participants";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";

export default function ParticipantsWindows() {
  return (
    <>
      <Wrap>
        {participantsInfo.map((participant) => (
          <WrapItem key={participant.id}>
              {console.log(participant)}
            <Center w="400px" h="300px" bg="red.200">
              {participant.name} | 
              {participant.micState ? "unmute" : "mute"}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
