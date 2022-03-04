export class User {
  private constructor(
    readonly id: number,
    readonly username: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly password: string,
    readonly phone: string,
    readonly userStatus: number
  ) {}

  static valueOf({
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    phone,
    userStatus,
  }: {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
  }): User {
    return new User(
      id,
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
      userStatus
    );
  }
}
