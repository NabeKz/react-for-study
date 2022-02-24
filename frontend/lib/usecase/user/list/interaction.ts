import { di } from "@/di_container";
import { UserQueryService } from "../query-service";
import { UserDto } from "./dto";


export class UserFetchListInteraction {
  private list: UserDto[] = [];

  private constructor(private queryService: UserQueryService) {}

  static create(queryService = di.queryService.user): UserFetchListInteraction {
    return new UserFetchListInteraction(queryService);
  }

  async initialize(): Promise<void> {
    this.list = await this.queryService.fetchList()
  }

  toDto() {
    return [...this.list]
  }
}
