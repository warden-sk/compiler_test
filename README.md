# Command

```
npm i && node ./webpack.js
```

After running this command, you should see three new files created in the `public` directory: `index.js`, `index.html`, and `index.css`.

## Output

```
→ [12:29]
   ____                       _       _     _     ____   ___ ____  _____
  / ___|___  _ __  _   _ _ __(_) __ _| |__ | |_  |___ \ / _ \___ \|___ /
 | |   / _ \| '_ \| | | | '__| |/ _` | '_ \| __|   __) | | | |__) | |_ \
 | |__| (_) | |_) | |_| | |  | | (_| | | | | |_   / __/| |_| / __/ ___) |
  \____\___/| .__/ \__, |_|  |_|\__, |_| |_|\__| |_____|\___/_____|____/
            |_|    |___/        |___/
  __  __                _      _  __     _     _     _
 |  \/  | __ _ _ __ ___| | __ | |/ /___ | |__ (_) __| | __ _
 | |\/| |/ _` | '__/ _ \ |/ / | ' // _ \| '_ \| |/ _` |/ _` |
 | |  | | (_| | | |  __/   <  | . \ (_) | |_) | | (_| | (_| |
 |_|  |_|\__,_|_|  \___|_|\_\ |_|\_\___/|_.__/|_|\__,_|\__,_|

→ [12:29] [CSS] 91.36 KB ./node_modules/@warden-sk/compiler/design.css
→ [12:29] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [12:29] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [12:29] [JS] 1.05 KB 1.64 second(s) /Users/marekkobida/Documents/compiler_test/private/index.tsx
→ [12:29] [SERVER] http://127.0.0.1, http://192.168.100.129
→ [12:29] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [12:29] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [12:29] [JS] 3.98 KB 1.13 second(s) /Users/marekkobida/Documents/compiler_test/private/Client.tsx
→ [12:29] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [12:29] [JS] 1.37 KB 1.16 second(s) /Users/marekkobida/Documents/compiler_test/private/Input.tsx
→ [12:29] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [12:29] [JS] 805.00 B 1.14 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/decodeThings.ts
→ [12:29] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [12:29] [JS] 712.00 B 1.03 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/encodeThings.ts
null asset index.js 1.15 MiB [emitted] (name: main)
runtime modules 123 bytes 1 module
modules by path ./node_modules/ 1.1 MiB
  modules by path ./node_modules/@warden-sk/compiler/ 14.6 KiB 11 modules
  modules by path ./node_modules/react-dom/ 1000 KiB 3 modules
  modules by path ./node_modules/react/ 85.7 KiB 2 modules
  modules by path ./node_modules/scheduler/ 17.3 KiB 2 modules
modules by path ./private/ 8.1 KiB
  modules by path ./private/*.tsx 6.61 KiB 3 modules
  modules by path ./private/*.css 2 bytes 2 modules
  modules by path ./private/helpers/*.ts 1.48 KiB
    ./private/helpers/decodeThings.ts 805 bytes [built] [code generated]
    ./private/helpers/encodeThings.ts 712 bytes [built] [code generated]
webpack 5.77.0 compiled successfully in 6499 ms
```
