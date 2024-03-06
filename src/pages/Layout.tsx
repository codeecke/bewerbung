import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SubjectIcon from '@mui/icons-material/Subject';
import ConstructionIcon from '@mui/icons-material/Construction';
import PersonIcon from '@mui/icons-material/Person';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HomeIcon from '@mui/icons-material/Home';
import { Outlet, useNavigate } from 'react-router-dom';
import { FAQ_URL, HOME_URL, TECH_STACK_URL, VITA_URL } from '../App';
import { useState } from 'react';

export default () => {
    const navigateTo = useNavigate()
    const pages = [HOME_URL, VITA_URL, TECH_STACK_URL, FAQ_URL]
    const [navigationIndex, setNavigationIndex] = useState(
        pages.indexOf(location.pathname)
    )

    function navigate(index: number) {
        setNavigationIndex(index)
        navigateTo(pages[index])
    }

    return <>
    
        <div className="content">
            <Outlet />
        </div>
        <BottomNavigation
            className='nav'
            showLabels
            value={navigationIndex}
            onChange={(event, newValue) => navigate(newValue)}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Lebenslauf" icon={<SubjectIcon />} />
            <BottomNavigationAction label="Tech Stack" icon={<ConstructionIcon />} />
            <BottomNavigationAction label="FAQ" icon={<QuestionMarkIcon />} />
        </BottomNavigation>
    </>;
}