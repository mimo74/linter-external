'use babel'

import { Range } from 'atom'

export function activate() {
  // Fill something here, optional
}

export function deactivate() {
  // Fill something here, optional
}

export function provideLinter() {
    const messages = [];

  return {
    name: 'SCC',
    scope: 'file', // or 'project'
    lintsOnChange: false, // or true
    grammarScopes: ['source.openedge'],
    lint(textEditor) {

      const editorPath = textEditor.getPath();
      var fs = require('fs');

      const numberOfCharCutFromDir = atom.config.get('linter-external.numberOfCharCutFromDir');
      const requestFileName = atom.config.get('linter-external.requestFileName');
      const answerFileName = atom.config.get('linter-external.answerFileName');
      const pfad = editorPath.substring(0,numberOfCharCutFromDir);

      //const pfad = editorPath.substring(0,9);

      fs.writeFileSync(pfad + requestFileName,editorPath + "\n");

      return new Promise(function(resolve) {

        fs.watch(pfad + answerFileName, function(event, filename) {
          if(filename){
            const messages = [];
            console.log('Event : ' + event);
            console.log(filename + ' file Changed ...');
            file = fs.readFileSync(pfad + answerFileName);
            var match = fs.readFileSync(pfad + answerFileName).toString().split("\n");
            for (var line in match) {
              var array = match[line].split(';');
              var range = new Range([parseInt(array[1] - 1),parseInt(array[2])], [parseInt(array[3] - 1),parseInt(array[4])]);
              if (array[2]) {
                messages.push({
                    severity: array[6],
                    location: {
                      file: editorPath,
                      position: range,
                    },
                    excerpt: array[5],
                  });
              }
            }
            resolve(messages);
          }
          else{
            console.log('filename not provided')
          }
        });

      });

    }
  }
}
