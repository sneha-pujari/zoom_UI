import { Button } from "@chakra-ui/react";
import { useUserContext } from "../context/participantContext";
export default function ParticipantListSidebar() {
  const { userDetails, dispatch } = useUserContext();

  console.log("state from sideabr: ", userDetails);
  console.log("disptach: ", dispatch);

  function clickHandler(participant) {
    let newP = {
      id: participant.id,
      name: participant.name,
      micState: !participant.micState,
    };
    console.log("participant from sidebar: ", newP);
    dispatch({ type: "MIC_STATE", payload: newP });
  }

  return (
    <>
      <p> Participants </p>
      {userDetails.map((participant) => (
        <p>
          {participant.name} | 
          <Button onClick={() => clickHandler(participant)}>
            {/* {console.log(toggle)} */}
            {participant.micState ? "unmute" : "mute"}
          </Button>
        </p>
      ))}
    </>
  );
}
