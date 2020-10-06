import React, { useState } from "react"
import LoginForm from "./components/LoginForm.js"
import Dashboard from "./components/Dashboard.js"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const handleButtonClick = () => {
    setLoggedIn(false)
    setUsername("")
  }
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Authentification</h1>
      {!loggedIn && (
        <LoginForm setLoggedIn={setLoggedIn} setUsername={setUsername} />
      )}
      {loggedIn && (
        <>
          <Dashboard username={username} />
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleButtonClick}
          >
            Log out
          </button>
        </>
      )}
    </div>
  )
}

export default App
