import { useNavigate } from 'react-router-dom'
import foto from '../assets/foto.jpg'
import { VITA_URL } from '../App'
export default () => {
    const navigate = useNavigate()

    return (
        <img 
            className='welcome' 
            src={foto} 
            alt="Hi, Ich bin Micha!"
            onClick={() => navigate(VITA_URL)}
             />
    )
}