import './header.scss'

import HeaderUser from "./user/header-user";
import MainHeader from "./main/main-header";

const Header = () => {
    return (
        <header className="header">
            <HeaderUser />
            <MainHeader />
        </header>
    )
}

export default Header
