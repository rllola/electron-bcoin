# Breakpad


Dump symbol

Need breakpad tool

https://chromium.googlesource.com/breakpad/breakpad

```
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
export PATH=`pwd`/depot_tools:"$PATH"
git clone https://chromium.googlesource.com/breakpad/breakpad
cd breakpad
gclient config https://chromium.googlesource.com/breakpad/breakpad
gclient sync
./configure && make
```
