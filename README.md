# Command

```
npm i && node ./webpack.js
```

After running this command, you should see three new files created in the `public` directory: `index.js`, `index.html`, and `index.css`.

## Output

```
→ [06:28]
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

→ [06:28] [CSS] 173.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [06:28] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [06:28] [JS] 1.05 KB 1.44 second(s) /Users/marekkobida/Documents/compiler_test/private/index.tsx
→ [06:28] [SERVER] http://127.0.0.1
→ [06:28] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [06:28] [CSS] 173.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [06:28] [JS] 3.58 KB 1.04 second(s) /Users/marekkobida/Documents/compiler_test/private/Client.tsx
→ [06:28] [CSS] 173.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
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
webpack 5.77.0 compiled successfully in 2820 ms
↓ [06:28] [SERVER] /
↓ [06:28] [SERVER] /index.css
↓ [06:28] [SERVER] /index.js
```
