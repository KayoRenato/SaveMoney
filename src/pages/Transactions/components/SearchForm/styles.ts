import styled from "styled-components";


export const SearchFormContainer = styled.form`

    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border: 0;
        border-radius: 6px;

        color: ${props => props.theme['base-600']};
        background-color: ${props => props.theme['primary-50']};
        
        padding: 1rem;
        
        &::placeholder {
            color: ${props => props.theme['base-400']};
            
        }

        &:focus {
            color: ${props => props.theme['base-600']};
            background-color: ${props => props.theme['base-50']};
            border: none;
        }

        &:active{
            border: none;
        }


    }

    button{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-width: 8rem;

        font-weight: bold;
        color: ${props => props.theme['base-600']};
        background: ${props => props.theme.white};

        padding: .75rem 1rem;
        
        border: 2px solid ${props => props.theme['primary-300']};
        border-radius: 6px;
        box-shadow: 2px 2px 4px ${props => props.theme['primary-300']};
        
        transition: all 0.2s ease-in-out;
        
        &:hover{
            cursor: pointer;

            background: ${props => props.theme['primary-300']};
            box-shadow: 4px 6px 6px ${props => props.theme['primary-200']};
        }

    }

`