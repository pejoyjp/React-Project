import Button from "@mui/material/Button";
//types
import { CartItemType } from "../App";
//Styles
import { Wrapper } from "./item.styles";
type Props = {
    item: CartItemType
    handleAddToCart: (clikedItem: CartItemType) => void
    
}
const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>€{item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>
            Add to Cart
        </Button>
        
    </Wrapper>
)
export default Item