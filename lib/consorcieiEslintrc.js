// ****************************************************************************
// ****************************************************************************
// ** This is our global eslint file - and it should be implemented in every **
// ** project from now on!                                                   **
// ****************************************************************************
// ****************************************************************************

// All projects that need vue extentions!
const vueProjects = ['web', 'designSystem'];
const reactProjects = ['react'];
const frontendProjects = [...vueProjects, ...reactProjects];

module.exports = (projectPath) => {
  return {
    root: true,
    parser: !vueProjects.includes(projectPath) ? '@typescript-eslint/parser' : 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      'ecmaFeatures': {
        'jsx' : reactProjects.includes(projectPath),
        'tsx' : reactProjects.includes(projectPath)
      }
    },
    plugins: [
      'sonarjs',
      ...(reactProjects.includes(projectPath) ? ['react', 'react-hooks'] : []), // React dependencies only for WEB projects
      '@typescript-eslint'
    ],
    env: {
      node: true,
      jest: true,
      ...(frontendProjects.includes(projectPath) ? { browser: true } : {})
    },
    extends: [
      'eslint:recommended',
      ...(vueProjects.includes(projectPath) ? ['plugin:vue/essential'] : []), // Vue dependencies only for WEB projects
      ...(vueProjects.includes(projectPath) ? ['@vue/typescript'] : []), // Vue dependencies only for WEB projects
      ...(reactProjects.includes(projectPath) ? ['plugin:react/recommended'] : []), // React dependencies only for WEB projects
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:sonarjs/recommended',
      'google'
    ],
    ignorePatterns: [
      'dist/**',
      'arcanist-utils/**',
      'package.json',
      'tsconfig.json',
      'yarn.lock',
      'vue.config.js'
    ],
    rules: {
      'linebreak-style': 0,
      'max-len': [
        2,
        {
          code: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true
        }
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: true
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_'
        }
      ],
      'eol-last': 'error',
      'no-trailing-spaces': 'error',
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'valid-jsdoc': ['error', {
        'requireParamType': false,
        'requireParamDescription': false,
        'requireReturnType': false,
        'requireReturnDescription': false,
        'requireReturn': false
      }],
      ...(reactProjects.includes(projectPath) ? {
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
      } : {}),
    },
    globals: {
      ...(reactProjects.includes(projectPath) ? { React: 'writable', JSX: true } : {}),
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/e2e/**/*.{j,t}s?(x)',
          '**/tests/unit/**/*.{j,t}s?(x)',
          '**/*.spec.{j,t}s?(x)'
        ],
        rules: {
          ...(vueProjects.includes(projectPath) ? { 'vue/no-unused-vars': 0 } : {}),
          'vue/no-unused-vars': 0,
          'no-unused-vars': 0,
          'sonarjs/no-duplicate-string': 0,
          '@typescript-eslint/ban-types': 0,
          '@typescript-eslint/no-explicit-any': 0,
          '@typescript-eslint/no-var-requires': 0,
        }
      }
    ],
    ...(reactProjects.includes(projectPath) ? {
      'settings': {
        'react': {
          'version': 'detect'
        }
      }
    } : {})
  };
};
