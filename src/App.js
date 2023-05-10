import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ExampleDefault from './examples/ExampleDefault'
import ExampleReactQuery from './examples/ExampleReactQuery'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/example-default" element={<ExampleDefault />} />
        <Route path="/example-react-query" element={<ExampleReactQuery />} />
        <Route path="*" element={<div>404 Not found!</div>} />
      </Routes>
    </>
  )
}

export default App;
