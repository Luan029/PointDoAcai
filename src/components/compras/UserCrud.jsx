import React  from "react"
import Header from "../header/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import {FaArrowLeft, FaMoneyCheck, FaMoneyBillAlt} from "react-icons/fa"
import{AiOutlineDollarCircle} from "react-icons/ai"
import "./Compras.css"
import Footer from "../footer/Footer";

const headerProps = {
    title: "Point do Açaí",
    subtitle:'Sacola de Compras'
}

const UserCrud = props =>{
    const {id} = useParams()
    
    
    const [checked, setChecked] =useState(false)
    function cadastroUsuario(e){
        e.preventDefault()
        setChecked(!checked)
    }
    const checkedClass = checked ? 'checked': 'NotaFiscal'
    const containerClass = `checkbox ${checkedClass}`.trim()

    const [nome, setNome] = useState("")
    const [contato, setContato] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [estado, setEstado] = useState("")
    const [numero, setNumero] = useState("")
    const [pagamento, setPagamento] = useState("")
 
     return (
        <> 
            <div className="paginaForm">
                <Header {...headerProps}/>
                <div className="main">
                    <section className="Cadastro">
                        <div className="formulario">
                            <form onSubmit={cadastroUsuario}>
                                <h2>Informações de Contato:</h2>
                                <div className="infoContato">
                                    <div>
                                        <input
                                            type="text"
                                            className="marcar"
                                            placeholder="Nome"
                                            onChange={(e) => setNome(e.target.value)} />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            className="marcar"
                                            placeholder="Contato"
                                            onChange={(e) => setContato(e.target.value)} />
                                    </div>
                                </div>
                                <div className="infoEndereco">
                                    <h2>Informações de Endereço:</h2>
                                    <div>
                                        <input
                                            type="text"
                                            className="marcar"
                                            placeholder="Cidade"
                                            onChange={(e) => setCidade(e.target.value)} />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="marcar"
                                            placeholder="Numero"
                                            onChange={(e) => setNumero(e.target.value)} />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="marcar"
                                            placeholder="Rua"
                                            onChange={(e) => setRua(e.target.value)} />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="marcar"
                                            placeholder="Bairro"
                                            onChange={(e) => setBairro(e.target.value)} />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="marcar"
                                            placeholder="Estado"
                                            onChange={(e) => setEstado(e.target.value)} />
                                    </div>
                                </div>
                                <h2>Formas de Pagamento:</h2>
                                <div className="Pagamento">
                                    <label>
                                        <input type="radio"  
                                            value="Pix" onChange={(e) => 
                                            setPagamento(e.target.value)}/>
                                                <p>Pix</p>
                                            <AiOutlineDollarCircle className="icon"/>
                                    </label>
                                    <label>
                                        <input type="radio"  
                                            value="Cartão" onChange={(e) => 
                                            setPagamento(e.target.value)}/>
                                                <p>Cartão </p>
                                            <FaMoneyCheck className="icon"/>
                                    </label>
                                    <label>
                                        <input type="radio"  
                                            value="Espécie" onChange={(e) => 
                                            setPagamento(e.target.value)}/>
                                                <p>Espécie</p>
                                             <FaMoneyBillAlt className="icon"/>
                                        </label>
                                </div>
                                <div className="button">
                                    <input type="submit" value="Finalizar Compra" id="enviar" onClick={cadastroUsuario}/>
                                    <Link to={'/'} id="voltar"><FaArrowLeft className="icon"/> Voltar</Link>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className={containerClass}>
                        <div className="nota">
                            <table>
                                <thead>
                                    <tr>
                                        INFORMAÇÕES
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nome</td>
                                        <td>{nome}</td>
                                        <td>Contato</td>
                                        <td>{contato}</td>
                                    </tr>
                        
                                    <tr>
                                        <td>Cidade</td>
                                        <td>{cidade}</td>
                                        <td>Bairro</td>
                                        <td>{bairro}</td>
                                        <td>Estado</td>
                                        <td>{estado}</td>
                                    </tr>

                                    <tr>
                                        <td>Rua</td>
                                        <td>{rua}</td>
                                        <td>Número</td>
                                        <td>{numero}</td>
                                    </tr>
                                    <tr>
                                       <td>Total a Pagar</td>
                                       <td>{Number(id).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                       <td>Forma de Pagamento</td>
                                       <td>{pagamento}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        </>
     )
}
export default UserCrud
