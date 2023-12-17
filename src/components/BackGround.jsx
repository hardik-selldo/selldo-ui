import React from 'react'

export default function BackGround({ url }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        filter: 'blur(2px)',
        zIndex: -1
      }}
    >
      <img style={{ width: '100%', height: '100%' }} src={url} alt='Background Image' />
    </div>
  )
}
