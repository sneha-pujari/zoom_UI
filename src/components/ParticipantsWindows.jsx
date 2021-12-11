import ParticipantWindow from "./ParticipantWindow";
import { participantsInfo } from "../data/participants";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { useUserContext } from "../context/participantContext";

export default function ParticipantsWindows() {
  const { userDetails, dispatch } = useUserContext();

  return (
    <>
      <Wrap>
        {userDetails.map((participant) => (
          <WrapItem key={participant.id}>
              {console.log(participant)}
            <Center w="400px" h="300px" bg="red.200">
              {participant.name}  <br/>
              {participant.micState ? "unmute" : "mute"}
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
