import { blockContent } from "./schemas/blockContent";
import { category } from "./schemas/category";
import { projects } from "./schemas/projects";
import { about } from "./schemas/about";

export const schema = {
  types: [projects, about, category, blockContent],
};
