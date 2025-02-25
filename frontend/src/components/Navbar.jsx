import { Link } from 'react-router';

const NavBar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Dashboard</h1>
        </Link>
        <Link to="/SpecimensExplorer">
          <h1>SpecimensExplorer</h1>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;