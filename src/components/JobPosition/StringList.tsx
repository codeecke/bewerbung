type TProps = {
    title: string,
    items?: string[]
}

export default ({title, items = []}: TProps) => {
    if(items.length === 0) return <></>
    return <>
        <h2>{ title }</h2>
        <ul>
            {items?.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
    </>
}