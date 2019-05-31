export default {
    name: 'react-treebeard',
    id: 1,
    toggled: true,
    active: false,
    children: [{
            name: 'example',
            children: [{
                    name: 'app.js'
                },
                {
                    name: 'data.js'
                },
                {
                    name: 'index.html'
                },
                {
                    name: 'styles.js'
                },
                {
                    name: 'webpack.config.js'
                }
            ]
        },
        {
            name: 'node_modules',
            // loading: true,
            children: [{
                name: 'nepkoder',
                children: [{
                        name: 'sujan '
                    },
                    {
                        name: 'nepkoder'
                    }
                ]
            }]
        },
        {
            name: 'src',
            children: [{
                    name: 'components',
                    children: [{
                            name: 'decorators.js'
                        },
                        {
                            name: 'treebeard.js'
                        }
                    ]
                },
                {
                    name: 'index.js'
                }
            ]
        },
        {
            name: 'themes',
            children: [{
                    name: 'animations.js'
                },
                {
                    name: 'default.js'
                }
            ]
        },
        {
            name: 'Gulpfile.js'
        },
        {
            name: 'index.js'
        },
        {
            name: 'package.json'
        }
    ]
};