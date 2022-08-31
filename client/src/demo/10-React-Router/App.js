import { useState } from 'react'
import {
    Routes,
    Route,
    Link,
    Outlet,
    BrowserRouter
} from "react-router-dom";
import '../../App.css';
import Home from './Home';
import LeagueStandings from './LeagueStandings';
import NewTeamForm from './NewTeamForm';
import Team from './Team';
import Teams from './Teams';
/* 
^ Add one new route and add one new nested route
^ Go to Team.js and add useParams hook to pull 
^ in team number and display it on the page
*/
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="teams" element={<Teams />}>
                        <Route path=":teamId" element={<Team />} />
                        <Route path="new" element={<NewTeamForm />} />
                        <Route index element={<LeagueStandings />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Layout() {
    const [teamNum, setTeamNum] = useState('')
    const [error, setError] = useState(false);
    const handleTeamChange = ({ target: { value } }) => {
        if (isNaN(value)) return handleSetError();
        setTeamNum(value)
    }
    const handleSetError = () => {
        setError(true)
        setTeamNum("Team must be a number")
    }
    const checkError = error ? "red" : "black"
    const styles = {
        color: checkError
    }
    return (
        <div>
            <h1 style={{ width: '100%', display: 'grid', gridAutoFlow: 'column', justifyItems: 'center' }}>Welcome to the app!</h1>
            <nav style={{ width: '100%', display: 'grid', gridAutoFlow: 'column', justifyItems: 'center' }}>
                <Link to="/">Home</Link>
                <Link to="teams">Teams</Link>
                {teamNum ? <Link to={`teams/${teamNum}`}>TeamID</Link> :
                    <input type='text' style={styles} value={teamNum} placeHolder="Enter team number" onChange={handleTeamChange} />
                }

                <Link to="teams/new">NewTeam</Link>
                <Link to="teams/">LeagueStandings</Link>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
