REM Prepare shortcuts. menuinst v2 shortcuts should only be used starting
REM at menuinst v2.1.1 due to bugs. The post-link script
REM will handle which shortcut to use. One file needs to be the default
REM menu file so that conda picks it up when running menuinst.
SET "MENU_DIR=%PREFIX%\Menu"
IF NOT EXIST "%MENU_DIR%" MKDIR "%MENU_DIR%"
if errorlevel 1 exit 1
copy "%RECIPE_DIR%\menu-v1.json" "%MENU_DIR%\%PKG_NAME%_menu-v1.json.bak"
if errorlevel 1 exit 1
copy "%RECIPE_DIR%\menu-v2.json" "%MENU_DIR%\%PKG_NAME%_menu-v2.json.bak"
if errorlevel 1 exit 1
copy "%RECIPE_DIR%\menu-v2.json" "%MENU_DIR%\%PKG_NAME%_menu.json"
if errorlevel 1 exit 1
copy "%RECIPE_DIR%\jupyter.ico" "%MENU_DIR%\jupyter.ico"
if errorlevel 1 exit 1

"%PYTHON%" -m pip install . --no-deps --no-build-isolation -vv

if errorlevel 1 exit 1

rd /s /q "%SCRIPTS%"
