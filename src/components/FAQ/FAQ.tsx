import './FAQ.scss'
import { TQuestion } from "../../types/TQuestion"
import { useState } from 'react'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'

type TProps = {
    question: TQuestion
}

export default ({question}: TProps) => {
    const [open, setOpen] = useState(false)
    const linkRegEx = /\(([^\)]+)\)\[([^\]]+)\]/g

    if(!Array.isArray(question.answer))
        question.answer = [question.answer]

    const answer = question.answer.map((answer, key) => {
        const result = answer.matchAll(linkRegEx)
        do {
            const row = result.next()
            if(row.done) break
            answer = answer.replace(
                row.value[0], 
                `<a href="${row.value[1]}" target="_blank">${row.value[2]}</a>`
            )
        } while(true)
        return <p key={key} dangerouslySetInnerHTML={{__html: answer}}></p>
    })

    return (
        <Paper elevation={3} className="faq" onClick={() => setOpen(!open)}>
            <div className="faq__question">{question.question}</div>
            {open && <div className="faq__answer">{answer}</div>}
        </Paper>
    )
}