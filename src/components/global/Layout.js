import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>
}

const BaseLayout = styled.section`
  margin: 150px auto;
  max-width: 1200px;
`

export default Layout
