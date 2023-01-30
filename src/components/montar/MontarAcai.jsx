import React, { useState } from "react";
import "./MontarAcai.css"
import Header from "../header/Header"
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const headerProps = {
    title: "Point do Açaí",
    subtitle: 'Monte seu Açaí'
}
const MontarAcai = () => {
    const [count, setCount] = useState(0);
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState("")
    const [titulo, setTitulo] = useState("")


    const [checado, setChecado] = useState(false)
    function handleClick(numero) {
        setCount(count + numero);
        setChecado(!checado)
    }
    const checkedClass = checado ? 'checado' : 'descricao'
    const containerClass = `checkbox ${checkedClass}`.trim()

    const [creme, setCreme] = useState([]);
    const [frutas, setFrutas] = useState([]);
    const [complemento, setComplemento] = useState([]);

    let [contFrutas, setContFrutas] = useState(0)
    let [contAdicional, setContAdicional] = useState(0)
    let [contCreme, setContCreme] = useState(0)


    console.log(`Frutas ${contFrutas} Adicional ${contAdicional} Creme ${contCreme}`)
    const handleClickCreme = (e) => {
        const valorCreme = e.target.value;
        const checkedCreme = e.target.checked
        if (checkedCreme) {
            setCreme([
                ...creme, valorCreme
            ])
            setContCreme(contCreme += 1)
        } else {
            setCreme(creme.filter((e) => (e !== valorCreme)))
            setContCreme(contCreme -= 1)
        }
        console.log(`Creme ${contCreme}`)
    }
    const handleClickFrutas = (e) => {
        const valorFrutas = e.target.value;
        const checkedFrutas = e.target.checked
        if (checkedFrutas) {
            setFrutas([
                ...frutas, valorFrutas
            ])
            setContFrutas(contFrutas += 1)
        } else {
            setFrutas(frutas.filter((e) => (e !== valorFrutas)))
            setContFrutas(contFrutas -= 1)
        }
        console.log(`Frutas ${contFrutas}`)
    }
    const handleClickComplementos = (e) => {
        const valorComplemento = e.target.value;
        const checkedComplemento = e.target.checked
        if (checkedComplemento) {
            setComplemento([
                ...complemento, valorComplemento
            ])
            setContAdicional(contAdicional += 1)
        } else {
            setComplemento(complemento.filter((e) => (e !==
                valorComplemento)))
            setContAdicional(contAdicional -= 1)
        }
        console.log(`Adicional ${contAdicional}`)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(creme)
        console.log(complemento)
        console.log(frutas)
    }

    let [auxF, setAuxF] = useState(0)
    let [auxA, setAuxA] = useState(0)
    let [auxC, setAuxC] = useState(0)

    const numeroDeMarcacoes = (c, f, a) => {
        setAuxA(auxA = a)
        setAuxF(auxF = f)
        setAuxC(auxC = c)
    }
    console.log(`auxC ${auxC} auxF ${auxF} auxA ${auxA}`)

    return (
        <React.Fragment>
            <div className="montarAcai">
                <Header {...headerProps} />
                <div id="montar">
                    <section id="opcoesDeAcai">
                        <button onClick={() => handleClick(7) & setTitulo("Açaí de 250G") &
                            setDescricao("1 Creme + 2 Frutas + 3 Complementos") & setValor(7) &
                            numeroDeMarcacoes(1, 2, 3)
                        }
                            className="botaoMontarAcai">
                            <h3>Açaí 250g</h3>
                            <p>1 Creme + 2 Frutas + 3 Complementos</p>
                            <span>R$ 7,00</span>
                        </button>
                        <button onClick={() => handleClick(9) & setTitulo("Açaí de 350G") &
                            setDescricao("1 Creme + 3 Frutas + 4 Complementos") & setValor(9) &
                            numeroDeMarcacoes(1, 3, 4)
                        }
                            className="botaoMontarAcai">
                            <h3>Açaí 350g</h3>
                            <p>1 Creme + 3 Frutas + 4 Complementos</p>
                            <span>R$ 9,00</span>
                        </button>
                        <button onClick={() => handleClick(14) & setTitulo("Açaí de 550G") &
                            setDescricao("2 Creme + 4 Frutas + 6 Complementos") & setValor(14) &
                            numeroDeMarcacoes(2, 4, 6)
                        }
                            className="botaoMontarAcai">
                            <h3>Açaí 550g</h3>
                            <p>2 Creme + 4 Frutas + 6 Complementos</p>
                            <span>R$ 14,00</span>
                        </button>
                        <button onClick={() => handleClick(35) &
                            setTitulo("Açaí de 1k") & 
                            setDescricao("4 Creme + 5 Frutas + 8 Complementos") & setValor(35) &
                            numeroDeMarcacoes(4, 5, 6)
                        }
                            className="botaoMontarAcai">
                            <h3>Açaí 1kg</h3>
                            <p>4 Creme + 5 Frutas + 8 Complementos</p>
                            <span>R$ 35,00</span>
                        </button>
                    </section>
                    <section className={containerClass}>
                        <div id="tituloPedido">
                            <button onClick={handleClick}>
                                Voltar
                            </button>
                        </div>
                        <div id="descricao">
                            <h2>{titulo}</h2>
                            <p>{descricao}</p>
                        </div>
                        <hr />
                        <div className="complementos">
                            <div className="formComplementosAdd">
                                <h4>COMPLEMENTOS</h4>
                                <form id="adicionaiis">
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Leite Condensado"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Leite Condensado
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Leite em Pó"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Leite em Pó
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Bis"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Bis
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Castanha"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Castanha
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Amendoim"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Amendoim
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Choco Ball"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Choco Ball
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Flocos de Chocolate"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Flocos de Chocolate
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="M&M"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        M&M
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Ovomaltine"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Ovomaltine
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Chocolate em Pó"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Chocolate em Pó
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="complementoos" 
                                            value="Waffle"
                                            onChange= 
                                            {handleClickComplementos} 
                                            />
                                        Waffle
                                    </label>
                                </form>
                            </div>
                            <div className="formComplementosAdd">
                                <h4>CREMES</h4>
                                <form >
                                    <label>
                                        <input type="checkbox" 
                                            className="cremess" 
                                            value="Creme de Cupuaçu" 
                                            onChange={handleClickCreme} 
                                        />
                                        Creme de Cupuaçu
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="cremess" 
                                            value="Creme de Ninho" 
                                            onChange={handleClickCreme} 
                                        />
                                        Creme de Ninho
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="cremess" 
                                            value="Creme de Energético" 
                                            onChange={handleClickCreme} 
                                        />
                                        Creme de Energético
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="cremess" 
                                            value="Creme de Nutella" 
                                            onChange={handleClickCreme} 
                                        />
                                        Creme de Nutella
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="cremess" 
                                            value="Creme de Cookies" 
                                            onChange={handleClickCreme} 
                                        />
                                        Creme de Cookies
                                    </label>
                                </form>

                            </div>
                            <div className="formComplementosAdd">
                                <h4>FRUTAS</h4>
                                <form>
                                    <label>
                                        <input type="checkbox" 
                                            className="frutaas" 
                                            value="Morango" onChange= 
                                            {handleClickFrutas} 
                                        />
                                        Morango
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="frutaas" 
                                            value="Kiwi" onChange= 
                                            {handleClickFrutas} 
                                        />
                                        Kiwi
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="frutaas" 
                                            value="Banana" onChange= 
                                            {handleClickFrutas} 
                                        />
                                        Banana
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="frutaas" 
                                            value="Mamão" onChange= 
                                            {handleClickFrutas} 
                                        />
                                        Mamão
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="frutaas" 
                                            value="Uva" onChange= 
                                            {handleClickFrutas} 
                                        />
                                        Uva
                                    </label>
                                    <label>
                                        <input type="checkbox" 
                                            className="frutaas"     
                                            value="Abacaxi" onChange= 
                                            {handleClickFrutas}
                                        />
                                        Abacaxi
                                    </label>
                                </form>
                            </div>
                        </div>

                        <hr />
                        <div className="enviarEpreco">
                            <span>
                                {valor.toLocaleString('pt-BR', {
                                    style:
                                        'currency', currency: 'BRL'
                                })}
                            </span>
                            <Link to={"/users/" + (count)}        type="submit" onClick={handleSubmit} id="EnviarAcai">
                                Enviar
                            </Link>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default MontarAcai