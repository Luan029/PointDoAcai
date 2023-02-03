import React, {useState} from "react";
import "./main.css"
import Header from "../header/Header"
import { Link } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa"
import Footer from "../footer/Footer";

const Main = (props) =>{

    const [count, setCount] = useState(0);

    function handleClick(numero) {
        setCount(count + numero);
    }
    function remover(){
        setCount(count * 0)
    }
     
    return (
        <React.Fragment>
            <div className="corpo">
                <Header {...props}/>
                <main>
                    <section className="cardapio">
                       
                        <section className="acaiNoCopo">
                            <h2>Açaí no copo</h2>
                            <div className="opcoes">
                                <h3>Delícias de Morango</h3>
                                <img src="https://media.istockphoto.com/id/1364213175/pt/foto/brazilian-frozen-a%C3%A7ai-berry-ice-cream-smoothie-in-plastic-cup-with-bananas-strawberry-and.jpg?s=612x612&w=0&k=20&c=d1VUzBghAPoefO-w1uYp59Lp9PcnMRHVhzlfRu8VgXk=" alt="acaiNoCopo" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$10,00</s> </span>
                                    <span className="precoPor">R$7,99</span>
                                </div>
                                <button onClick={() => handleClick(7.99, "Açaí com Morango, ")} className="botaoComprar">COMPRAR</button>

                            </div>
                            <div className="opcoes">
                                <h3>Prestígio</h3>
                                <img src="https://as2.ftcdn.net/v2/jpg/04/23/60/59/1000_F_423605907_YV7oMBOwecZ2Fu6aho9Owi8U4zcROBTm.jpg" alt="acaiNoCopo" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$10,00</s> </span>
                                    <span className="precoPor">R$7,99</span>
                                </div>
                                <button onClick={() => handleClick(7.99, 'Açaí com Leite em Pó, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                
                            <div className="opcoes">
                                <h3>Fitnes</h3>
                                <img src="https://img.freepik.com/fotos-premium/copo-de-acai-com-leite-condensado-de-kiwi-e-granola-isolado-no-fundo-branco_519721-138.jpg?w=360" alt="acaiNoCopo" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$10,00</s> </span>
                                    <span className="precoPor">R$7,99</span>
                                </div>
                                <button onClick={() => handleClick(7.99, 'Açaí com Kiwi, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                            <div className="opcoes">
                                <h3>Sensação</h3>
                                <img src="https://img.freepik.com/fotos-premium/sorvete-de-acai-congelado-brasileiro-em-copo-plastico-com-flocos-de-aveia-isolado-no-fundo-branco-vista-frontal-do-menu-de-verao_317399-990.jpg?w=740" alt="acaiNoCopo" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$10,00</s> </span>
                                    <span className="precoPor">R$7,99</span>
                                </div>
                                <button onClick={() => handleClick(7.99, 'Açaí com Aveia, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                            <div className="opcoes">
                                <h3>Chocante</h3>
                                <img src="https://as1.ftcdn.net/v2/jpg/04/23/60/58/1000_F_423605893_VVrUVTdcFqetzB0AsZkrxJlNypovHvpc.jpg" alt="acaiNoCopo" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$10,00</s> </span>
                                    <span className="precoPor">R$7,99</span>
                                </div>
                                <button onClick={() => handleClick(9.99, 'Açaí Granulado, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                        </section>
                        <section className="acaiNaTijela">
                            <h2>Açaí na Vasilha</h2>
                            <div className="opcoes">
                                <h3>Açaí Tradicional</h3>
                                <img src="https://st2.depositphotos.com/4366637/12182/i/600/depositphotos_121824102-stock-photo-acai-cup-brazilian-famous-fruit.jpg" alt="tijela" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$12,00</s> </span>
                                    <span className="precoPor">R$9,99</span>
                                </div>
                                <button onClick={() => handleClick(9.99, 'Açaí Tradicional, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                            <div className="opcoes">
                                <h3>Açaí com Banana</h3>
                                <img src="https://st2.depositphotos.com/4366637/12182/i/450/depositphotos_121821540-stock-photo-acai-cup-brazilian-famous-fruit.jpg" alt="tijela" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$12,00</s> </span>
                                    <span className="precoPor">R$9,99</span>
                                </div>
                                <button onClick={() => handleClick(9.99)} className="botaoComprar">COMPRAR</button>

                            </div>
                            <div className="opcoes">
                                <h3>Açaí Granulado</h3>
                                <img src="https://st2.depositphotos.com/4366637/12182/i/600/depositphotos_121823392-stock-photo-acai-cup-brazilian-famous-fruit.jpg" alt="tijela" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$12,00</s> </span>
                                    <span className="precoPor">R$9,99</span>
                                </div>
                                <button onClick={() => handleClick(9.99, 'Açaí Tradicional na Tijela, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                            <div className="opcoes">
                                <h3>Açaí Puro</h3>
                                <img src="https://st2.depositphotos.com/4366637/12182/i/600/depositphotos_121824358-stock-photo-acai-cup-brazilian-famous-fruit.jpg" alt="tijela" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$10,00</s> </span>
                                    <span className="precoPor">R$7,50</span>
                                </div>
                                <button onClick={() => handleClick(7.50, 'Açaí Puro na Tijela, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                            <div className="opcoes">
                                <h3>Açaí Especial</h3>
                                <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-acai-in-the-bowl-png-image_3637278.jpg" alt="tijela" />
                                <div className="preco">
                                    <span className="precoDe"><s>R$15,00</s> </span>
                                    <span className="precoPor">R$12,50</span>
                                </div>
                                <button onClick={() => handleClick(12.50, 'Açaí Completo na Tijela, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                        </section>
                        <section className="BarcaOuRoleta">
                            <h2>Barcas de Açaí</h2>
                            <div className="opcoes">
                                <h3>Barca tamanho GG</h3>
                                <img src="https://www.praticpack.com.br/wp-content/uploads/2020/07/08.barca-de-acai-a-moda-da-sobremesa-refrescante-do-verao-G.jpg" alt="tijela" id="rodarImagem"/>
                                <div className="preco">
                                    <span className="precoDe"><s>R$28,00</s> </span>
                                    <span className="precoPor">R$25,99</span>
                                </div>
                                <button onClick={() => handleClick(25.99, 'Barca de Açaí tamanho GG, ')} className="botaoComprar">COMPRAR</button>

                            </div>
                            <div className="opcoes">
                                <h3>Barca tamanho G</h3>
                                <img src="https://snowfruit.com.br/wp-content/uploads/2021/11/como_aumentar_as_vendas_no_verao_com_as_barcas_de_acai.png" alt="tijela" id="rodarImagem"/>
                                <div className="preco">
                                    <span className="precoDe"><s>R$23,00</s> </span>
                                    <span className="precoPor">R$19,99</span>
                                </div>
                                <button onClick={() => handleClick(19.99, 'Barca de Açaí tamanho G, ')} className="botaoComprar">COMPRAR</button>
                            </div>
                            <div className="opcoes">
                                <h3>Barca tamanho M</h3>
                                <img src="https://snowfruit.com.br/wp-content/uploads/2021/11/complementos_barca_de_acai.jpg" alt="tijela" id="rodarImagem"/>
                                <div className="preco">
                                    <span className="precoDe"><s>R$20,00</s> </span>
                                    <span className="precoPor">R$18,99</span>
                                </div>
                                <button onClick={() => handleClick(18.99, 'Barca de Açaí tamanho M, ')} className="botaoComprar">COMPRAR</button>
                            </div>
                        </section>
                    </section>
                    <section className="AreaDeConta">
                        <div id="preco">Total a pagar: {count.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </div>
                        <div className="finalizar">
                            <div>
                                <Link to={"/users/" + (count)}id="finalizarCompra">Finallizar compra</Link>
                            </div>
                            <div>
                                <Link to={"/MontarAcai"} id="montarAcaii">Montar Açaí</Link>
                            </div>
                            <div>
                                <button onClick={() => remover()} id="remove">Cancelar Pedido <FaTrashAlt/></button>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default Main