import Home from "./components/Home"
import { Route, Routes } from "react-router"
import "./App.css"

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

export default App
