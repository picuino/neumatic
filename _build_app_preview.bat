@echo off
set PATH=\Bin\cygwin64\bin;%PATH%
set PATH=\Bin\node24;%PATH%
set PATH=\Bin\7-Zip;%PATH%

call npm run build

call npx vite preview

pause