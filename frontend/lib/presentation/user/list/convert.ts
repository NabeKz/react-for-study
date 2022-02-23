import { UserDto } from "@/usecase/user/dto/dto";

export type UserItems = {
  key: number;
  name: string;
}[];

export const convert = (dto: UserDto[]): UserItems => {
  return dto.map((item, index) => {
    return {
      key: index,
      name: item.name,
    };
  });
};
