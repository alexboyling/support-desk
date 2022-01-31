const registerUser = (res, req) => {
  res.send('Register Route')
}

const loginUser = (res, req) => {
  res.send('Login Route')
}

module.exports = {
  registerUser,
  loginUser
}