import { TTechStackCategory } from "../../../shared/types/TTechStackCategory";
import Skill from "./Skill/Skill";

type TProps = {
  category: TTechStackCategory;
};

export default ({ category }: TProps) => (
  <>
    <h3>{category.category}</h3>
    {category.skills.map((skill, key) => (
      <Skill key={key} skill={skill} oddEven={key % 2 == 1 ? "odd" : "even"} />
    ))}
  </>
);
