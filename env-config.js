const prod = process.env.NODE_ENV === 'production'
const dev  = process.env.NODE_ENV === 'develop'

module.exports = {
  'process.env.BASE_URL': prod ? 'http://localhost:3333' : dev ? 'http://localhost:3332' : 'http://localhost:3000'
}