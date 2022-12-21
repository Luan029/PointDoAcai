import React from "react";
import "./Teste.css"
class Teste extends React.Component {
    call(numero,event) {
        let valor = 0
        valor += numero
        alert(valor);
        
    }
    render() {
        return (
            <React.Fragment>
                
                <button onClick={(event)=> this.call(5,event)}>
                    Click the button!
                </button>
                <div>{this.call.valor}</div>
            </React.Fragment>
        );
    }
}
export default Teste;