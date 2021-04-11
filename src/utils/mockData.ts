import { MealType, Recipe } from "./types";
import dish from '../img/dish.png';
import food from '../img/food.jpg';
import bannerImg from '../img/arabica-149.png';

export let meals: Recipe[] = [
    {name: 'Zucchini boats', blocks: 4, img: dish, rating: 4.2, prepTime: 60},
    {name: 'Meat and cheese', blocks: 3, img: dish, rating: 4.6, prepTime: 120},
    {name: 'Egg Salad', blocks: 5, img: dish, rating: 4.9, prepTime: 30},
    {name: 'Avocado', blocks: 3, img: dish, rating: 5, prepTime: 40},
];
export let favorites = [
    {name: 'Kiwi', mealType: MealType.CARB, imgSrc: food, rating: 3.6},
    {name: 'Eggs', mealType: MealType.PROTEIN, imgSrc: food, rating: 4.2},
    {name: 'Pancakes', mealType: MealType.FAT, imgSrc: food, rating: 5},
];

export let nutritionItems = [
    {name: 'Tomato', blocks: 2, img: food}
]

export let bannerText = "Good news, you've stayed in the zone for 2 months! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, nulla vitae lacinia suscipit, ante neque sollicitudin erat.";
export default bannerImg;