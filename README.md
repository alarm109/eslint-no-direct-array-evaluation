# eslint-plugin-no-direct-array-evaluation

Disallow direct evaluation of array literals inside if statement.

---

#### Why?
If an array's length is 0, then it returns `true`, this can lead to unexpected behavior. 
Therefore, this rule enforces to use `length` inside if statements, when variable is an array,
or to check if an array is defined.

## Install

```
npm install --save-dev eslint-plugin-no-direct-array-evaluation
```

```
yarn add -D eslint-plugin-no-direct-array-evaluation
```

---

### ❌ Incorrect

```ts
const foo: number[] | undefined = [];

if (foo) {}
```

### ✅ Correct

```ts
const foo: number[] | undefined = [];

if (foo?.length === 0) {}
```

```ts
const foo: number[] | undefined = [];

if (foo?.length > 0) {}
```

```ts
const foo: number[] | undefined = [];

if (foo !== undefined) {}
```

```ts
const foo: number[] | undefined = [];

if (!foo) {}
```
