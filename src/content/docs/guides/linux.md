---
title: Linux Administration
---

## Ubuntu/Debian Security Checklist

- Update all software by running the following commands in the terminal
- sudo apt-get update
- sudo apt-get upgrade
- From top to bottom, do the special steps such as updating/installing specific software, adding new users, creating new groups, and adding users to groups
- Read & answer both forensics questions, come back to it if you need to
- Remove all unauthorized users via the settings app
- Remove all unauthorized administrators via the settings app
- Change the password of every user to a secure one
- Go through each user in the settings app
- Pick a SECURE password
- Remove all prohibited media files by running the following command
- sudo find / -type f -name "*.mp3" -exec rm -f {} +
- This will find every mp3 file on the system and deletes it
- Disable logging in as root via SSH
- Run the following command in the terminal: sudo gedit /etc/ssh/sshd_config
- If this doesn’t work, use nano instead of gedit.
- Enter your password if necessary, it can be found in the readme
- Change the line that states “PermitRootLogin yes” to “PermitRootLogin no”
- Enable UFW firewall protection by running the following command in the terminal
- sudo ufw enable
- Disable unnseccesary system services
- List services by running: systemctl list-units —type=service —status=active
- Find any services that are suspicious
- sudo systemctl stop (service)
- Enable daily system updates by using the Software & Updates app
- Remove unwanted software such as WireShark and ophcrack
