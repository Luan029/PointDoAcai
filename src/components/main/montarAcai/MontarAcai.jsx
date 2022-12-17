import React,{useState} from "react";
import './MontarAcai.css'

const MontarAcai = () => {
    const[formValues, setFormValues] = useState({})
    const calcularValor = (data) =>{
        
        console.log('valores: ' + Object.values(data))
        console.log('chaves: ' + Object.keys(data))
        console.log('entradas: ' + Object.entries(data))
        
    }
    const handleInputChange = (e) =>{
        e.preventDefault();
        const {name, value, type, checked} = e.target
        const isCheckbox = type === 'checkbox'
        const data = formValues[name] || {};

        if(isCheckbox){
            data[value] = checked;
        }
        
        calcularValor(data)
        const newValue = isCheckbox ? data : value;
        setFormValues( {...formValues, [name]: newValue})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)
        return data
    }
    return (
        <React.Fragment>
            <h2>Monte seu Açaí</h2>
            <form onSubmit={handleSubmit}>
                <h3>Escolha o tipo do seu Açaí</h3>
                <select name=" tipoAcai" >
                    <option value="copo" >Copo</option>
                    <option value="tijela" >Tijela</option>
                    <option value="barca" >Barca</option>
                    <option value="roleta" >Roleta</option>
                </select>
                <div className="radios">
                    <label>
                        <input type="radio" name="tamanho" value={300} onChange={handleInputChange} checked={formValues.tamanho === '300'} /> 300ML
                    </label>
                    <label>
                        <input type="radio" name="tamanho" value={400} onChange={handleInputChange} checked={formValues.tamanho === '400'} /> 400ML
                    </label>
                    <label>
                        <input type="radio" name="tamanho" value={500} onChange={handleInputChange} checked={formValues.tamanho === '500'} /> 500ML
                    </label>
                </div>
                <div className="checks">
                    <label>
                        <input type="checkbox" name="adicional" value="granola" onChange={handleInputChange} />Granola
                    </label>
                    <label>
                        <input type="checkbox" name="adicional" value="castanha" onChange={handleInputChange} />Castanha
                    </label>
                    <label>
                        <input type="checkbox" name="adicional" value="aveia" onChange={handleInputChange} />Aveia
                    </label>
                </div>
                <button type="submit">Finalizar pedido</button>
            </form>
            {formValues !== null ?
                <div className="resultadoPedido">
                    <h2>Seu pedido ficou da seguinte forma:</h2>
                    <div>
                        <p>Tipo: {}</p>
                    </div>
                </div> : ""
            }
        </React.Fragment>
    )
}
export default MontarAcai