
/* I'm going to start out by making a class called Building. 
each Building will have the following properties:
- name (this will be a string)
- floors (this will be a number)
- amountOfElevators (this will be a number)
- elevators (this is an array that contains names of the buildings elevators)

Each Building will have the following methods: 

*/
class Building{
    constructor(name, floors, amountOfElevators, elevators){
        this.name = name;
        this.floors = floors;
        this.amountOfElevators = amountOfElevators;
        this.elevators = [...elevators];
    }


}

// 1. Initialize the elevator simulation with the desired number of elevators, and the desired number of floors. Assume ground/min of 1.

// I am initilizing the sim with building1, it has 3 floors and two elevators to start with named 'el1' and 'el2'. 

const building1 = new Building('hotel', 3, 2, ['el1', 'el2']);


/* Now I'm going to create an Elevator class. 
each Elevator will have the following properties:
- name (this will be a string)
- currentFloor (this will be a number)
- inMotion (this will be a boolean)
- doorsOpen (this will be a boolean)
- doorsClosed (this will be a boolean)
- goinUp (this will be a boolean)
- goinDown (this will be a boolean)


Each elevator will have the following methods: 


*/

class Elevator{
    constructor(name){
        this.name = name;
        this.currentFloor = 1;
        this.inMotion = false;
        this.doorsOpen = false;
        this.doorsClosed = true;
        this.goingUp = false;
        this.goingDown = false; 
    }
}

//initializing the two new elevators for building1
const el1 = new Elevator('el1');
const el2 = new Elevator('el2');