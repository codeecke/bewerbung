import { TTechStackCategory } from "../types/TTechStackCategory"
import Skill from "./Skill/Skill"

type TProps = {
    category: TTechStackCategory
}

export default ({category}: TProps) => <>
    <h2>{category.category}</h2>
    {category.skills.map((skill, key) => (
        <Skill 
            key={key} 
            skill={skill} 
            oddEven={key % 2 == 1 ? 'odd' : 'even'}
            />
    ))}
</>