import { UserRepositoryOnMemory } from "./infra/repository/user/user-repository-on-memory";

const di = {
  userRepository: new UserRepositoryOnMemory(),
};

export { di };
