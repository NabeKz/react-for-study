import { useEffect, useState } from "react";
import { UserFetchListInteraction } from "@/usecase/user/fetchListUsecase";
import { convert } from "./convert";
import { handleRequest } from "@/presentation/shared/handler";

const interaction = UserFetchListInteraction.create();
export const UserListAdapter = () => {
  const toResponse = () => convert(interaction.toDto())
  const [state, dispatch] = useState(toResponse());
  
  useEffect(() => {
    handleRequest(
      () => interaction.initialize(),
      () => dispatch(toResponse())
    )
  }, [])

  return {
    state,
  };
};
