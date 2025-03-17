import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeroSection from './Components/header';
import AboutUs from './Components/aboutus';
import Services from './Components/services';
import WhyChooseUs from './Components/whyChooseUs';
import CompanyProducts from './Components/products';
import Footer from './Components/footer';
import ContactUs from './Components/ContactUs';
import ProjectCards from './Components/projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<HeroSection></HeroSection>
<AboutUs></AboutUs>
<Services></Services>
<ProjectCards></ProjectCards>
<WhyChooseUs></WhyChooseUs>
<CompanyProducts></CompanyProducts>
<ContactUs></ContactUs>
<Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
