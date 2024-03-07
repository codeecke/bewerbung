import './TechStack.scss'
import TechStackCategory from '../../components/TechStackCategory'
import techStack from '../../data/tech-stack.json'
import { TTechStackCategory } from '../../types/TTechStackCategory'

export default () => {
    return <>
        <div className="tech-stack">
            <h1>Tech Stack</h1>
            <h2> Tech Stack dieser Seite</h2>
            <p>Diese WebApp basiert auf React, TypeScript, ScSS, Vite und Material UI for React.</p>
            <p><a href='https://github.com/codeecke/bewerbung/' target='_blank'>Der Quellcode ist offen einsehbar.</a></p>

            <h2>Skill-Matrix</h2>
            <p>Hier versuche ich ein bisschen darauf einzugehen, mit welchen Sprachen, Frameworks oder Tools ich wie vertraut bin. Die Matrix basiert auf einer Selbsteinschätzung.</p>
            {techStack.map((category: TTechStackCategory, key: number) => {
                return (
                    <TechStackCategory category={category} key={key} />
                )
            })}
        </div>
    </>
}