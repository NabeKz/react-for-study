import { UserRepository } from "@/domain/user/repository";
import { User } from "@/domain/user/user";
import { client, endpoints } from "@/infra/client";

import { toJson, UserResponse } from "./response/user-response";

export class UserRepositoryOnRdb implements UserRepository {
  async fetch(): Promise<User> {
    const url = endpoints("/pet")
    const { data } = await client.get<UserResponse>(url);

    return toJson(data);
  }

  async save(user: User): Promise<void> {
    throw Error("not implements");
  }
}
