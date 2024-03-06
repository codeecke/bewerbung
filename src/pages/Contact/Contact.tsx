import './Contact.scss'
import { Button, Typography } from '@mui/material'
import welcome from '../../assets/foto.jpg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

export default () => {

    const onMail = () => {
        location.href = 'mailto:michaelhammer84@gmail.com?subject='+encodeURI('Antwort auf deine Bewerbung')
    }

    const onPhone = () => {
        location.href = 'tel:015734288420'
    }

    return (
        <div className="contact">
            <h1>Michael Hammer</h1>
            <img src={welcome} alt="Foto von mir" />
            <div className='contact__nav'>
                <Button variant='contained' color='secondary' onClick={onMail}>
                    <MailOutlineIcon />
                    <Typography>E-Mail</Typography>
                </Button>
                <Button variant='contained' color='secondary' onClick={onPhone}>
                    <PhoneIcon />
                    <Typography>Telefon</Typography>
                </Button>
            </div>
        </div>
        )
}
