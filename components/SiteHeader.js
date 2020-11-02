import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Header, Layer, Sidebar, Text } from 'grommet';
import { Menu as MenuIcon, Close as CloseIcon } from 'grommet-icons';


const SiteSidebar = ({ onClose }) => {
  const headerLinks = [
    {label: 'Home', href: "/"},
    {label: 'About', href: "/about"},
    {label: 'Contact', href: "/contact"}
  ]

  return (
    <Layer full position="right" animation="fadeIn">
      <Box background="dark-1" pad="medium">
        <Button alignSelf="end" icon={<CloseIcon color="white" />} onClick={onClose} />
      </Box>
      <Box pad="medium" background="dark-1" style={{zIndex: 9}} fill>
        <Sidebar>
          <Box pad="medium" gap="medium" align="center" justify="center">
            {headerLinks.map((link) => {
              return (
                <Text size="xxlarge"><Link href={link.href}>{link.label}</Link></Text>
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

  const icon = showMenu ? <CloseIcon color="white" /> : <MenuIcon />
  return (
    <React.Fragment>
      <Header background="white" style={{position: "absolute", top: 0, width: '100%', zIndex: 1}} pad="medium" >
        <Box fill="horizontal" justify="between" direction="row" animation={{type: "slideUp", size: "large", duration: 1000 }}>
          <Box>
            <Link href="/">
              <Image
                style={{position: 'relative', zIndex: '-1'}}
                src={'/CR.png'}
                width={84}
                height={46}
              />
            </Link>
          </Box>
          <Box>
            <Button icon={<MenuIcon />} onClick={() => setShowMenu(true)} />
          </Box>
        </Box>

      </Header>

      { showMenu && (<SiteSidebar onClose={() => setShowMenu(false)} />) }
    </React.Fragment>

  )
}

export default SiteHeader;
