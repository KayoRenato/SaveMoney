import * as Dialog from "@radix-ui/react-dialog";
import { ClosedButton, Content, Description, FormDialog, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import iconTransaction from "../../assets/thunder.svg";
import iconExpense from "../../assets/fire.svg";
import iconRevenue from "../../assets/sign.svg";
import { X } from "phosphor-react";


export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div className="header">
                    <div className="title">
                        <img src={iconTransaction} alt="" />
                        <Dialog.Title>New Transaction</Dialog.Title>
                    </div>
                    <ClosedButton>
                        <X size={24} weight="bold" />
                    </ClosedButton>
                </div>
                <Description>
                    <p>Create a new transaction</p>
                </Description>

                <FormDialog action="">

                    <input type="text" placeholder="Insert a description" required />
                    <input type="number" placeholder="Insert a value" min={0} required />
                    <input type="text" placeholder="Insert a category" required />

                    <TransactionType>
                        <TransactionTypeButton variant="revenue" value="revenue">
                            <img src={iconRevenue} alt="" />
                            Revenue
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="expense" value="expense">
                            <img src={iconExpense} alt="" />
                            Expense
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Create</button>
                </FormDialog>

            </Content>
        </Dialog.Portal>
    );
}
