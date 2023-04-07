import styled from "styled-components";


export const SearchFormContainer = styled.form`

    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border: 2px solid ${props => props.theme['primary-300']};
        border-radius: 6px;

        color: ${props => props.theme['base-600']};
        background-color: ${props => props.theme['primary-50']};
        
        padding: 1rem;
        
        &::placeholder {
            color: ${props => props.theme['base-400']};
            
        }

        &:focus {
            background-color: ${props => props.theme['base-50']};
            color: ${props => props.theme['base-600']};

            
        }


    }

    button{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-width: 8rem;

        color: ${props => props.theme['white']};
        background: ${props => props.theme['primary-300']};

        padding: .75rem 1rem;
        border-radius: 6px;


        font-weight: 500;
        border: 2px solid ${props => props.theme['primary-300']};
        box-shadow: 2px 4px 4px ${props => props.theme['primary-200']};
        
        
        &:hover{
            cursor: pointer;

            background: ${props => props.theme['primary-400']};
            box-shadow: 4px 6px 6px ${props => props.theme['primary-200']};
            transition: all 0.2s ease-in-out;
        }

    }

`