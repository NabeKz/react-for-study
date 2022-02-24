import { di } from "@/di_container";
import { UserRepository } from "@/domain/user/repository";
import { UserCreateDto } from "./dto";

export class UserCreateInteraction {
  private constructor(
    private repository: UserRepository
  ) {}

  static crate(repository = di.repository.user): UserCreateInteraction {
    return new UserCreateInteraction(repository)
  }

  async initialize(user: UserCreateDto): Promise<void> {
    await this.repository.save(user)
  }
}
