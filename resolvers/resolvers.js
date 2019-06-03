const axios = require('axios');

const fetchCompanies = async (_source, { id }) => {
    let companies = [];

    await axios.get(`http://localhost:3001/companies/${id}`)
        .then(function (response) {
            companies = response.data;
        })

    return companies;
}

const fetchUsers = async (_source, { id }) => {
    let users = [];

    await axios.get(`http://localhost:3001/users/${id}`)
        .then(function (response) {
            users = response.data;
        })

    return users;
}

module.exports = {
    fetchCompanies,
    fetchUsers
}