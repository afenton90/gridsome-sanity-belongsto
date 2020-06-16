// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { api: sanityApi } = require('../studio/sanity.json')

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: sanityApi.projectId,
        dataset: sanityApi.dataset,
      },
    },
  ],
}
