import styled from "styled-components"


export const List = styled.ul`

@media  screen and (min-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 2 - (16px )), 1fr));
}
@media  screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 4 - (16px * 3)), 1fr));
}

    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`