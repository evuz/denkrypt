export const maxScore = 6

const options = {
  isLong: 6,
  isVeryLong: 12
}

export function passwordScore (password) {
  if (!password) {
    return 0
  }

  const isLong = password.length >= options.isLong
  const isVeryLong = password.length >= options.isVeryLong
  const hasLowercase = /[a-z]/.test(password)
  const hasUppercase = /[A-Z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasNonalphas = /\W/.test(password)

  return hasUppercase + hasLowercase + hasNumbers + hasNonalphas + isLong + isVeryLong
};
