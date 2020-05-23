module.exports = {
    experimental: {
      reactMode: 'concurrent'
    },
    exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
      }
    },
}
