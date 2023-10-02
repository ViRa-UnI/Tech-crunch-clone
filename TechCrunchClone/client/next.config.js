module.exports = {
  reactStrictMode: true,
  env: {
    DB_CONNECTION: process.env.DB_CONNECTION,
    SECRET_KEY: process.env.SECRET_KEY,
    PORT: process.env.PORT,
  },
};