export const isValidEmail = (email) => {
  // eslint-disable-next-line
  const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailPattern.test(email) ? null : 'Invalid email address'
}

export const isRequire = (value) => {
  if (value) return null

  return 'Field is require'
}

export const isMinLength = (length) => {
  return (value) => {
    if (value.length < length)
      return `Minimum length ${length} characters`

    return null
  }
}
