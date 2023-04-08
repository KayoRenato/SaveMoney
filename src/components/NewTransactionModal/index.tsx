import * as Dialog from "@radix-ui/react-dialog";
import { ClosedButton, Content, Description, FormDialog, Overlay } from "./styles";
import logoButton from "../../assets/thunder.svg";
import { ClosedCaptioning, X, XCircle } from "phosphor-react";


export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div className="header">
                    <div className="title">
                        <img src={logoButton} alt="" />
                        <Dialog.Title>New Transaction</Dialog.Title>
                    </div>
                    <ClosedButton>
                        <X size={24} weight="bold"/>
                    </ClosedButton>
                </div>
                <Description>
                    <p>Create a new transaction</p>
                </Description>

                <FormDialog action="">

                    <input type="text" placeholder="Insert a description" required />
                    <input type="number" placeholder="Insert a value" min={0} required />
                    <input type="text" placeholder="Insert a category" required />

                    <button type="submit">Create</button>
                </FormDialog>

            </Content>
        </Dialog.Portal>
    );
}
