module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Mysql@2023",
  DB: "esp_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};