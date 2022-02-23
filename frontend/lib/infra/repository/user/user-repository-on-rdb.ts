import { UserRepository } from "@/domain/user/repository";
import { User } from "@/domain/user/user";
import { client } from "@/infra/client";
import { toJson, UserResponse } from "./response/user-response";
import { paths } from "@/infra/schemas";

export class UserRepositoryOnRdb implements UserRepository {
  private resource = "/user"

  async fetch(): Promise<User> {
    const { data } = await client.get<UserResponse>(this.resource)
    
    return toJson(data)
  }

  async save(user: User): Promise<void> {
    throw Error("not implements")
  }
}
