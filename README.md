# UnlimitedFlight 
A tera-proxy module that lets you fly endlessly.  
Someone else released his own version of this mod, so I feel okay about releasing it now.  
  
## Usage  
While in game, open a whisper chat session with "!UnlimitedFlight" by typing "/w !unlimitedflight" in chat and hitting the space bar.
This serves as the script's command interface. 
The following commands are supported:  
  
* on - Enables the script  
* off - Disables the script (default)  
  
Any other input returns a summary of above commands in the game.  
  
Alternative commands in all other chats:  
* !fly - Toggles between "on" and "off" state  
  
Support for Pinkie Pie's command module:  
* /proxy fly - Toggles between "on" and "off" state  
  
## Safety
Whatever you send to "!UnlimitedFlight" in game is intercepted client-side. The chat is NOT sent to the server.  
This is obviously one of the more questionable modules, so I do not recommend using it around players you don't trust.  
  
## Changelog
### 1.2.0
* [*] Fixed a bug when running out of energy. Thanks to Pinkie Pie
* [+] Added support for Pinkie Pie's command module which is now a requirement
### 1.1.0
* [+] Added !fly command to toggle between "on" and "off" in non-whisper chats
### 1.0.0
* [*] Initial Release