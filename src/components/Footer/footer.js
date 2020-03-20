import React from 'react'

export default function footer() {
    return (
        <footer>
          © {new Date().getFullYear()}, copy rights to Alieniz
          {` `}
          <a href="https://www.alieniz.com">Alieniz</a>
        </footer>
    )
}
