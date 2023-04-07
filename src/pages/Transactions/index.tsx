import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"


export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <SearchForm/>
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td>Description</td>
                            <td>
                                <PriceHighlight variant="inflow">
                                    € 14.20
                                </PriceHighlight>
                            </td>
                            <td>Category</td>
                            <td>Date</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <PriceHighlight variant="outflow">
                                    - € 622.30
                                </PriceHighlight>
                            </td>

                            <td>Category</td>
                            <td>Date</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>
                                <PriceHighlight variant="inflow">
                                    € 122.82
                                </PriceHighlight>
                            </td>
                            <td>Category</td>
                            <td>Date</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>

    )
}