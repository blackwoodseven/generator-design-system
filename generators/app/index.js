'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    this.argument('src', { type: String, required: false })
    this.argument('name', { type: String, required: false })
  }

  prompting() {
    // Have Yeoman greet the user.
    var done = this.async()
    this.log(yosay('Welcome to the ' + chalk.red('redux boilerplate') + ' generator!'))

    const prompts = [
      {
        type: 'list',
        name: 'options',
        message: 'What do you want to create?',
        choices: [
          { key: 'Single Component', value: 'singleComponent' },
          { key: 'Multiple Component', value: 'multipleComponent' }
        ],
        default: 'singleComponent'
      },
      {
        type: 'input',
        message: `What's the name of your component? (Use PascalCase)`,
        name: 'name'
      },
      {
        type: 'confirm',
        message: `Do you want it stateless?`,
        name: 'isStateless',
        default: true,
        when: answers => {
          return answers.options === 'singleComponent'
        }
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer
      this.props = props
      console.log('You chose ', this.props)
      done()
    })
  }

  writing() {
    let suffix = 'Stateless'
    if (this.props.isStateless !== undefined) {
      suffix = this.props.isStateless ? 'Stateless' : 'Stateful'
    }

    if (this.props.options === 'singleComponent') {
      this.fs.copyTpl(
        this.templatePath(`_Component/_index${suffix}.js`),
        this.destinationPath(`src/components/${this.props.name}/index.js`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_Component/_styles.css`),
        this.destinationPath(`src/components/${this.props.name}/styles.css`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_Component/_README.md`),
        this.destinationPath(`src/components/${this.props.name}/README.md`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_Component/_test.js`),
        this.destinationPath(`src/components/${this.props.name}/test.js`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_Component/_stories.js`),
        this.destinationPath(`src/components/${this.props.name}/stories.js`),
        {
          name: this.props.name
        }
      )
    }
    if (this.props.options === 'multipleComponent') {
      this.fs.copyTpl(
        this.templatePath(`_MultipleComponent/_index.js`),
        this.destinationPath(`src/components/${this.props.name}/index.js`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_Component/_index${suffix}.js`),
        this.destinationPath(`src/components/${this.props.name}/Component1/index.js`),
        {
          name: 'Component1'
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_Component/_styles.css`),
        this.destinationPath(`src/components/${this.props.name}/Component1/styles.css`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_Component/_index${suffix}.js`),
        this.destinationPath(`src/components/${this.props.name}/Component2/index.js`),
        {
          name: 'Component2'
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_Component/_styles.css`),
        this.destinationPath(`src/components/${this.props.name}/Component2/styles.css`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_MultipleComponent/_README.md`),
        this.destinationPath(`src/components/${this.props.name}/README.md`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_MultipleComponent/_test.js`),
        this.destinationPath(`src/components/${this.props.name}/test.js`),
        {
          name: this.props.name
        }
      )
      this.fs.copyTpl(
        this.templatePath(`_MultipleComponent/_stories.js`),
        this.destinationPath(`src/components/${this.props.name}/stories.js`),
        {
          name: this.props.name
        }
      )
    }
  }
}
