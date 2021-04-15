import { MealType, Recipe } from "./types";
import dish from '../img/dish.png';
import food from '../img/food.jpg';
import bannerImg from '../img/arabica-149.png';
import { MacronutrientType, Meal } from "./classes/Meal";
import { Unit } from "./classes/Unit";


export let nutritionItems: Meal[] = [
    {name: 'Tomato', macronutrients: [{type: MacronutrientType.CARB, weight: 300, unit: Unit.gram}], img: food},
    {name: 'Cucumber', macronutrients: [{type: MacronutrientType.CARB, weight: 600, unit: Unit.gram}], img: food},
    {name: 'Fish', macronutrients: [{type: MacronutrientType.PROTEIN, weight: 600, unit: Unit.count}], img: food},
    {name: 'Nuts', macronutrients: [{type: MacronutrientType.FAT, weight: 600, unit: Unit.count}], img: food},
    {name: 'Banana', macronutrients: [{type: MacronutrientType.CARB, weight: 600, unit: Unit.count}], img: food},
    {name: 'Nuts', macronutrients: [{type: MacronutrientType.FAT, weight: 600, unit: Unit.count}], img: food}
];

export let recipes: Recipe[] = [
    {id: 0, slug: 'zucchini-boats-0', name: 'Zucchini boats', blocks: 4, img: dish, rating: 4.2, prepTime: 60, description: `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.

Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.

Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.

Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. `, ingredients: nutritionItems},
    {id: 1, slug: 'meat-and-cheese-1', name: 'Meat and cheese', blocks: 3, img: dish, rating: 4.6, prepTime: 120, description: `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.

Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.

Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.

Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. `, ingredients: nutritionItems},
    {id: 2, slug: 'egg-salad-2', name: 'Egg Salad', blocks: 5, img: dish, rating: 4.9, prepTime: 30, description: `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.

Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.

Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.

Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. `, ingredients: nutritionItems},
    {id: 3, slug: 'avocado-3', name: 'Avocado', blocks: 3, img: dish, rating: 5, prepTime: 40, description: `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.

Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.

Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.

Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. `, ingredients: nutritionItems},
];

export let favorites = [
    {name: 'Kiwi', mealType: MealType.CARB, imgSrc: food, rating: 3.6},
    {name: 'Eggs', mealType: MealType.PROTEIN, imgSrc: food, rating: 4.2},
    {name: 'Pancakes', mealType: MealType.FAT, imgSrc: food, rating: 5},
];

export let bannerText = "Good news, you've stayed in The Zone for 2 months! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, nulla vitae lacinia suscipit, ante neque sollicitudin erat.";
export default bannerImg;