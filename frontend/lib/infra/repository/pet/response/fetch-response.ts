import { Category } from "@/domain/pet/model/category";
import { Pet } from "@/domain/pet/model/pet";
import { Tag } from "@/domain/pet/model/tag";
import { components } from "@/infra/schemas";

export type PetFetchResponse = components["schemas"]["Pet"];
export type TagResponse = components["schemas"]["Tag"]

const parseTags = (response: TagResponse[]): Tag[] => {
  return response.map(item => 
    Tag.valueOf({
      id: item.id || 0,
      name: item.name || ""
    })
  )
};

export const fetchResponseToPet = (response: PetFetchResponse): Pet => {
  return Pet.valueOf({
    id: response.id || 0,
    name: Pet.name || "",
    category: Category.valueOf({
      id: response.category?.id || 0,
      name: response.category?.name || ""
    }),
    photoUrls: response.photoUrls || [],
    tags: parseTags(response.tags || []),
    status: response.status!,
  });
};
