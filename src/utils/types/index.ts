
export type WebRoute = {
    url: string
    icon: any
    altLabel: string
    component: any
}

export type Recipe = {
    name: string
    blocks: number
    img: any
    rating: number
    prepTime: number //minutes
}

export enum MealType {
    CARB = "Carb",
    PROTEIN = "Protein",
    FAT = "Fat"
}