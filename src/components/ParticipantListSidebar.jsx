import { participantsInfo } from "../data/participants";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useUserContext } from "../context/participantContext";
import { partReducer } from "../reducer/partReducer";

export default function ParticipantListSidebar() {
  const { state, dispatch } = useUserContext();

  console.log("state from sideabr: ", state);
  console.log("disptach: ", dispatch);
  function clickHandler(userid) {
    dispatch({ type: "MIC_STATE", payload: userid });
  }

  return (
    <>
      <p> Participants </p>
      {state.map((participant) => (
        <p>
          {participant.name}
          <Button onClick={() => clickHandler(participant.id)}>
            {/* {console.log(toggle)} */}
            {participant.micState ? "unmute" : "mute"}
          </Button>
        </p>
      ))}
    </>
  );
}
