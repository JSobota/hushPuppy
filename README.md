# hushPuppy
A "secret Santa' application that allows users to be randomly paired and selected for what ever the occasion calls for.

## Structure
The client and server code are split into two folders, each with their own `package.json` files. This means you have to run yarn/npm install in each of them. This is a good thing, as each mini-project can have their own `npm/yarn test` or `npm/yarn build` scripts. It also stops ugly merge conflicts that arise from adding and removing things from `package.json`
