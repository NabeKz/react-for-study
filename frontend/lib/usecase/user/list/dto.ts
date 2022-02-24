// POJOっぽくあつかいためtype
export type UserDto = {
  name: string;
};

export const UserDto = (data: UserDto): UserDto => {
  return {
    name: data.name,
  };
};
