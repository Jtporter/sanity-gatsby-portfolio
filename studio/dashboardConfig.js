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
                  buildHookId: '5e33325e79dfa8717bb057f8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e76faubm',
                  apiId: 'f2b4f501-0440-4c90-a0bf-0db129c0f06c'
                },
                {
                  buildHookId: '5e33325f019e4f900e8700d9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qdemzjd3',
                  apiId: '86b8dab1-94dc-40cf-bef1-16b0bfa9b107'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jtporter/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qdemzjd3.netlify.com',
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
