



pip check
IF %ERRORLEVEL% NEQ 0 exit /B 1
jupyter notebook -h
IF %ERRORLEVEL% NEQ 0 exit /B 1
jupyter-notebook -h
IF %ERRORLEVEL% NEQ 0 exit /B 1
jupyter labextension list
IF %ERRORLEVEL% NEQ 0 exit /B 1
jupyter labextension list 1>labextensions 2>&1
IF %ERRORLEVEL% NEQ 0 exit /B 1
type labextensions | rg "@jupyter-notebook/lab-extension.*ok"
IF %ERRORLEVEL% NEQ 0 exit /B 1
exit /B 0
