# eslint-config-consorciei

## How to create a new release
1. Make the modification you want
2. Update the version on package.json (Semver)
3. Create a new PR
4. Push to master after approved
5. Go to action and dispatch the workflow Release.yml

## How to use

### Create a file .npmrc
```
//npm.pkg.github.com/:_authToken={GITHUB-PAT-TOKEN}
@consorciei:registry=https://npm.pkg.github.com
always-auth=true
```

### Install
```
npm i -D @consorciei/eslint-config
yarn add -D @consorciei/eslint-config
```

### Config

See example folder

## References
- [recommended-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-type-checked.ts)
- [stylistic-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts)
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/tree/main#typescript)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-tsdoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)

## FAQ

#### Why not integrate with prettier?
<https://prettier.io/docs/en/integrating-with-linters>


#### What about react lint
just change on your `.eslintrc.js`:
```js
module.exports = {
  extends: ['@consorciei/react']
}
```

#### How to create PAT
<https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token>

