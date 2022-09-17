import logo from './logo.svg';
import './App.css';

import Todo from "./components/Todo";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
    return (
        // 囲って使えるようになる。
        <ChakraProvider>
            <div className="App">
                <Todo/>
            </div>
        </ChakraProvider>
    );
}

export default App;
