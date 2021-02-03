import { Time } from "@angular/common";

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
    mealHour : Date;
    mealObs: string;
    typeMeal : string;
    baby: baby;
}

export interface createMeal{
    mealDate : Date;
    mealHour : Date;
    mealObs: string;
    typeMeal: string;
    baby: baby
}

export interface nap{
    id : number;
    napObs : string;
    napDate : Date;
    napTimeBegin : Date;
    napTimeEnd: Date;
    baby : baby;
}

export interface createNap{
    napObs : string;
    napDate : Date;
    napTimeBegin : Date;
    napTimeEnd: Date;
    baby : baby;
}

export interface observation{
    id : number;
    obsAuthor : string;
    observation : string;
    observationDate : string;
    observationTime : string;
    baby : baby;
}

export interface containerObs{
    list : observation[]
    count : number
}

export interface createObservation {
    obsAuthor : string;
    observation : string;
    observationDate : string;
    observationTime : string;
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
    timesheetDate : string;
    arrivalTime : string;
    leaveTime : string;
    baby : baby;
}

export interface createTimesheet{
    timesheetDate : string;
    arrivalTime : string;
    leaveTime : string;
    baby : baby;
}
