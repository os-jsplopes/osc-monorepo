var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "package",
        message: "Your package name",
        validate: function (input) {
          return input.length > 0;
        },
      },
      {
        type: "input",
        name: "description",
        message: "Your package description",
      },
      {
        type: "input",
        name: "scope",
        message: "Your package scope",
        default: "@os-jsplopes",
      },
      {
        type: "input",
        name: "version",
        message: "Your package version",
        default: "0.0.0",
        store: true,
      },
      {
        type: "input",
        name: "user",
        message: "Your user name",
      },
      {
        type: "input",
        name: "email",
        message: "Your user email",
        validate: function (input) {
          if (input.length) {
            return /^\S+@outsystems.com$/.test(input);
          }

          return true;
        },
      },
      {
        type: "input",
        name: "registry",
        message: "Your package registry location",
        default: "https://npm.pkg.github.com/",
      },
      {
        type: "input",
        name: "repository",
        message: "Your git repository location",
        default: "https://github.com/os-jsplopes/osc-monorepo",
      },
      {
        type: "input",
        name: "homepage",
        message: "Project Home page",
        default: "https://github.com/os-jsplopes/osc-monorepo#readme",
      },
      {
        type: "confirm",
        name: "tests",
        message: "Would you like to generate tests?",
      },
      {
        type: "confirm",
        name: "stories",
        message: "Would you like to generate stories?",
      },
    ]);
  }

  writing() {
    const destinationFolder = "packages/" + this.answers.package.replace(/\s/g, "").toLowerCase();

    this.fs.copyTpl(this.templatePath("package"), this.destinationPath(destinationFolder), {
      name: this.answers.package,
      description: this.answers.description,
      scope: this.answers.scope,
      version: this.answers.version,
      user: this.answers.user,
      email: this.answers.email,
      sourceFile: this.answers.package.replace(/\s/g, ""),
      pkgName: this.answers.package.replace(/\s/g, "").toLowerCase(),
      pkgRegistry: this.answers.registry,
      repository: this.answers.repository,
      homepage: this.answers.homepage,
    });

    if (this.answers.tests) {
      this.fs.move(
        this.destinationPath(destinationFolder + "/__tests__/package.spec.tsx"),
        this.destinationPath(destinationFolder + "/__tests__/" + this.answers.package.replace(/\s/g, "") + ".spec.tsx")
      );
    } else {
      this.fs.delete(destinationFolder + "/__tests__");
    }

    this.fs.move(
      this.destinationPath(destinationFolder + "/src/package.tsx"),
      this.destinationPath(destinationFolder + "/src/" + this.answers.package.replace(/\s/g, "") + ".tsx")
    );

    if (this.answers.tests) {
      this.fs.move(
        this.destinationPath(destinationFolder + "/src/package.stories.tsx"),
        this.destinationPath(destinationFolder + "/src/" + this.answers.package.replace(/\s/g, "") + ".stories.tsx")
      );
    } else {
      this.fs.delete(destinationFolder + "/src/package.stories.tsx");
    }
  }
};
