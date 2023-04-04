# Command

```
npm i && node ./webpack.js
```

After running this command, you should see three new files created in the `public` directory: `index.js`, `index.html`, and `index.css`.

## Output

```
→ [13:08] [production]
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

→ [13:08] [CSS] 91.36 KB ./node_modules/@warden-sk/compiler/design.css
→ [13:08] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [13:08] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [13:08] [JS] 1.05 KB 1.49 second(s) /Users/marekkobida/Documents/compiler_test/private/index.tsx
→ [13:08] [SERVER] http://127.0.0.1, http://192.168.100.129
→ [13:08] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [13:08] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [13:08] [JS] 3.98 KB 1.24 second(s) /Users/marekkobida/Documents/compiler_test/private/Client.tsx
→ [13:08] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [13:08] [JS] 1.33 KB 0.98 second(s) /Users/marekkobida/Documents/compiler_test/private/Input.tsx
→ [13:08] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [13:08] [JS] 941.00 B 0.99 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/decodeThings.ts
→ [13:08] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [13:08] [JS] 852.00 B 1.06 second(s) /Users/marekkobida/Documents/compiler_test/private/helpers/encodeThings.ts
null asset index.js 147 KiB [emitted] [minimized] (name: main) 1 related asset
modules by path ./node_modules/ 156 KiB
  modules by path ./node_modules/@warden-sk/compiler/ 14.6 KiB 11 modules
  modules by path ./node_modules/react-dom/ 131 KiB 3 modules
  modules by path ./node_modules/react/ 6.94 KiB 2 modules
  modules by path ./node_modules/scheduler/ 4.33 KiB 2 modules
modules by path ./private/ 8.33 KiB
  modules by path ./private/*.tsx 6.58 KiB 3 modules
  modules by path ./private/*.css 2 bytes
    ./private/index.css 1 bytes [built] [code generated]
    ./private/Client.css 1 bytes [built] [code generated]
  modules by path ./private/helpers/*.ts 1.75 KiB
    ./private/helpers/decodeThings.ts 941 bytes [built] [code generated]
    ./private/helpers/encodeThings.ts 852 bytes [built] [code generated]
webpack 5.77.0 compiled successfully in 7572 ms
```
