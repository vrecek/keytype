import ContactIcons from "./ContactIcons"
import Logo from "./Logo"
import '@/css/LayoutNavigation.css'


const LayoutNavigation = () => {
    return (
        <nav className="layout-navigation">

            <Logo />
            <p className="header-name">KEYTYPE</p>
            <ContactIcons />

        </nav>
    )
}


export default LayoutNavigation