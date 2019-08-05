import {Button} from './button';
let button = new Button(5);

button.print();
button.click();
button.print();
console.log('State ' + button.state);
button.click();
button.print();
console.log('State ' + button.state);