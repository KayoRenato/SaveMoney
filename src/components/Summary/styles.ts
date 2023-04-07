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
    }

`

interface SummaryCardProps {
    colorCard?: 'base'
}


export const SummaryCard = styled.div<SummaryCardProps>`
    background-color: ${props => props.theme['base-200']};

    border-radius: 6px;
    padding: 1rem;


    header {
        display: flex;
        justify-content: space-between;
        align-items: center; 
        color: ${props => props.theme.white};


        span{
            font-size: 1.5rem;
            font-weight: bold;
            color: ${props => props.theme['base-400']};

            
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

    ${props => props.colorCard === 'base' &&
        css`
            color: ${props => props.theme['base-400']};
            background-color: ${props => props.theme['secondary-200']};
        `
    }

`