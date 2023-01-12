import React  from "react"
import Header from "../header/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import {FaArrowLeft, FaMoneyCheck, FaMoneyBillAlt} from "react-icons/fa"
import{AiOutlineDollarCircle} from "react-icons/ai"
import "./Compras.css"

const headerProps = {
    title: "Sacola de Compras",
    subtitle:'Cadastre seus Dados'
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
         <> <Header {...headerProps}/>
        
            <div className="main">
                <div className="bolaEsquerda"></div>
                <div className="bolaDireita"></div>
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
                                <label><input type="radio" value="Pix" onChange={(e) => setPagamento(e.target.value)} /><p>Pix</p><AiOutlineDollarCircle className="icon"/></label>
                                <label><input type="radio" value="Cartão" onChange={(e) => setPagamento(e.target.value)} /><p>Cartão </p><FaMoneyCheck className="icon"/></label>
                                <label><input type="radio" value="Espécie" onChange={(e) => setPagamento(e.target.value)} /><p>Espécie</p> <FaMoneyBillAlt className="icon"/></label>
                            </div>
                            <div className="button">
                                <input type="submit" value="Finalizar Compra" id="enviar" onClick={cadastroUsuario}/>
                                <Link to={'/'} id="voltar"><FaArrowLeft className="icon"/> Voltar</Link>
                            </div>
                        </form>
                    </div>
                </section>
                <section className={containerClass}>
                    <h3>Nota Fiscal</h3>
                    <div className="nota">
                        <p>Nome: <span>{nome}</span></p>
                        <p>Contato: <span>{contato}</span></p>
                        <p>Cidade: <span>{cidade}</span></p>
                        <p>Rua: <span>{rua}</span></p>
                        <p>Numero: <span>{numero}</span></p>
                        <p>Bairro: <span>{bairro}</span></p>
                        <p>Estado: <span>{estado}</span></p>
                        <p>Total a Pagar: <span>{Number(id).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
                        <p>Forma de Pagamento: <span>{pagamento}</span></p>
                    </div>
                </section>
            </div>
             
         </>
     )
}
export default UserCrud
