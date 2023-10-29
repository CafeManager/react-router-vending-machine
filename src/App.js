import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/">
                    <VendingMachine> </VendingMachine>
                </Route>
                <Route exact path="/soda">
                    <Soda> </Soda>
                </Route>
                <Route exact path="/chips">
                    <Chips> </Chips>
                </Route>
                <Route exact path="/sardines">
                    <Sardines> </Sardines>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
