import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <div className="app-header">
      <div>LOGO</div>
      <div>
        <NavLink to={'/'}>Home</NavLink> |
        <NavLink to={'/contact'}>Contacts</NavLink> |
        <NavLink to={'/chart'}>Charts</NavLink>
      </div>
    </div>
  );
}
