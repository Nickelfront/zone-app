
export type WebRoute = {
    url: string
    icon: any
    altLabel: string
    component: any
}

export type Recipe = {
    name: string
    type: MealType
    img: any
    rating: number
    prepTime: number //minutes
}

export enum MealType {
    CARB,
    PROTEIN,
    FAT
}