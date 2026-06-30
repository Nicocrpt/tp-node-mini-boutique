import ProductCard from "./ProductCard";

import clavierMeca from "../assets/product_images/clavier-meca.jpg";
import souris from "../assets/product_images/souris-sans-fil.jpg";
import laptop from "../assets/product_images/pc-portable.png";
import manette from "../assets/product_images/manette.jpg";
import fauteuil from "../assets/product_images/fauteuil.jpg"

function ProductList() {
    return (
        <section className="product-list">
            <h2>Nos produits</h2>
            <div className="products-grid">
                <ProductCard
                    name="Ordinateur portable"
                    price={899}
                    category="Informatique"
                    image={laptop}
                    description="Un ordinateur portable performant mais accessible."
                    available={true}
                />
                <ProductCard
                    name="Souris sans fil"
                    price={29}
                    category="Accessoires"
                    image={souris}
                    description="Une souris sans fil ergonomique et dédié au jeu."
                    available={true}
                />
                <ProductCard
                    name="Clavier mécanique"
                    price={79}
                    category="Accessoires"
                    image={clavierMeca}
                    description="Clavier mécanique avec switchs rouges."
                    available={true}
                />
                <ProductCard
                    name="Manette de jeu sans fil"
                    price={69}
                    category="Accessoires"
                    image={manette}
                    description="Manette de type Xbox."
                    available={true}
                />
                <ProductCard
                    name="Fauteuil ergonomique"
                    price={499}
                    category="Mobilier"
                    image={fauteuil}
                    description="Fauteuil ergonomique parfait pour travailler des heures en réduisant les risques."
                    available={false}
                />
            </div>
        </section>
    )
}

export default ProductList;