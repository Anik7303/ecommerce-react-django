import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'

function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={HomeScreen} exact />
                    <Route
                        path="/product/:id"
                        component={ProductScreen}
                        exact
                    />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
