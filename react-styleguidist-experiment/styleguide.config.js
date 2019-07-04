module.exports = {
    title: "Axiom",
    pagePerSection: true,
    sections: [
        {
            name: 'Introduction',
            content: 'docs/introduction.md'
        },
        {
            name: 'UI Components',
            components: 'src/components/**/*.js',
            exampleMode: 'expand',
            usageMode: 'expand'
        }
    ],
    styles: {
        SectionHeading: {
            wrapper: {
                'margin-bottom': '24px'
            }
        }
    }
}