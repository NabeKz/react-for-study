import { UserDto } from "./list/dto";

export interface UserQueryService {
  fetchList(): Promise<UserDto[]>
}
