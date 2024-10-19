---
title: Windows
---

## Windows Security Checklist

- Ensure the guest account is disabled by opening `lusrmgr.msc` and finding the account
  - Remove all unauthorized users via `lusrmgr.msc`
  - Remove all unauthorized administrators via the Groups pane in `lusrmgr.msc`
- Verify all users have a (secure) password
- Change all admin accounts with an insecure password
- Open the User Accounts control panel and click Manage Another Account
- For accounts that do NOT say “Password Protected”, choose a secure password such as CyberPatriot123!!
- Create a maximum and minimum password age in secpol.msc
- Maximum password age: 90
- Minimum age: 7
- Change the minimum password length to 10 characters
- Change the enforced password history to 5-10 password or greater
- Set the account lockout threshold to 10 attempts and use the default settings when prompted
- Under “Security Options” change “Limit local use of blank passwords to console only” to enabled
- Change “Do not allow anonymous enumeration of SAM accounts to enabled
- Enable firewall protections in Windows Security
- Disable remote assistance connections under Remote settings in the System control panel
- Disable all file shares using fsmgmt.msc
- Click Shares on the sidebar and stop sharing on all shares EXCEPT C$, ADMIN$, and IPC$ as they are default administrative shares the Microsoft does not recommend disabling
- Stop the FTP service by going to services.msc and disable the Microsoft FTP service. If the service is running, stop the service immediately
- Remove all unauthorized media files by doing a search in the C: drive in explorer for *.mp3
- Install the majority of Windows updates through Updates & Security in the settings app
- Remove unwanted software such as WireShark, NetworkStumber, PC Cleaner, Npcap, and CCleaner
