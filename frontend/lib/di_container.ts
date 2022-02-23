import { UserQueryServiceOnMemory } from "./infra/query-service/user/user-query-service-on-memory";
import { UserRepositoryOnMemory } from "./infra/repository/user/user-repository-on-memory";

const repository = {
  user: new UserRepositoryOnMemory(),
} as const;

const queryService = {
  user: new UserQueryServiceOnMemory(),
} as const;

const di = { repository, queryService };

export { di };
