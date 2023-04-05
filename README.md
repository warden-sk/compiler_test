# Command

```
npm i && node ./webpack.js
```

After running this command, you should see three new files created in the `public` directory: `index.js`, `index.html`, and `index.css`.

## Output

```
→ [15:13]
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
     _                _                                  _
  __| | _____   _____| | ___  _ __  _ __ ___   ___ _ __ | |_
 / _` |/ _ \ \ / / _ \ |/ _ \| '_ \| '_ ` _ \ / _ \ '_ \| __|
| (_| |  __/\ V /  __/ | (_) | |_) | | | | | |  __/ | | | |_
 \__,_|\___| \_/ \___|_|\___/| .__/|_| |_| |_|\___|_| |_|\__|
                             |_|

→ [15:13] [CSS] 91.36 KB ./node_modules/@warden-sk/compiler/design.css
→ [15:13] [CSS] 116.00 B /Users/marekkobida/Documents/compiler_test/private/components/Client/index.css
→ [15:13] [CSS] 661.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [15:13] [JS] 1.16 KB 1.46 second(s) /Users/marekkobida/Documents/compiler_test/private/index.tsx
→ [15:13] [SERVER] http://127.0.0.1, http://192.168.100.129
→ [15:13] [CSS] 661.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [15:13] [CSS] 116.00 B /Users/marekkobida/Documents/compiler_test/private/components/Client/index.css
→ [15:13] [JS] 2.65 KB 1.03 second(s) /Users/marekkobida/Documents/compiler_test/private/components/Client/index.tsx
→ [15:13] [CSS] 116.00 B /Users/marekkobida/Documents/compiler_test/private/components/Client/index.css
→ [15:13] [JS] 2.28 KB 1.05 second(s) /Users/marekkobida/Documents/compiler_test/private/components/Lists.tsx
→ [15:13] [JS] 1.72 KB 1.04 second(s) /Users/marekkobida/Documents/compiler_test/private/components/Things.tsx
→ [15:13] [JS] 1.94 KB 1.03 second(s) /Users/marekkobida/Documents/compiler_test/private/components/Input.tsx
→ [15:13] [JS] 1002.00 B 0.93 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/decodeThings.ts
→ [15:13] [JS] 795.00 B 0.93 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/context.ts
→ [15:13] [JS] 996.00 B 0.96 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/encodeThings.ts
→ [15:13] [JS] 1.62 KB 0.98 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/useDraggable.ts
→ [15:13] [JS] 1.22 KB 0.99 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/useFilteredThings.ts
→ [15:13] [JS] 3.61 KB 1.08 second(s) /Users/marekkobida/Documents/compiler_test/private/components/Thing.tsx
null asset index.js 1.17 MiB [emitted] (name: main)
runtime modules 123 bytes 1 module
modules by path ./node_modules/ 1.1 MiB
  modules by path ./node_modules/@warden-sk/compiler/ 14.6 KiB 11 modules
  modules by path ./node_modules/react-dom/ 1000 KiB 3 modules
  modules by path ./node_modules/react/ 85.7 KiB 2 modules
  modules by path ./node_modules/scheduler/ 17.3 KiB 2 modules
modules by path ./private/ 18.9 KiB
  modules by path ./private/components/ 12.2 KiB 6 modules
  modules by path ./private/helpers/*.ts 5.57 KiB
    ./private/helpers/context.ts 795 bytes [built] [code generated]
    + 4 modules
  ./private/index.tsx 1.16 KiB [built] [code generated]
  ./private/index.css 1 bytes [built] [code generated]
webpack 5.77.0 compiled successfully in 11905 ms
```
