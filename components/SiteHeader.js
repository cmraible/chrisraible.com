import { Box, Button, Header, Layer, Sidebar, Text } from 'grommet';
import { Close as CloseIcon, Menu as MenuIcon } from 'grommet-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


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
                <Text size="xxlarge" onClick={onClose}><Link href={link.href}>{link.label}</Link></Text>
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
  const router = useRouter();

  const icon = showMenu ? <CloseIcon color="white" /> : <MenuIcon />
  return (
    <React.Fragment>
      <Header background="white" style={{position: "absolute", top: 0, width: '100%', zIndex: 1}} pad="medium" >
        <Box fill="horizontal" justify="between" direction="row" animation={{type: "slideUp", size: "large", duration: 1000 }}>
          <Box onClick={() => router.push('/')}>
              <Image
                style={{position: 'relative', zIndex: '-1'}}
                src={'/CR.png'}
                alt="CR Logo"
                width={84}
                height={46}
              />
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
