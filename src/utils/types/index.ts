import { Component } from "react";

export type WebRoute = {
    url: string
    icon: any
    altLabel: string
    component: any
}

export type Meal = {
    name: string
    type: MealType
    img: any
    rating: number
}

export enum MealType {
    CARB,
    PROTEIN,
    FAT
}