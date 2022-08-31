import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import { ColorProvider } from './Context/ColorContext';

import { Provider } from 'react-redux';
import store from './Redux/store';
import '../../App.css';
import Context from './Context';
import Recoil from './Recoil';
import Redux from './Redux';


export default function App() {
    return (
        <Router>
            <Provider store={store}>
                <ColorProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="redux" element={<Redux />} />
                            <Route path="recoil" element={<Recoil />} />
                            <Route path="context" element={<Context />} />
                        </Route>
                    </Routes>
                </ColorProvider>
            </Provider>
        </Router>
    )
}

function Layout() {
    return (
        <div>
            <h1>Welcome to the app!</h1>
            <nav style={{ width: '100%', display: 'grid', gridAutoFlow: 'column', justifyItems: 'center' }}>
                <Link to="/">Home</Link>
                <Link to="redux">Redux</Link>
                <Link to="recoil">Recoil</Link>
                <Link to="context">Context</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
