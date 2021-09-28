// A call is made to retrieve the license name and a short description
const axios = require("axios");

const LicenseInfo = (license) => {
  return axios.get("https://api.github.com/licenses/" + license);
};
// LicenseInfo is exported so it can be used in index.js
module.exports = LicenseInfo;