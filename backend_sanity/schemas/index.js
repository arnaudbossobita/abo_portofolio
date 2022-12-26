// Import schema types from any plugins that might expose them
import about from "./about"
import brands from "./brands"
import contact from "./contact"
import experiences from "./experiences"
import skills from "./skills"
import testimonials from "./testimonials"
import workExperience from "./workExperience"
import works from "./works"
import categories from "./categories"

// Add the schemas to the array of type (schemaTypes) to make it available in Sanit yStudio
export const schemaTypes = [about, brands, contact, experiences, skills, testimonials, workExperience, works, categories]
