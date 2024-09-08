import React from 'react'
import Link from 'next/link'

const componentsLayout = ({children}) => {
  return (
    <section>
        <h1>welcome to components</h1>
        <Link href="/">back to page</Link>
        {children}
    </section>
  )
}

export default componentsLayout