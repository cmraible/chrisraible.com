import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Header, Layer, Sidebar, Text } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';


const SiteSidebar = ({ }) => {
  const headerLinks = [
    {label: 'Home', href: "/"},
    {label: 'Services', href: "/services"},
    {label: 'Tech', href: "/tech"},
    {label: 'About', href: "/about"},
  ]

  return (
    <Layer full="vertical" background="black" position="right">
      <Box pad="medium" background="black" width="medium" fill="vertical">
        <Sidebar>
          <Box pad="medium" gap="large">
            {headerLinks.map((link) => {
              return (
                <Button
                  href={link.href}
                  children={() => (
                    <Box fill="horizontal" pad="medium">
                      <Text color="white">{link.label}</Text>
                    </Box>
                  )}
                  />
              )
            })}
          </Box>
        </Sidebar>
      </Box>

    </Layer>
  )
}

const SiteHeader = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  const icon = showMenu ? <CloseIcon color="white" /> : <MenuIcon />
  return (
    <React.Fragment>
      <Header background="white" style={{position: "absolute", top: 0, width: '100%'}} pad="medium" >
        <Box fill="horizontal" justify="between" direction="row" animation={{type: "slideUp", size: "large", duration: 1000 }}>
          <Box>
            <Link href="/">
              <Image
                src={'/CR.svg'}
                width={84}
                height={46}
              />
            </Link>
          </Box>
          <Box>
            <Button style={{zIndex: 9999}} icon={icon} onClick={toggleShowMenu} />
          </Box>
        </Box>

      </Header>

      { showMenu && (<SiteSidebar />) }
    </React.Fragment>

  )
}

export default SiteHeader;
