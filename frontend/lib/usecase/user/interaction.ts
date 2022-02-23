import { di } from "@/di_container"
import { UserRepository } from "@/domain/user/repository"
import { User } from "@/domain/user/user"
import { UserDto } from "./dto"

export class UserInteraction {
  private dto: UserDto = UserDto()

  private constructor(
    private repository: UserRepository
  ) {}

  static create(repository = di.userRepository): UserInteraction {
    return new UserInteraction(repository)
  }

  async updateName(value: string): Promise<void> {
    this.dto.name = value
  }

  async create(value: string): Promise<void> {
    const user = User.valueOf({
      id: 0,
      username: this.dto.name,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      userStatus: 0,
    })
    await this.repository.save(user)
  }

  toDto(): UserDto {
    return {
      name: this.dto.name
    }
  }
}
