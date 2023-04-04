# Page

https://warden-sk.github.io/compiler_test/public/index.html

# Command

```
npm i && node ./webpack.js
```

After running this command, you should see three new files created in the `public` directory: `index.js`, `index.html`, and `index.css`.

## Output

```
→ [12:24]
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

→ [12:24] [CSS] 91.36 KB ./node_modules/@warden-sk/compiler/design.css
→ [12:24] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [12:24] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [12:24] [JS] 1.05 KB 1.67 second(s) /Users/marekkobida/Documents/compiler_test/private/index.tsx
→ [12:24] [SERVER] http://127.0.0.1, http://192.168.100.129
→ [12:24] [CSS] 332.00 B /Users/marekkobida/Documents/compiler_test/private/index.css
→ [12:24] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [12:24] [JS] 4.25 KB 1.15 second(s) /Users/marekkobida/Documents/compiler_test/private/Client.tsx
→ [12:24] [CSS] 77.00 B /Users/marekkobida/Documents/compiler_test/private/Client.css
→ [12:24] [JS] 1.37 KB 1.15 second(s) /Users/marekkobida/Documents/compiler_test/private/Input.tsx
null asset index.js 1.15 MiB [compared for emit] (name: main)
runtime modules 123 bytes 1 module
modules by path ./node_modules/ 1.1 MiB
  modules by path ./node_modules/@warden-sk/compiler/ 14.6 KiB 11 modules
  modules by path ./node_modules/react-dom/ 1000 KiB 3 modules
  modules by path ./node_modules/react/ 85.7 KiB 2 modules
  modules by path ./node_modules/scheduler/ 17.3 KiB 2 modules
modules by path ./private/ 6.89 KiB
  modules by path ./private/*.tsx 6.89 KiB
    ./private/index.tsx 1.05 KiB [built] [code generated]
    + 2 modules
  modules by path ./private/*.css 2 bytes
    ./private/index.css 1 bytes [built] [code generated]
    ./private/Client.css 1 bytes [built] [code generated]
webpack 5.77.0 compiled successfully in 4333 ms
```
