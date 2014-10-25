# My home Controller

Home controller using IRKit.

## Setup

```
npm install
```

## Start dev server

```
grunt server
```

## Memo

@see http://getirkit.com/

Search IRKit

```
% dns-sd -B _irkit._tcp
Browsing for _irkit._tcp
DATE: ---Sat 25 Oct 2014---
23:14:31.983  ...STARTING...
Timestamp     A/R    Flags  if Domain               Service Type         Instance Name
23:14:32.183  Add        2   4 local.               _irkit._tcp.         iRKitXXXXX

% dns-sd -G v4 irkitXXXXX.local
DATE: ---Sat 25 Oct 2014---
23:15:35.078  ...STARTING...
Timestamp     A/R Flags if Hostname                               Address                                      TTL
23:15:35.239  Add     2  4 irkit951f.local.                       192.168.10.4                                 10
```

Show captured IR Message

```
curl -i "http://192.168.x.x/messages"
```

Send IR Message

```
curl -i "http://192.168.x.x/messages" -d '{"format":"raw","freq":38,"data":[686,41 ....'
```
