import { User } from "@/domain/user/user";
import { components } from "@/infra/schemas";

export type UserResponse = components["schemas"]["User"]

export const toJson = (response: components["schemas"]["User"]): User => {
  return User.valueOf({
    id: 0,
    username: response.username || "",
    firstName: response.firstName || "",
    lastName: response.lastName || "",
    email: response.email || "",
    password: response.password || "",
    phone: response.phone || "",
    userStatus: response.userStatus || 0,
  })
}
