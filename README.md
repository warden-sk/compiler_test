# Command

```
npm i && node ./webpack.js
```

After running this command, you should see three new files created in the `public` directory: `index.js`, `index.html`, and `index.css`.

## Output

```
→ [16:19] [CSS] 91.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [16:19] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [16:19] [JS] 1.05 KB 1.61 second(s) /Users/marekkobida/Documents/compiler_test/private/index.tsx
→ [16:19] [SERVER] http://127.0.0.1
→ [16:19] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [16:19] [CSS] 91.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [16:19] [JS] 3.58 KB 1.29 second(s) /Users/marekkobida/Documents/compiler_test/private/Client.tsx
→ [16:19] [CSS] 91.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
null asset index.js 1.15 MiB [compared for emit] (name: main)
runtime modules 123 bytes 1 module
modules by path ./node_modules/ 1.1 MiB
  modules by path ./node_modules/@warden-sk/compiler/ 14.5 KiB 11 modules
  modules by path ./node_modules/react-dom/ 1000 KiB 3 modules
  modules by path ./node_modules/react/ 85.7 KiB 2 modules
  modules by path ./node_modules/scheduler/ 17.3 KiB 2 modules
modules by path ./private/ 4.62 KiB
  modules by path ./private/*.tsx 4.62 KiB
    ./private/index.tsx 1.05 KiB [built] [code generated]
    ./private/Client.tsx 3.58 KiB [built] [code generated]
  modules by path ./private/*.css 2 bytes
    ./private/index.css 1 bytes [built] [code generated]
    ./private/Client.css 1 bytes [built] [code generated]
webpack 5.77.0 compiled successfully in 3257 ms
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
