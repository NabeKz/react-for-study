import { useEffect, useRef, useState } from "react";
import { convert } from "./convert";
import { handleRequest } from "@/presentation/shared/handler";
import { UserFetchListInteraction } from "@/usecase/user/list/interaction";

export const UserListAdapter = () => {
  const interaction = useRef(UserFetchListInteraction.create()).current;
  const toResponse = () => convert(interaction.toDto())
  const [state, dispatch] = useState(toResponse());
  
  useEffect(() => {
    handleRequest(
      () => interaction.initialize(),
      () => dispatch(toResponse())
    )
  })

  return {
    state,
  };
};
