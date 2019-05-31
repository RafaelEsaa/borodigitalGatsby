import React from "react"

import Menu from './Menu';

const Header = (props) => {
  const { location, menuFixed } = props;
  return (
    <header>
      <Menu logo="logo-boro2" menuFixed={menuFixed} location={location} />
    </header>
  )
}

export default Header
