
/* I'm going to start out by making a class called Building. 
each Building will have the following properties:
- name (this will be a string)
- floors (this will be a number)
- elevators this will be a number)

Each Building will have the following methods: 

*/
class Building{
    constructor(name, floors, elevators){
        this.name = name;
        this.floors = floors;
        this.elevators = elevators;
    }
}

// 1. Initialize the elevator simulation with the desired number of elevators, and the desired number of floors. Assume ground/min of 1.

// I am initilizing the sim with building1, it has 3 floors and two elevators to start with. 

const building1 = new Building('hotel', 3, 2);


/* Now I'm going to create an Elevator class. 
each Elevator will have the following properties:
- name (this will be a string)
- currentFloor (this will be a number)
- inMotion (this will be a boolean)
- doorsOpen (this will be a boolean)
- doorsClosed (this will be a boolean)
- elevators this will be a number)

Each elevator will have the following methods: 


*/