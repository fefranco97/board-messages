function generateRandomUUID() {
  return crypto.randomUUID().toString()
}

module.exports = {
  generateRandomUUID,
}
