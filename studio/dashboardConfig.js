export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60ad5cc17aca922fcc5b6583',
                  title: 'Sanity Studio',
                  name: 'eeta-v-2-studio',
                  apiId: 'be45e25b-5ae6-4275-abd5-ff00b8c6b412'
                },
                {
                  buildHookId: '60ad5cc15da39d27670c65dd',
                  title: 'Portfolio Website',
                  name: 'eeta-v-2',
                  apiId: 'a396f012-8d19-450b-b057-0bfc74c72434'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitalaksjon/eeta-v2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://eeta-v-2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
