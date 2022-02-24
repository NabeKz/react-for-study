export const PetStatus = {
  available: "available",
  pending: "pending",
  sold: "sold",
} as const

export type PetStatus = typeof PetStatus[keyof typeof PetStatus]
