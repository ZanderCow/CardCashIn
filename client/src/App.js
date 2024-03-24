import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import Home from './pages/home';
import Footer from "../src/components/footer";


function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>cardcasher</title>
        <link rel="stylesheet" href="/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans:200,200i,300,300i,400,500,600,700,800&amp;display=swap" />
        <link rel="stylesheet" href="/fonts/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/css/bs-theme-overrides.css" />
        <link rel="stylesheet" href="/css/aos.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/accordion-faq-list.css" />
        <link rel="stylesheet" href="/css/Hero-Clean-images.css" />
        <link rel="stylesheet" href="/css/Navbar-Centered-Links-icons.css" />
      </head>
      <body>
        <MyNavbar />
        <Home />
        <Footer />
      </body>
    </div>
  
  );
}


export default App;
