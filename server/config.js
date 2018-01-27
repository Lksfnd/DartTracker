/**
 * This file contains all the configuration for the server.  
 */
// This is just demo data for the local test environment
module.exports = {
    dbUser: "rootuser",
    dbPassword: "root",
    dbName: "darttracker",
    dbHost: "127.0.0.1",
    dbPort: 27017,
    databaseTimeToWait: 10, // time in ms,
    // This is the secret used to create JSON Web Token
    // changing this is VERY IMPORTANT before deploying!
    authSecret: "FLEscfHBR75jT2BNAEBv7AxmMAn6bNvX",
    accountLimit: 5, // allow up to 5 accounts per ip-adress,
    getSessionTime() {
        return Date.now() + (1000 * 60 * 60 * 24);
    }
};