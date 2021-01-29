# How to Contribute

This is a simple guideline for collaborating with _trademon_.

## Commits

We use commitizen for the format of our commits.

Simply use `git cz` or just `cz` instead of `git commit` when committing. You can also use `git-cz`, which is an alias for `cz`.

Use the present tense ("Add feature" not "Added feature").
Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
Limit the first line to 72 characters or less.

The format of the commit adheres to the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) rules:

```
  <type>[optional scope]: <description>

  [optional body]

  [optional footer(s)]
```

## Submitting Changes

Please send a [GitHub Pull Request to trademon](https://github.com/gsjuradog/trademon/pull/new/main) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Branches:

- never work on features in main or dev branches.
- create "feature branch", naming convention `area_feature` (e.g. frontend_styles).
- create pull request.
- wait for approval from another pair.
- merge "feature" and "dev" branches.
- delete "feature" branch.

Issues:

-

## Coding Conventions

We use Prettier to format our code. In case of doubt we always opt for the alternative that enhances readability:

- We avoid logic in views (Redux);
- We use functional components for React (hooks etc) - use arrow function syntax

```
const Component = () => {
    return (
        <div className="component-container">
            <h1>JSX</h1>
        </div>
    )
}
```

- Scope local styles using Sass

```
.component-container {
    h1 {
        color: red;
    }
}
```

## Naming Conventions

https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md

- Variable and Function: `camelCase`
- interface: `Foo`
- Redux Actions: `ACTIONS_GO`

- Exports are done in this way:
  `export default const = {};`
