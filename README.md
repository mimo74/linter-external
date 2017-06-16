# linter-external package

[![Slack Badge](https://img.shields.io/badge/chat-atom.io%20slack-blue.svg?style=flat-square)](http://atom-slack.herokuapp.com/)
[![Plugin installs!](https://img.shields.io/apm/dm/linter-external.svg?style=flat-square)](https://atom.io/packages/linter-external)
[![Package version!](https://img.shields.io/apm/v/linter-external.svg?style=flat-square)](https://atom.io/packages/linter-external)
[![Dependencies!](https://img.shields.io/david/mimo74/linter-external.svg?style=flat-square)](https://david-dm.org/mimo74/linter-external)

Linter - external

Linter - external is an extension for the [linter](https://atom.io/packages/linter) package for the hackable [Atom Editor](http://atom.io).

#### what it does

Linter - external puts the saved filename to a file for an external 'listener' to grab and deliver a result for the [linter](https://atom.io/packages/linter) package to displays

a 'listener' is required to watch this file and do some magic on change of the file and put its result in another file the 'Linter - external' package watches.

'Linter - external' reads from the file and displays results with the Linter package

Format of 'Lint answer filename':

Simple semicolon seperated textfile:

objekt;row.start.x,row.start.y;row.end.x;row.end.y;message;severity{warning|info|error};

example:
xmvscc00.p;648;1;648;1;One or more END statements is missing. (246);error;
xmvscc00.p;460;0;460;0;ON ERROR - for each/first/last without visible on error phrase;error;
xmvscc00.p;460;0;460;0;share-lock - find, for each/first/last without visible lock phrase or explicit share-lock;error;
