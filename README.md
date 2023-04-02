# Command

```
npm i && node ./webpack.js
```

After running this command, you should see three new files created in the `public` directory: `index.js`, `index.html`, and `index.css`.

## Output

```
→ [03:43] [CACHE]
→ [03:43] [CSS] 91.00 B /compiler_test/private/Client.css
→ [03:43] [CSS] 255.00 B /compiler_test/private/index.css
→ [03:43] [JS] 1.02 KB 1.47 second(s) /compiler_test/private/index.tsx
→ [03:43] [CACHE] 5
→ [03:43] [CSS] 91.00 B /compiler_test/private/Client.css
→ [03:43] [JS] 3.55 KB 1.04 second(s) /compiler_test/private/Client.tsx
null asset index.js 1.15 MiB [compared for emit] (name: main)
runtime modules 123 bytes 1 module
modules by path ./node_modules/ 1.1 MiB
  modules by path ./node_modules/@warden-sk/compiler/ 14.5 KiB 11 modules
  modules by path ./node_modules/react-dom/ 1000 KiB
    ./node_modules/react-dom/client.js 619 bytes [built] [code generated]
    + 2 modules
  modules by path ./node_modules/react/ 85.7 KiB
    ./node_modules/react/index.js 190 bytes [built] [code generated]
    ./node_modules/react/cjs/react.development.js 85.5 KiB [built] [code generated]
  modules by path ./node_modules/scheduler/ 17.3 KiB
    ./node_modules/scheduler/index.js 198 bytes [built] [code generated]
    ./node_modules/scheduler/cjs/scheduler.development.js 17.1 KiB [built] [code generated]
modules by path ./private/*.tsx 4.57 KiB
  ./private/index.tsx 1.02 KiB [built] [code generated]
  ./private/Client.tsx 3.55 KiB [built] [code generated]
webpack 5.77.0 compiled successfully in 2845 ms
```

# Compiler options

```ts
{
  assets: ['./index.css', './index.js'],
  outputPath: './public',
  publicPath: 'http://127.0.0.1',
  reportErrors: true,
  useServer: true,
  useTransformers: true,
}
```
