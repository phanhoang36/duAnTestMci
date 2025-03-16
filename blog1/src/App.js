import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componates/pages/home';
import MainLayout from './layouts/MainLayout';
import '.';
import BlogDetail from './componates/pages/BlogDetail';
function App() {
    return (
        <Router>
            <div className="App bg-red-50">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        }
                    />

                    <Route
                        path="/blogs/:id"
                        element={
                            <MainLayout>
                                <BlogDetail />
                            </MainLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
