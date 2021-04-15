import { Meal } from "../classes/Meal"

export type WebRoute = {
    url: string
    icon: any
    altLabel: string
    component: any
}

export type Recipe = {
    id: number
    slug: string
    name: string
    blocks: number
    img?: any
    rating: number
    ingredients: Meal[]
    prepTime: number //minutes
    description: string
    author?: string    
}

export enum MealType {
    CARB = "Carb",
    PROTEIN = "Protein",
    FAT = "Fat"
}