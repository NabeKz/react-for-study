import { UserRepository } from "@/domain/user/repository";
import { User } from "@/domain/user/user";

export class UserRepositoryOnMemory implements UserRepository {
  async fetch(): Promise<User> {
    return User.valueOf({
      id: 0,
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      userStatus: 0,
    })
  }

  async save(user: User): Promise<void> {
    console.log(user)
  }
}
