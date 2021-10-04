const { override, useBabelRc, addWebpackExternals } = require("customize-cra");

module.exports = override(useBabelRc(), addWebpackExternals({
    "configFake": JSON.stringify({
        apiUrl: 'http://localhost:4000'
    }),
    "config": JSON.stringify({
        apiUrl: 'http://localhost:3000/catalog'
    })

}));


