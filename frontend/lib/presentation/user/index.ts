import { useEffect, useState } from "react";
import { UserInteraction } from "@/usecase/user/interaction";
import { Input } from "../shared/types";
import { handleRequest, handleUpdate } from "../shared/handler";
import { UserDto } from "@/usecase/user/dto";

const interaction = UserInteraction.create();
export const UserPresentation = () => {
  const [state, dispatch] = useState(UserDto());
  const callback = (dto: UserDto) => {
    dispatch({
      name: dto.name,
    });
  };
  const onInputName = (event: Input) => {
    handleUpdate(
      () => interaction.updateName(event.target.value),
      () => callback(interaction.toDto())
    );
  };
  const onUpdateView = () => {
    handleRequest(
      () => interaction.create(""),
      () => console.log(interaction.toDto())
    );
  };
  useEffect(() => {
    callback(interaction.toDto());
  }, []);

  return {
    state,
    onUpdateView,
    onInputName,
  };
};
