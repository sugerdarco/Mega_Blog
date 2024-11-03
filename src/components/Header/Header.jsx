import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../Logo.jsx";
import {Container, Logo, LogoutBtn} from "../index.js";

const Header = () => {
  const authStatus = useSelector(state => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      path: "/",
      active: true
    },
    {
      name: 'Login',
      path: "/login",
      active: !authStatus
    },{
      name: 'Signup',
      path: "/signup",
      active: !authStatus
    },{
      name: 'All Posts',
      path: "/all-posts",
      active: authStatus
    },{
      name: 'Add-Post',
      path: "/add-post",
      active: authStatus
    },
  ]

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div classNme="me-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(navItem => (
              navItem.active ? (
                <li key={navItem.name}>
                  <button
                    onclick={() => navigate(navItem.path)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
                    {navItem.name}
                  </button>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;