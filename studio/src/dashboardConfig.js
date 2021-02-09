export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6022d6a823c844356338fabf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vfdyzpnh',
                  apiId: '85bfa3e3-e8ff-4c60-a229-5fac79736b21'
                },
                {
                  buildHookId: '6022d6a816349d2fe5a0d77e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kadbmykc',
                  apiId: '78a7a1af-fd81-4eab-8de1-7a313364143f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterBowater/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kadbmykc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
