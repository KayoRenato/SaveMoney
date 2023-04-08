import styled from 'styled-components'

export const HeaderContainer = styled.header`
background-image: linear-gradient(25deg , ${props => props.theme['primary-50']}, ${props => props.theme['primary-100']} , ${props => props.theme['primary-50']} );    

padding: 2.5rem 0 7rem;

`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;

    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center; 


    div.logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;

        @media screen and (max-width: 750px) {
            img {
                position: absolute;
                left: -1rem;
                scale: .7;
            }
        }

    }

    div.title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;

        font-family: Kaushan;
        line-height: 0.6;

        h1{
            color: #5dafe7;
        }

        h2{
            color: #dec36e;
            line-height: 0.5;
        }

    }

`

export const NewTransactionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 8rem;

    padding: .75rem 1rem;
    border: 2px solid ${props => props.theme['primary-300']};
    border-radius: 6px;
    box-shadow: 2px 4px 4px ${props => props.theme['primary-200']};

    font-weight: bold;
    color: ${props => props.theme['base-600']};
    background: ${props => props.theme['primary-300']};

    transition: all 0.2s ease-in-out;
    
    &:hover{
        color: ${props => props.theme['white']};
        background: ${props => props.theme['primary-400']};

        border: 2px solid ${props => props.theme['primary-300']};
        cursor: pointer;
        box-shadow: 4px 6px 6px ${props => props.theme['primary-200']};
    }

`