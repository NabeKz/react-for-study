import { Pet } from "@/domain/pet/model/pet";
import { PetStatus } from "@/domain/pet/model/pet-status";
import { Tag } from "@/domain/pet/model/tag";
import { PetRepository } from "@/domain/pet/repository";
import { client, endpoints } from "@/infra/client";
import { PetFetchResponse } from "./response/fetch-response";

export class PetRepositoryOnRdb implements PetRepository {
  private fetchUrl(params: number | Tag | PetStatus): string {
    if (typeof params === "number") {
      const id = params.toString();
      return endpoints("/pet/{petId}").replace("{petId}", id);
    }

    if (params instanceof Tag) {
      return endpoints("/pet/findByTags");
    }

    return endpoints("/pet/findByStatus");
  }

  async fetch(params: number | Tag | PetStatus): Promise<Pet> {
    const url = this.fetchUrl(params);
    const { data } = await client.get<PetFetchResponse>(url, { params });
    return data
  }

  create(): Promise<Pet> {
    throw new Error("Method not implemented.");
  }
  update(pet: Pet): Promise<Pet> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<Pet> {
    throw new Error("Method not implemented.");
  }
}
