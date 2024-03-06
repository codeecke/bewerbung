import './TechStack.scss'
import TechStackCategory from '../../components/TechStackCategory'
import techStack from '../../data/tech-stack.json'
import { TTechStackCategory } from '../../types/TTechStackCategory'

export default () => {
    return <>
        <div className="tech-stack">
            <h1>Tech Stack</h1>
            {techStack.map((category: TTechStackCategory, key: number) => {
                return (
                    <TechStackCategory category={category} key={key} />
                )
            })}
        </div>
    </>
}