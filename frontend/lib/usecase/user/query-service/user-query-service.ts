import { UserDto } from "../dto/dto";

export interface UserQueryService {
  fetchList(): Promise<UserDto[]>
}
