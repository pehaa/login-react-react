import React from "react"

const LoginForm = (props) => {
  //action="http://192.168.1.70:7777/login"
  //method = "POST"
  //
  const { setLoggedIn, setUsername } = props
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    fetch("http://192.168.1.70:7777/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        if (data.valid) {
          setLoggedIn(true)
          setUsername(data.username)
        } else {
          alert("Your credentials are not correct, try again")
        }
      })
      .catch((error) => console.log(error))
  }
  return (
    <form onSubmit={handleFormSubmit} className="mt-4">
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="username">
          username
        </label>
        <input
          className="form-control"
          id="username"
          name="username"
          required
        />
      </div>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="password">
          password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required
        />
      </div>
      <button
        name="button"
        value="buttonId"
        type="submit"
        className="btn btn-light"
      >
        submit
      </button>
    </form>
  )
}

export default LoginForm
