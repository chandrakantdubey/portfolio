import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/index.esm'
import './App.css'
import Projects from './components/Projects'
import Banner from './components/Banner';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container-sm'>
      <Header />
      <main>
        <Banner />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
