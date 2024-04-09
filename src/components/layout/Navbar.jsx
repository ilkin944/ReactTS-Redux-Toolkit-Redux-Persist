import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Ana sehife</NavLink>
            <NavLink to="/haqqimizda">Haqqimizda</NavLink>
            <NavLink to="/elaqe">Elaqe</NavLink>
            <NavLink to="/xidmetler">Xidmetler</NavLink>
            <NavLink to="/xidmetler/web">Web Xidmetler</NavLink>
            <NavLink to="/xeberler">Xeberler</NavLink>
            <NavLink to="/xeberler/son-xeber">Son xeber</NavLink>
            <NavLink to="/xeberler/ic-xeber">IC xeber</NavLink>
        </nav>
    )
}
