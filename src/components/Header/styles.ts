import styled from 'styled-components'

export const HeaderContainer = styled.header`
background: ${props => props.theme['primary-100']};
padding: 2.5rem 0 5rem;

`

export const HeaderContent = styled.div`
width: 100%;
max-width: 1120px

margin: 0 auto;
padding: 0 1.5rem;

display: flex;
justify-content: space-between;
align-items: center; 


div.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
        scale: 3;
        rotate: 330deg;
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
        /* color: ${props => props.theme['primary']}; */
        color: #dec36e;
        line-height: 0.5;
    }

}

`
export const NewTransactionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: .75rem 1rem;
    border-radius: 6px;
    background: ${props => props.theme['secondary-50']};

    color: ${props => props.theme['primary-400']};
    font-weight: 500;
    border: 2px solid ${props => props.theme['primary-300']};
    box-shadow: 2px 4px 4px ${props => props.theme['primary-200']};
    
    
    &:hover{
        background: ${props => props.theme['primary-300']};
        color: ${props => props.theme['white']};
        border: 2px solid ${props => props.theme['primary-300']};
        cursor: pointer;
        box-shadow: 4px 6px 6px ${props => props.theme['primary-200']};
        transition: all 0.2s ease-in-out;
    }

`


