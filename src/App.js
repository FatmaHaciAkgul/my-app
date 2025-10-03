import React, { Component } from 'react';
import propTypes from 'prop-types';
class App01 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React dümya!
      </h1>
    );
  }
}

class App02 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React 21!
      </h1>
    );
  }
}

class App03 extends Component {
  render() { return (
  <div className="test">
    <App02 />
    <App01 />
  </div>
  );
  }
}

function MerhabaFunc(props) {
return <h1>Merhaba, {props.name + " " + props.surname}</h1>;
}

const element = <MerhabaFunc name="Erdinç" surname="AHA" />;

class App04 extends Component {
render() { return (
element
);
}
}
 
class App05 extends Component {
  render() { return (
    <h1 style={{
      backgroundColor: this.props.renk ? 'red' : 'white',
      fontSize: this.props.boyut + 'px'
    }}>Merhaba2, {this.props.ad} {this.props.soyad}</h1>
  );
  }
}

App05.propTypes = { 
  ad: propTypes.string.isRequired,
  soyad: propTypes.string,
  renk: propTypes.bool,
  boyut: propTypes.number
};

App05.defaultProps = { 
  ad: "Erdinç",
  soyad: "Uzun",
  renk: true,
  boyut: 20
};

export {App01, App02, App03, App04, App05}
export default App05;



