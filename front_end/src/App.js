import React from 'react';
import Navigation from './component/Navigation/Navigation';
import Logo from './component/Logo/Logo';
import Card from './component/Card/Card';
import Footer from './component/Footer/Footer ';
import Signin from './component/Signin/Signin';
import Register from './component/Register/Register';
// import { useState, useEffect } from 'react';
import { products } from './component/Product/Product';


import './App.css';


class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      route: 'Signin',
      inSignedin: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
  }
}

loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }})
}
  // componentDidCatch() {
  //   fetch('http://localhost:3001/api/data')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  // }
  
  //const[data, setData] = useState(null);
//   useEffect(() => {
//     async function fetch Data() {
//       const response = await fetch('http://localhost:3001/api/data');
//     }
//     fetchData(data);
// }, []);
  
  // to connect the front with the back

  // componentDidMount() {
  //   fetch('http://localhost:3001/ ')
  //     .then(response => response.json())
  //     .then(console.log) // we can also use data = console.log(data)
  // }

  onRouteChange = (route) => {
    if (route === 'Signout') {
      this.setState({ isSignedIn: false })
    }
    else if (route === 'home') {
      this.setState({ isSignedIn: true})
    }
    this.setState({ route: route});
  }
  
  
  render() {
    return (
      <div className="App">
        {this.state.route === 'home'
          ? <div>
            <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={ this.onRouteChange } />
            <Logo />
            <Card id={products[0].id} image={products[0].image} product_name={products[0].product_name} model={products[0].model} manufacturing_year={products[0].manufacturing_year} />
            <Card id={products[1].id} image={products[1].image} product_name={products[1].product_name} model={products[1].model} manufacturing_year={products[0].manufacturing_year} />
            <Card id={products[2].id} image={products[2].image} product_name={products[2].product_name} model={products[2].model} manufacturing_year={products[0].manufacturing_year} />
            <Footer />
            </div> 
        :(
           this.state.route === 'Signin'
           ? <Signin onRouteChange={this.onRouteChange} />
           : <Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
        
         {/*
        <products />
        <attachment
        */}

      </div>)
  }
}
export default App;