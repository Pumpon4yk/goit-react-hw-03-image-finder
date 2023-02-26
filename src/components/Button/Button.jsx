import { ButtonLoadMore } from "./Button.styled";

const Button = ({onClick}) => {
    return(
        <ButtonLoadMore onClick={onClick}>Load more</ButtonLoadMore>
    )
}

export default Button