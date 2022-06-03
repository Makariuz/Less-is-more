import './Menu.scss'

export function Menu({menuOpen, setMenuOpen}){
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul> {/* create a component for the function */}
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro"> about </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#projects"> projects </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#hobbies"> music </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact"> contact </a>
                </li>
            </ul>
        </div>
    )
}