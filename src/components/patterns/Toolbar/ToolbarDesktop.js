import { Toolbar, Box, Fixed } from 'components/elements'
import React from 'react'

import NavContainer from './NavContainer'

import {
  NavBlog,
  NavDocs,
  NavInsights,
  NavLogo,
  NavMeta,
  NavPdf,
  NavPricing,
  NavScreenshot
} from './ToolbarLinks'

export default ({ theme }) => {
  const isDark = theme === 'dark'

  return (
    <Fixed
      zIndex={101}
      top={0}
      left={0}
      right={0}
      bg={isDark ? 'black' : 'white'}
    >
      <Box px={3} ml='auto' mr='auto'>
        <Toolbar
          aria-label='Primary Navigation'
          ml='auto'
          mr='auto'
          justifyContent='space-between'
        >
          <NavContainer as='nav'>
            <NavLogo />
            <NavMeta isDark={isDark} />
            <NavScreenshot isDark={isDark} />
            <NavPdf isDark={isDark} />
            <NavInsights isDark={isDark} />
          </NavContainer>
          <NavContainer as='nav'>
            <NavPricing isDark={isDark} />
            <NavDocs isDark={isDark} />
            <NavBlog isDark={isDark} />
          </NavContainer>
        </Toolbar>
      </Box>
    </Fixed>
  )
}
