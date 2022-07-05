import Nav from './components/Nav';
import NavRoutes from './components/NavRoutes';
import {Outlet} from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Bookkeeper!</h1>

            Меню: <Nav/>

            <hr/>

            <NavRoutes />


            <footer style={{backgroundColor: '#333', color: '#fff'}}>
                <h1>Hello world</h1>
            </footer>

        </div>
    );
}

