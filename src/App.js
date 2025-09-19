import React, { Component } from 'react';
class App01 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React dümyası!
      </h1>
    );
  }
}

class App02 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React 2!
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
 
export {App01, App02, App03, App04}
export default App03;



