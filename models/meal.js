class Meal {

    constructor(id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree) {
        this.id = id;
        this.title = title;
        this.categoryIds = categoryIds
        this.complexity = complexity
        this.affordability = affordability
        this.imageUrl = imageUrl
        this.ingredients = ingredients
        this.steps = steps
        this.isGlutenFree = isGlutenFree
        this.isVegan = isVegan
        this.isVegetarian = isVegetarian
        this.isLactoseFree = isLactoseFree
        this.duration = duration
    }
}

export default Meal;