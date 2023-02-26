import styled from "styled-components"


export const List = styled.ul`

@media  screen and (min-width: 481px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
}

    display: grid;
    max-width: calc(100vw - 48px);
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`