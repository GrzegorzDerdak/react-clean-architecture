import { repositories } from "@/repositories";

export const useRepository = (type: keyof typeof repositories) =>
  repositories[type];
