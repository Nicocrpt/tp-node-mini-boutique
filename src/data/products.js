import clavier from "../assets/product_images/clavier-meca.jpg";
import souris from "../assets/product_images/souris-sans-fil.jpg";
import laptop from "../assets/product_images/pc-portable.png";
import manette from "../assets/product_images/manette.jpg";
import fauteuil from "../assets/product_images/fauteuil.jpg"

export const products = [
    {
        id: 1,
        name: 'Ordinateur portable',
        price: 899,
        category: 'Informatique',
        image: laptop,
        description: 'Un ordinateur performant pour les projets React.',
        available: true
    },
    {
        id: 2,
        name: 'Souris sans fil',
        price: 29,
        category: 'Accessoires',
        image: souris,
        description: 'Une souris légère et pratique au quotidien.',
        available: true
    },
    {
        id: 3,
        name: 'Clavier mécanique',
        price: 79,
        category: 'Accessoires',
        image: clavier,
        description: 'Un clavier confortable pour coder.',
        available: false
    },
    {
        id: 4,
        name: "Manette de jeu sans fil",
        price: 69,
        category: "Accessoires",
        image: manette,
        description: "Manette de type Xbox.",
        available: true
    },
    {
        id: 5,
        name: "Fauteuil ergonomique",
        price: 499,
        category: "Mobilier",
        image: fauteuil,
        description: "Fauteuil ergonomique parfait pour travailler des heures en réduisant les risques.",
        available: false
    }
]