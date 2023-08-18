/** Database for lunchly */
const MYPASSWORD = require("./secrets");
const pg = require("pg");

const db = new pg.Client(
  `postgresql://andreag:${MYPASSWORD}@localhost/lunchly`
);

db.connect();

module.exports = db;
