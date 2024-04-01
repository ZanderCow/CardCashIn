import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import Home from './pages/home';
import Footer from "../src/components/footer";
import React, { useState } from 'react';
import AboutMe from './pages/aboutMe';
import CardInformation from './components/cardInfo';
import BankInformation from './components/bankinfo';
import SuccessComponent from './components/success';


function App() {


  const [currentComponent, setCurrentComponent] = useState('Home');

  
  
  const changeComponent = (componentName) => {
    setCurrentComponent(componentName);
  };


  const renderComponent = () => {
    switch(currentComponent) {
      case 'Home': return <Home changeComponent={changeComponent} />;
      case 'AboutMe': return <AboutMe changeComponent={changeComponent} />;
      case 'CardInformation': return <CardInformation changeComponent={changeComponent}/>;
      case 'BankInformation' : return <BankInformation changeComponent={changeComponent}/>;
      case 'Success': return <SuccessComponent changeComponent={changeComponent}/>;      
      default: return <Home changeComponent={changeComponent} />;
    }
  };

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
        <MyNavbar changeComponent={changeComponent}/>
        {renderComponent()}
        <Footer />
      </body>
    </div>
  );
}


export default App;
