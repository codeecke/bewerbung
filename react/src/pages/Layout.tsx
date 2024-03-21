import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SubjectIcon from '@mui/icons-material/Subject';
import ConstructionIcon from '@mui/icons-material/Construction';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { Outlet, useBlocker, useNavigate } from 'react-router-dom';
import { CONTACT_URL, FAQ_URL, HOME_URL, TECH_STACK_URL, VITA_URL } from '../App';
import { useState } from 'react';

export default () => {
    const navigateTo = useNavigate()
    const is_iOS = /iP(ad|od|hone)/i.test(window.navigator.userAgent)
    const pages = [HOME_URL, VITA_URL, TECH_STACK_URL, FAQ_URL, CONTACT_URL]
    const [navigationIndex, setNavigationIndex] = useState(
        pages.indexOf(location.pathname)
    )

    const classNames = ['nav']

    if(is_iOS) classNames.push('nav--ios')
    
    useBlocker(
        ({ nextLocation }) => {
            const newIndex = pages.indexOf(nextLocation.pathname)
            setNavigationIndex(newIndex)
            return newIndex < 0
        }
      );
    

    function navigate(index: number) {
        scrollTo(0, 0)
        setNavigationIndex(index)
        navigateTo(pages[index])
    }

    return <>
    
        <div className="content">
            <Outlet />
        </div>
        <BottomNavigation
            className={classNames.join(' ')}
            showLabels
            value={navigationIndex}
            onChange={(e, newValue) => {
                e.preventDefault()
                navigate(newValue)
            }}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Lebenslauf" icon={<SubjectIcon />} />
            <BottomNavigationAction label="Tech Stack" icon={<ConstructionIcon />} />
            <BottomNavigationAction label="FAQ" icon={<QuestionMarkIcon />} />
            <BottomNavigationAction label="Kontakt" icon={<MailOutlineIcon />} />
        </BottomNavigation>
    </>;
}