//alert("working");

var colors = ['red', 'blue'];
console.log('colors is ', colors);

colors.push('green');
console.log('colors is ', colors);

colors.unshift('yellow');
console.log('colors is ', colors);

var lastone = colors.pop();
console.log('lastone is ', lastone);

var firstone = colors.shift();
console.log('firstone is ', firstone);

console.log('colors is', colors);

colors.push('green');
colors.push('pink');
colors.push('yellow');
colors.push('shell');
colors.push('green');
console.log('colors is', colors);

var foundgreen = colors.indexOf('green');
console.log('index of green is', foundgreen);

var subcolors = colors.slice(3,6);
console.log('subcolors is', subcolors);

var todos = ['Pack clothes', 'Get petrol', 'Get gopro'];

var input = prompt('What would you like to do?');

while (input !== 'quit') {
  if (input === 'list') {
    console.log('*******************************');
    todos.forEach(function(todo, i) {
      console.log(i + ': ' + todo);
    });
    console.log('*******************************');
  } else if (input === 'new') {
    var newTodo = prompt('Enter new todo');
    todos.push(newTodo);
  }
  input = prompt('What would you like to do?');
}
console.log('You quitter!');

// iteration

for (var i = 0; i < colors.length; i++) {
  console.log('Colors is ', colors[i])
}

colors.forEach(function(c) {
  console.log('fe colors is', c);
});

colors.forEach(function(c, i, a) {
  console.log('feall colors is', c, i, a.length);
});

function showColor(c, i, a) {
  console.log('showColor is', c, i, a.length);
}

colors.forEach(showColor)
