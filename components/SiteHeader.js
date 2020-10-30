import React from 'react';
import Link from 'next/link';
import { Box, Header, Menu, Main, ResponsiveContext, Text } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

const SiteHeader = () => {
  const headerLinks = [
    {label: 'About', href: "/about"},
    {label: 'Services', href: "/services"},
    {label: 'Contact', href: "/contact"}
  ]
  return (
      <Header background="light-1" pad="medium">
        <Link href="/">Chris Raible</Link>
        <ResponsiveContext>
          { size =>
              size === 'small' ? (
                <Box>
                    <Menu
                        items={headerLinks}
                        icon={<MenuIcon />}
                        dropAlign={{'top': 'top', 'right': 'right'}}
                        justifyContent="end"
                    />
                </Box>
              ) : (
                <Box direction="row" gap="medium">
                    {headerLinks.map((link) => {
                        return <Link href={link.href}>{link.label}</Link>
                    })}
                </Box>
              )
          }
        </ResponsiveContext>
      </Header>
  )
}

export default SiteHeader;
