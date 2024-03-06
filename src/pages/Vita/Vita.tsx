
import cvData from '../../data/cv.json'
import JobPosition from '../../components/JobPosition/JobPosition'

export default () => {

    return <>
        <h1>Lebenslauf</h1>
        <p>Es freut mich sehr, dass Sie sich für meinen Lebenslauf interessieren.</p>
        <p>Wenn Sie zu einer Position mehr erfahren möchten, können Sie einfach darauf klicken.</p>
        <div className="cv">
            {cvData.map((position, key) => <JobPosition key={key} position={position} />)}
        </div>
    </>
}