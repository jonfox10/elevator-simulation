
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
- topFloor (number to set limit on floors the elevato can go)
- groundFloor (numeber that equals 1)
- queue (this will be an array of all the current requests)
- currentFloor (this will be a number)
- inMotion (this will be a boolean)
- doorsOpen (this will be a boolean)
- doorsClosed (this will be a boolean)
- goinUp (this will be a boolean)
- goinDown (this will be a boolean)
- occupied (this will be a boolean)
- trips (a number that )
- mainteneceMode (this will be a boolean)

Each elevator will have the following methods: 
    -request
        -this will push the floor number into the queue array that the request occorued. 
    -movingReport 
        - updates currentFloor property as it moves and changes locations. 
    -closeDoors
        -closes the doors
    -openDoors
        - opens the elevator doors
    -startTrip
        - this will set the elevator into motion to its requested destination
    -tripCount
        - this method will add 1 to the number of trips after every trip, once trips equals 100, it will set MaintenenceMode to true and shut of functionality.
    -maintenence
        - this method will reset the trips amount to 0
*/

class Elevator{
    constructor(name, topFloor){
        this.name = name;
        this.topFloor = topFloor;
        this.groundFloor = 1;
        this.queue = []
        this.currentFloor = 1;
        this.inMotion = false;
        this.doorsOpen = false;
        this.doorsClosed = true;
        this.goingUp = false;
        this.goingDown = false; 
        this.movingTo = 0;
        this.occupied = false;
        this.trips = 0;
    }

    request(currentFloor, floorRequestedTo){
        //first we will check if the request floor is the same as current floor of the elevator.
        //*** Actually I think we should push it first and then check. */
        // if(floor === this.currentFloor){}

        // when someone pushes button outside of an elevator, their floor number will get pushed into the back of the queue array. Im going to use a first in first out approach so that the people who have been waiting the longest get the elevator sooner. 
        // I will adress the case of the elevator stopping for others that are also on the same route, but not first in the queue later.  
        this.queue.push(currentFloor);
        
        //lets check to see if the elevator is occupied first
        if(!this.occupied) {
            
        }
        //lets check to see if the elevator is already heading somewhere and is in motion. If not we will send it to queue[0]
        



    }

    // this method is incomplete but the intent is to call this in the request method to put the elevator into motion to the new floor.  
    startTrip(floor){
        if(this.doorsClosed){
            this.inMotion = true;
        }
    }

    //method to close the doors of the elevator
    closeDoors(){
        if(this.doorsOpen){
            this.doorsClosed = true;
            this.doorsOpen = false;
        }
    }


    //method to open the doors of elevator, need to check if elevator is inMotion or not first. 
    openDoors(){
        if(this.doorsClosed & !this.inMotion){
            this.doorsClosed = false;
            this.doorsOpen = true;
        }
    }


    movingReport(newFloor){
        this.currentFloor = newFloor
    }




}

//initializing the two new elevators for building1
const el1 = new Elevator('el1', 3);
// const el2 = new Elevator('el2', 3); I'm commenting this out for now because I first want to make sure that I can get one elevator to operate correctly, then I will focus on adding multiple elevators. 