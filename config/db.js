const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'rrdtevabydramy',
    host: 'ec2-54-170-163-224.eu-west-1.compute.amazonaws.com',
    database: 'd8ipnq2hkh60ac',
    password: '917144f1b3e536fb88cd1b36cf98a316358d50cf752b9d971b3c2a624f83db17',
    port: 5432,
    ssl: {
      rejectUnauthorized: false
    }
  });

module.exports = pool;