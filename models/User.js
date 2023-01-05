module.exports = (connection, type) => {
    return connection.define('User', {
        name: type.STRING,
        email: type.STRING,
        password: type.STRING
    });
};