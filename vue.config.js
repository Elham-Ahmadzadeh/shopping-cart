module.exports = {
  pwa: {
    manifestOptions: {
      background_color: "hotpink",
      display: "standalone",
      name: "ECommerce",
      short_name: "ECO",
      start_url: ".",
      themeColor: "blue",
    },
    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 11,
          },
          urlPattern: /^https:\/\/fakestoreapi\.com\/products.*$/,
        },
      ],
    },
  },
}
