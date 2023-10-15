# eslint-config-consorciei

## How to create a new release
1. Make the modification you want
2. Update the version on package.json
3. Create a new PR
4. Push to master after approved
5. Go to action and dispatch the workflow Release.yml

## How to use
See example folder

## References
- [recommended-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-type-checked.ts)
- [stylistic-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts)
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/tree/main#typescript)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)

## FAQ

#### Why not integrate with prettier?
https://prettier.io/docs/en/integrating-with-linters


#### What about react lint
just add on your `.eslintrc.js`:
```js
module.exports = {
  extends: ['@consorciei/react']
}
```


