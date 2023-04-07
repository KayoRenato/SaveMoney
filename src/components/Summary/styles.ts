import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
width: 100%;
max-width: 1120px;

margin: 0 auto;
padding: 0 1.5rem;

display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;

margin-top: -5rem;

color: ${props => props.theme.white};

`

interface SummaryCardProps {
    colorCard?: 'base' 
}


export const SummaryCard = styled.div<SummaryCardProps>`
background-color: ${props => props.theme['secondary-300']};

border-radius: 6px;
padding: 2rem;


header {
    display: flex;
    justify-content: space-between;
    align-items: center; 

    color: ${props => props.theme['primary']};

    span{
        font-size: 1.5rem;
        font-weight: bold;
    }

    img{
        width: 4rem;
        height: 4rem;
    }
}

strong{
    display: block;

    margin-top: 1rem;
    font-size: 2rem;
    text-align: end;

}

${props => props.colorCard === 'base' && 
    css`
    background-color: ${props => props.theme['base-300']};
    color: ${props => props.theme.white};
`}

`