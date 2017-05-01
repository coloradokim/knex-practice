module.exports = {
  test: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/library_test'
    }
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/library'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
