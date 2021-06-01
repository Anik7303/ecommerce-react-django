import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default App
