import axios from 'axios'
import { useState } from 'react'

const defaultFormfields = {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const UpdateAccount = () => {
  const [Formfields, setFormfields] = useState(defaultFormfields)
  const { userName, firstName, lastName, email, password } =
    Formfields

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(Formfields)
    const updateuser = await axios.post(
      Formfields
    )

    setFormfields(defaultFormfields)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target
    setFormfields({ ...Formfields, [name]: value })
  }

  return (
    <div className="signUp-container">
      <h1>Update Account Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <input className='signScreen'
            type="text"
            onChange={handleChange}
            name="firstName"
            placeholder='First Name'
            value={firstName}
            required
          />
        </div>
        <div className="inputDiv">
          <input className='signScreen'
            type="text"
            onChange={handleChange}
            name="lastName"
            placeholder='Last Name'
            value={lastName}
            required
          />
        </div>

        <div className="inputDiv">
          <input className='signScreen'
            type="text"
            onChange={handleChange}
            name="userName"
            placeholder='User Name'
            value={userName}
            required
          />
        </div>
        <div className="inputDiv">
          <input className='signScreen'
            type="email"
            onChange={handleChange}
            name="email"
            placeholder='Email'
            value={email}
            required
          />
        </div>
        <div className="inputDiv">
          <input className='signScreen'
            type="password"
            name="password"
            placeholder='Password'
            onChange={handleChange}
            value={password}
            required
          />
        </div>
        <button className='updateAccountButton' >Update Account</button>
      </form>
    </div>
  )
}

export default UpdateAccount
