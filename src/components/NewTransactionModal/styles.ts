import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    background: rgba(0 0 0 / 0.5);
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;


`

export const Content = styled(Dialog.Content)`
    min-width: 30rem;
    border-radius: 6px;
    padding: 2rem 2rem;
    color: ${props => props.theme['base-600']};
    background-image: linear-gradient(200deg,${props => props.theme['primary-200']}, ${props => props.theme['primary-100']}, ${props => props.theme['primary-200']});

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    .title {
        display: flex;
        gap: 1rem;
    }



`

export const Description = styled(Dialog.Description)`
    color: ${props => props.theme['base-500']};
`

export const FormDialog = styled.form`

    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: .5rem;
    
    input {
        width: 100%;

        border-radius: 6px;
        border: 1px solid ${props => props.theme['primary-300']};

        background: ${props => props.theme['primary-50']};
        padding: 1rem;

    }

    button[type='submit'] {
        margin-top: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
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

    }

`

export const ClosedButton = styled(Dialog.Close)`

    background: transparent;
    border: 0;
    line-height: 0;
    padding: .25rem;
    cursor: pointer;
    color: ${props => props.theme['red-700']};

    &:hover{
        background-color: ${props => props.theme['primary-50']};
        border-radius: 6px;
    }

`