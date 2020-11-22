export default {
    cms_manual_init: true,
    backend: {
        // name: 'git-gateway'
        name: 'github',
        repo: 'tobkle/nextjs-netlify-cms',
        branch: 'main',
        squash_merges: true,
        //base_url: 'https://nextjs-netlify-cms-3.netlify.app',
        // base_url: 'https://nextjs-netlify-cms.vercel.app',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
        {
            name: 'pages',
            label: 'Pages',
            files: [
                {
                    label: 'Home',
                    name: 'home',
                    file: 'content/pages/home.md',
                    fields: [
                        {
                            label: 'Hero Title',
                            name: 'hero_title',
                            widget: 'string',
                        },
                        {
                            label: 'Hero Description',
                            name: 'hero_description',
                            widget: 'markdown',
                        },
                        {
                            label: 'Hero Image',
                            name: 'hero_image',
                            widget: 'image',
                        },
                    ],
                },
            ],
        },
    ],
}
