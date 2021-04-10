import { MealType, Recipe } from "./types";
import dish from '../img/dish.png';
import food from '../img/food.jpg';
import bannerImg from '../img/arabica-149.png';

export let meals: Recipe[] = [
    {name: 'Tomato', type: MealType.CARB, img: dish, rating: 4.2, prepTime: 60},
    {name: 'Meat', type: MealType.PROTEIN, img: dish, rating: 4.6, prepTime: 120},
    {name: 'Eggs', type: MealType.PROTEIN, img: dish, rating: 4.9, prepTime: 30},
    {name: 'Avocado', type: MealType.FAT, img: dish, rating: 5, prepTime: 40},
];
export let favorites = [
    {name: 'Kiwi', mealType: MealType.CARB, imgSrc: food, rating: 3.6},
    {name: 'Eggs', mealType: MealType.PROTEIN, imgSrc: food, rating: 4.2},
    {name: 'Pancakes', mealType: MealType.FAT, imgSrc: food, rating: 5},
];

export let bannerText = "Good news, you've stayed in the zone for 2 months! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, nulla vitae lacinia suscipit, ante neque sollicitudin erat.";
export default bannerImg;