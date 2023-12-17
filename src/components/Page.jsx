import React from 'react'

export default function Page({ children, style }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minWidth: '100vw',
      minHeight: '100vh',
      ...style
    }}>
      {children}
    </div>
  )
}
