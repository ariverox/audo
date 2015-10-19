


if (annyang) {
  // Let's define a command.

  // helloFunction = function() {
  //   $('p').after('<h1> WHAT </h1>')
  // }
  var commands = {
    'hello': function() { alert('Hello world!'); }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
