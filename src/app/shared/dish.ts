export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    constructor(id: string, name: string, image: string, category: string, featured: boolean, label: string, price: string, description: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.image = image;
        this.featured = featured;
        this.label = label;
        this.price = price;
        this.description = description;
    }
}