import ContactIcons from "./ContactIcons"
import Logo from "./Logo"
import '@/css/LayoutNavigation.css'


const LayoutNavigation = () => {
    return (
        <nav className="layout-navigation">

            <Logo />
            <h1>KEYTYPE</h1>
            <ContactIcons />

        </nav>
    )
}


export default LayoutNavigation