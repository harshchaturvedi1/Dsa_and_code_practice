- typed superset of javascript
- compiles down to plain javascript

- relation to javascript
- optional static typing and inference

### why

- js is dynammcally typed and so js don't know type of variable until code is compiled.
- so typescript adds "type" support to js
- ide support
- .js -> .ts
- angular is programmed in typescript

### how

- install node latest version
- install typescript
- npm install -g typescript
- to run files -> tsc <fileName>
- it will compile code into plain and put in separate js file with same name which will contain transpiled code

### imp

- files in ts are treated as scripts rather than modules
- to treat file as module add "export" on top of file in main.ts
- to auto run file when save -> tsc <fileName> --watch -> e.g -> tsc main --watch

### in ts

- variable declarations
- variable types
- let and const -> block level scoping
- let needs not to be initialize when declared while in const it needs to initialized when declared

### to assign a type in ts

- assign type after colan

```let <variableNAme> : <variableType> = <variableValue>
    e.g let isBoolean : boolean = true
```

### what is use of ts

- static typeChecking
- throws error while compiling -> when assigned other values
