module.exports = {
  development: {
    port: process.env.PORT || 3000,
    databaseUrl: `mongodb+srv://kc1234:${process.env.DB_PASSWORD}@cluster0-1mmle.mongodb.net/softuni?retryWrites=true&w=majority`,
  },
  production: {},
};
