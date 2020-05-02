module.exports = {
  pathPrefix: "/portfolio-light-gatsby",
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300,400,400i,700`,
          `IBMPlexMono\:400, 700`,
          `BioRhyme\:200, 300, 400`,
          `Space Mono\:700`,
        ],
        display: "swap",
      },
    },
  ],
};
