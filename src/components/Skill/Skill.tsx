import './Skill.scss'
import { Rating } from "@mui/material"
import { TSkill } from "../../types/TSkill"

type TProps = {
    skill: TSkill,
    oddEven: 'odd' | 'even'
}

export default ({skill, oddEven}: TProps) => {
    const classNames = ['skill']


    classNames.push(
        oddEven === 'odd'
        ? 'skill--odd'
        : 'skill--even'
    )

    return (
        <div className={classNames.join(' ')}>
            <div className="skill__level">
                <Rating name="half-rating" defaultValue={skill.level} precision={0.5} readOnly />
            </div>
            <div className="skill__name">
                {skill.name}
            </div>
        </div>
    )
}