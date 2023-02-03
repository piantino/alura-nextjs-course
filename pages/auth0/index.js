import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Profile() {
  const { user, error, isLoading } = useUser()

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {user && 
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      }
      {!user && <a href="/api/auth/login">Login</a>}
    </>
  )
}
