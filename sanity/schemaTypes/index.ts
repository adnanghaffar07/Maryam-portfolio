import { type SchemaTypeDefinition } from "sanity";
import homePageSchema from "../schemas/home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageSchema],
};
