import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="container" style={{margin: "4px"}}>
        <h1>Home</h1>
        <p>
          Hello world, this is a simple React app.
        </p>
        <Link href="/hello">
          <a className="link" style={{textDecoration: "underline"}}>Visit hello world</a>
        </Link>
      </div>
    </>
  )
}
