
const NavLink = ({route}) => {
    return (
        <div>
            <li key={route.id} className="mr-6">
                    <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default NavLink;