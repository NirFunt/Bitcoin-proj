import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <div className="app-header">
      <div>LOGO</div>
      <div>
        <NavLink activeClassName="link-active" exact to={'/'}>Home</NavLink> |
        <NavLink activeClassName="link-active" to={'/contact'}>Contacts</NavLink> |
        <NavLink activeClassName="link-active" to={'/chart'}>Charts</NavLink>
      </div>
    </div>
  );
}
