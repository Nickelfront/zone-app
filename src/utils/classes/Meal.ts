import { Unit } from "./Unit"

export type Meal = {
    name: string
    macronutrients: Macronutrient[]
    img: any
}

export type Macronutrient = {
    weight: number
    unit: Unit
    type: MacronutrientType
}

export enum MacronutrientType {
    CARB = "carbs",
    PROTEIN = "proteins",
    FAT = "fats"
}
