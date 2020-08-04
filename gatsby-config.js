require(`dotenv`).config({
    path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    pathPrefix: "/gatsby-blog",
    siteMetadata: {
        siteTitle: "QA Hoang",
        siteTitleAlt: "QA Blog",
        siteHeadline: "A blog of daily 5 min engineering digests",
        siteUrl: "https://quanganhhoang.github.io/gatsby-blog/",
        siteDescription: "A blog of daily 5 min engineering digests",
        siteLanguage: "en",
        siteImage: "/static/banner.jpg",
        author: "QA Hoang"
    },
    plugins: [
    {
        resolve: `@lekoarts/gatsby-theme-minimal-blog`,
        // See the theme's README for all available options
        options: {
        navigation: [
            {
                title: `Blog`,
                slug: `/blog`,
            },
            {
                title: `About`,
                slug: `/about`,
            },
        ],
        externalLinks: [
            {
                name: `LinkedIn`,
                url: `https://www.linkedin.com/in/quang-anh-qa-hoang/`,
            },
            {
                name: `More`,
                url: `https://qahoang.com`,
            },
        ],
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: process.env.GOOGLE_ANALYTICS_ID,
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            // In your gatsby-transformer-remark plugin array
            plugins: [{
                resolve: 'gatsby-remark-emojis',
                options: {
                    // Deactivate the plugin globally (default: true)
                    active : true,
                    // Add a custom css class
                    class  : 'emoji-icon',
                    // In order to avoid pattern mismatch you can specify
                    // an escape character which will be prepended to the
                    // actual pattern (e.g. `#:poop:`).
                    escapeCharacter : '#', // (default: '')
                    // Select the size (available size: 16, 24, 32, 64)
                    size   : 64,
                    // Add custom styles
                    styles : {
                        display      : 'inline',
                        margin       : '0',
                        'margin-top' : '1px',
                        position     : 'relative',
                        top          : '5px',
                        width        : '25px'
                    }
                }
            }]
        }
    },
    `gatsby-plugin-sitemap`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
            short_name: `minimal-blog`,
            description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
            start_url: `/`,
            background_color: `#fff`,
            theme_color: `#6B46C1`,
            display: `standalone`,
            icons: [
                {
                src: `/android-chrome-192x192.png`,
                sizes: `192x192`,
                type: `image/png`,
                },
                {
                src: `/android-chrome-512x512.png`,
                sizes: `512x512`,
                type: `image/png`,
                },
            ],
        },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
        resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
        options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
        },
    },
    ].filter(Boolean),
}
