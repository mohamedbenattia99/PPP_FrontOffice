const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = withPlugins([withImages()]);
