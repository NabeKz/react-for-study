import { User } from "./user";

export interface UserRepository {
  fetch(): Promise<User>
  save(user: User): Promise<void>
}