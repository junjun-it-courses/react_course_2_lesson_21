import './style.css'

/*  Добавляем ссылки */
import {Link, Outlet} from "react-router-dom";
import { getInvoices } from "../../data/fakeData";

const Nav = () => {
    let invoices = getInvoices();

    return <div>
        <nav className='navigation-example'>
            <Link to="/">Home Page</Link>

            <Link to="/expenses">Expenses</Link>

            <Link to="/invoices">Invoices</Link> |
            {invoices.map((invoice, index) => (
                <Link
                    to={`/invoices/${index}`}
                    key={invoice.number}
                >
                    {invoice.name}
                </Link>
            ))}
        </nav>
    </div>
}


export default Nav;
