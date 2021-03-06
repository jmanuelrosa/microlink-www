import { DotsBackground, Layout } from 'components/patterns'
import { Explore } from 'components/pages/home'
import { Hide } from 'components/elements'
import React from 'react'

const TITLE = 'Integrations'
const CAPTION = 'discover all the things you can do'

export default () => (
  <DotsBackground alignItems='center' justifyContent='center'>
    <Layout footer={{ bg: 'transparent' }}>
      <Hide breakpoints={[0, 1]} style={{ width: '100%' }}>
        <Explore itemsPerRow={3} title={TITLE} caption={CAPTION} width='100%' />
      </Hide>

      <Hide breakpoints={[2, 3]} style={{ width: '100%' }}>
        <Explore itemsPerRow={1} title={TITLE} caption={CAPTION} width='100%' />
      </Hide>
    </Layout>
  </DotsBackground>
)
