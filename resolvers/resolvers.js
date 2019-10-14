const axios = require('axios');

const fetchCompanies = async (_source, { id }, c, d) => {
    // console.log('fetchCompanies', _source, { id }, c, d);
    let companies = [];

    await axios.get(`http://localhost:3001/companies/${id || ''}`)
        .then(function (response) {
            companies = response.data;
        })

    return companies;
}

const fetchCompanyUsers = async (source, { id }, c, d) => {
    // console.log('fetchCompanyUsers', _source, { id }, c, d);
    let users = [];

    await axios.get(`http://localhost:3001/companies/${source.id}/users`)
        .then(function (response) {
            users = response.data;
        })

    return users;
}

const fetchUsers = async (_source, { id }, c, d) => {
    // console.log('fetchUsers', _source, { id }, c, d);
    let users = [];

    await axios.get(`http://localhost:3001/users/${id || ''}`)
        .then(function (response) {
            users = response.data;
        })

    return users;
}

const fetchUserCompany = async (source, { id }, c, d) => {
    // console.log('fetchUserCompanies', source, id, c, d);
    let users = [];

    await axios.get(`http://localhost:3001/companies/${source.companyId}`)
        .then(function (response) {
            users = response.data;
        })

    return users;
}

module.exports = {
    fetchCompanies,
    fetchCompanyUsers,
    fetchUsers,
    fetchUserCompany
}