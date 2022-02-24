import { UserDto } from "@/usecase/user/list/dto";
import { UserQueryService } from "@/usecase/user/query-service";

export class UserQueryServiceOnMemory implements UserQueryService {
  async fetchList(): Promise<UserDto[]> {
    return [
      UserDto({
        name: "test1"
      }),
      UserDto({
        name: "test2"
      }),
      UserDto({
        name: "test3"
      })
    ]
  }
}
