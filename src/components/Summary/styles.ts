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


    @media screen and (max-width: 750px)  {
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
    }

`

interface SummaryCardProps {
    colorCard: 'balance' | 'revenue' | 'expense'
}

export const SummaryCard = styled.div<SummaryCardProps>`

    border: 2px solid ${props =>
        props.colorCard === 'balance' ?
            props.theme['secondary-200'] : (
                props.colorCard === 'revenue' ?
                    props.theme['green-300'] :
                    props.theme['red-500'])
    };
    border-radius: 6px;
    padding: 0.5rem 1rem;

    color: ${props => props.theme['base-500']};
    background-color: ${props => props.theme.white};

    header {
        display: flex;
        justify-content: space-between;
        align-items: center; 
        
        
        span {
            font-size: 1.5rem;
            font-weight: bold;
            
            
            @media screen and (max-width: 750px)  {
                font-size: 1rem;

            }

        }

        img{
            width: 4rem;
            height: 4rem;

            @media screen and (max-width: 750px)  {
                scale: .85;

            }

        }
    }

    strong{
        display: block;
        font-size: 2rem;
        text-align: center;


        @media screen and (max-width: 750px)  {
            font-size: 1.5rem;

        }

    }
`