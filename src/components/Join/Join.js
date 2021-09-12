import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './Join.css'

export default function SignIn() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const history = useHistory()

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <button
          disabled={!name || !room}
          onClick={() => history.push(`/chat?name=${name}&room=${room}`)}
          className={'button mt-20'}
          type="submit"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}
