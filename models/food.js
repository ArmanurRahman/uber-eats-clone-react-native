class Food {
    constructor(
        foodId,
        category,
        imageUrl,
        price,
        rating,
        description,
        title,
        shopId
    ) {
        this.foodId = foodId;
        this.category = category;
        this.imageUrl = imageUrl;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.title = title;
        this.shopId = shopId;
    }
}

export default Food;
