module.exports = {
  development: {
    database_url: 'mongodb://localhost/easymeals-express_development'
  },

  test: {
    database_url: 'mongodb://localhost/easymeals-express_test'
  },

  production: {
    database_url: process.env.DATABASE_URL
  }
}
