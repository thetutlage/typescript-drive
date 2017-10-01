# Dummy project

> Please get intellisense working for a given driver inside `app.ts` file. 

I am never in favor of using superset of Javascript, let it be **Coffeescript** or **Typescript**. The reason is pretty simple that it slows me down.

A lot of people still argues that Typescript is a good choice for large projects, which has complex implementations and strong typing + autocomplete helps.

So I am giving it a try to see how it feels.

## Setup
Make sure to run following commands

```bash
npm install typescript --save-dev
npm install @types/node --save-dev
node ./node_modules/typescript/lib/tsc --init
```

And run it as

```bash
npm start
```

## What is project?
So here's a project called [node-flydrive](https://github.com/Slynova-Org/node-flydrive), it's job is to let you interact with the file-system with drivers based approach.

1. By default, project ships with 2 drivers, one for `local file system` and one for `s3`.
2. There is a simple way to extend and add dynamic drivers.

So this is a simple project and functionality is not a killer, since it is fine to have driver based modules or libraries.

## What is in this repo?
This repo doesn't contains the actual implementation, but just has couple of `Classes` to see how Typescript will work with driver based approach. **(Some people call it adapter pattern too)**.

## No interfaces please
We cannot have an interface, since I do not want drivers to have only methods, that are defined inside the interface only.

For example: `s3` driver can have additional methods like:

1. `getBucket`
2. `getTemporaryUrl`

Which are not valid for a local file system driver.

So there needs to be some dynamism, since I am using **Javascript** and not **Java**.

## Hard times
Since, I am using Typescript for the first time, below is the list of issues I face.

#### Not recognizing node.js inbuilts
1. So I created the project and typescript complains that `path` module is not found + `__dirname` is not defined.
2. Install `ts-node` module and the problem is still there.
3. Created `tsconfig.json` file with following contents and problem still persists.
```js
{
  "compilerOptions": {
    "types": [
      "node"
    ]
  }
}
```
4. So it worked finally, check **Setup** for more info.