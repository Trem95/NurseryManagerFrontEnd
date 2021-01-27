export interface baby {
    id: number;
    name: string;
}

export interface createBaby{
    name : string;
}

export interface meal{
    id : number;
    mealDate: Date;
    mealObs: string;
    typeMeal : string;
    baby: baby;
}

export interface createMeal{
    mealDate : Date;
    mealObs: string;
    typeMeal: string;
    baby: baby
}

export interface nap{
    id : number;
    napObs : string;
    napTimeBegin : Date;
    napTimeEnd: Date;
    baby : baby;
}

export interface createNap{
    napObs : string;
    napTimeBegin : Date;
    napTimeEnd: Date;
    baby : baby;
}

export interface observation{
    id : number;
    obsAuthor : string;
    observation : string;
    observationDate : Date;
    baby : baby;
}

export interface createObservation {
    obsAuthor : string;
    observation : string;
    observationDate : Date;
    baby : baby;
}

export interface paednurse{
    id : number;
    login : string;
    name : string;
    pwd : string;
}

export interface createPaednurse{
    login : string;
    name : string;
    lastname : string;
    pwd : string;
}

export interface timesheet{
    id : number;
    arrivalTime : Date;
    leaveTime : Date;
    baby : baby;
}

export interface createTimesheet{
    arrivalTime : Date;
    leaveTime : Date;
    baby : baby;
}
