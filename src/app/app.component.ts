import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
  hasDriversLicense?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string = 'Xhulian';
  age: number = 28;
  isSmoker: boolean = true;

  user: {firstName: string, lastName: string, age: number, isMarried: boolean} = {
    firstName: 'Xhulian',
    lastName: "Musaka",
    age: 28,
    isMarried: false,
  }

  myArray: number[] = [1, 2, 3];
  myArrayString: string[] = ['Servete'];
  myArrayAny: any[] = [1, 2, 3, 'Servete', true, undefined];
  myArray2D: any[] = [1, 2, 3, 'Servete', true, undefined,[3, 3, [1, 5]]];

  firstName1: string | undefined = 'Xhulian';
  age1: string | number = 28;

  people: Person[] = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 28},
    {name: 'Charlie', age: 30, hasDriversLicense: true},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 28},
    {name: 'Charlie', age: 30, hasDriversLicense: true},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 28},
    {name: 'Charlie', age: 30, hasDriversLicense: true},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 28},
    {name: 'Charlie', age: 30, hasDriversLicense: true},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 28},
    {name: 'Charlie', age: 30, hasDriversLicense: true},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 28},
    {name: 'Charlie', age: 30, hasDriversLicense: true},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 28},
    {name: 'Charlie', age: 30, hasDriversLicense: true},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 28},
    {name: 'Charlie', age: 30, hasDriversLicense: true}
  ];

  // krijoni nje array user e tipit User brenda te ciles do jene 4 objekte me nga
  // dy properties userName dhe password.
  //Beni display ne html userName e objektit te pare.

  imgUrl = 'https://clipart-library.com/data_images/320465.png';
  isEnabled = true;
  isHidden = false;
  imgWidth = '200';

  userName1: string = 'John';
  changeName() {
    this.userName1 = 'Jane';
    console.log('Name changes', this.userName1);
  }

  // Do ndertojme nje object me firstName dhe lastName
  // Do ndertojme nje metode qe printon ne console fullName
  // Metoden do ta lidhim me nje click event ne nje buton ne html

  userObject = {
    firsName: 'Xhulian',
    lastName: 'Musaka'
  }

  printFullName() {
    console.log(this.userObject.firsName, this.userObject.lastName);
  }

  // Input Event
  inputMessage = '';
  onInputChange(value: string) {
    this.inputMessage = value;
    console.log(value);
  }

  // Angular Directive
  isLoggedIn: boolean = false;
}
