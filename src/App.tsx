import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from "react-redux"
import { GetOrders } from "./actions/OrderAction";
import OrderList from "./components/OrderList";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetOrders())

  },[])
  return (
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <OrderList />
                </div>

            </div>
        </div>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
