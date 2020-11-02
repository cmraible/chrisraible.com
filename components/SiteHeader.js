import { Box, Button, Header, Layer, Sidebar, Text } from 'grommet';
import { Close as CloseIcon, Menu as MenuIcon } from 'grommet-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';


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
  const [background, setBackground] = useState({
    color: "white",
    opacity: 0
  })
  const router = useRouter();

  // Change the header to white background when page is scrolled
  useEffect(() => {
    // Because Grommet is overflow: auto, need to get grommet div element instead of window.scroll
    document.querySelector('#grommetContainer').addEventListener('scroll', (e) => {
      if (e.target.scrollTop > 0) {
        setBackground({
          color: "white",
          opacity: 1
        })
      } else {
        setBackground({
          color: "white",
          opacity: 0
        })
      }
    })
  }, []);

  const icon = showMenu ? <CloseIcon color="white" /> : <MenuIcon />
  return (
    <React.Fragment>
      <Header background={background} pad="medium">
        <Box direction="row" fill="horizontal" justify="between">
          <Box onClick={() => router.push('/')} animation={{type: 'slideUp', duration: 1000, size: "medium"}}>
            <Image
              src={'/CR.png'}
              loading="eager"
              priority
              alt="CR Logo"
              width={84}
              height={46}
            />
          </Box>
          <Box animation={{type: 'slideUp', duration: 500, size: "medium"}}>
            <Button icon={<MenuIcon />} onClick={() => setShowMenu(true)} />
          </Box>
        </Box>

      </Header>

      { showMenu && (<SiteSidebar onClose={() => setShowMenu(false)} />) }
    </React.Fragment>

  )
}

export default SiteHeader;
