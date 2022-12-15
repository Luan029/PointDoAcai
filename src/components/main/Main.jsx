import React from "react";
import "./main.css"
//import {motion} from 'framer-motion'
//import barca from './barca.jpg'
//import copos from './copos.jpg'
//import tijela from './tijela.jpg'
//import roleta from './roleta.jpg'
//const imagens = [barca, copos, tijela, roleta ]
const Main = () =>{

    return (
        <React.Fragment>
            <main>
                <section className="cardapio">
                    <h2>Açai no copo</h2>
                    <section className="acaiNoCopo">
                        <div className="opcoes">
                            <h3>Açai com Morango</h3>
                            <img src="https://media.istockphoto.com/id/1364213175/pt/foto/brazilian-frozen-a%C3%A7ai-berry-ice-cream-smoothie-in-plastic-cup-with-bananas-strawberry-and.jpg?s=612x612&w=0&k=20&c=d1VUzBghAPoefO-w1uYp59Lp9PcnMRHVhzlfRu8VgXk=" alt="acaiNoCopo" />
                            <div className="preco">
                                <span className="precoDe"><s>R$10.00</s> </span>
                                <span className="precoPor">R$7.99</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                        <div className="opcoes">
                            <h3>Açai com leite em pó</h3>
                            <img src="https://as2.ftcdn.net/v2/jpg/04/23/60/59/1000_F_423605907_YV7oMBOwecZ2Fu6aho9Owi8U4zcROBTm.jpg" alt="acaiNoCopo" />
                            <div className="preco">
                                <span className="precoDe"><s>R$10.00</s> </span>
                                <span className="precoPor">R$7.99</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                       
                        <div className="opcoes">
                            <h3>Açai com Kiwi</h3>
                            <img src="https://img.freepik.com/fotos-premium/copo-de-acai-com-leite-condensado-de-kiwi-e-granola-isolado-no-fundo-branco_519721-138.jpg?w=360" alt="acaiNoCopo" />
                            <div className="preco">
                                <span className="precoDe"><s>R$10.00</s> </span>
                                <span className="precoPor">R$7.99</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                        <div className="opcoes">
                            <h3>Açai com Aveia</h3>
                            <img src="https://img.freepik.com/fotos-premium/sorvete-de-acai-congelado-brasileiro-em-copo-plastico-com-flocos-de-aveia-isolado-no-fundo-branco-vista-frontal-do-menu-de-verao_317399-990.jpg?w=740" alt="acaiNoCopo" />
                            <div className="preco">
                                <span className="precoDe"><s>R$10.00</s> </span>
                                <span className="precoPor">R$7.99</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                        <div className="opcoes">
                            <h3>Açaí Granulado </h3>
                            <img src="https://as1.ftcdn.net/v2/jpg/04/23/60/58/1000_F_423605893_VVrUVTdcFqetzB0AsZkrxJlNypovHvpc.jpg" alt="acaiNoCopo" />
                            <div className="preco">
                                <span className="precoDe"><s>R$10.00</s> </span>
                                <span className="precoPor">R$7.99</span>
                            </div>
                            <button>COMPRAR</button>
                        </div> 
                    </section>
                    <section className="acaiNaTijela">
                        <h2>Açai na Tijela</h2>
                        <div className="opcoes">
                            <h3>Açaí Tradicional</h3>
                            <img src="https://st2.depositphotos.com/4366637/12182/i/600/depositphotos_121824102-stock-photo-acai-cup-brazilian-famous-fruit.jpg" alt="tijela" />
                            <div className="preco">
                                <span className="precoDe"><s>R$12.00</s> </span>
                                <span className="precoPor">R$9.99</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                        <div className="opcoes">
                            <h3>Açaí com Banana</h3>
                            <img src="https://st2.depositphotos.com/4366637/12182/i/450/depositphotos_121821540-stock-photo-acai-cup-brazilian-famous-fruit.jpg" alt="tijela" />
                            <div className="preco">
                                <span className="precoDe"><s>R$12.00</s> </span>
                                <span className="precoPor">R$9.99</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                        <div className="opcoes">
                            <h3>Açaí Granulado</h3>
                            <img src="https://st2.depositphotos.com/4366637/12182/i/600/depositphotos_121823392-stock-photo-acai-cup-brazilian-famous-fruit.jpg" alt="tijela" />
                            <div className="preco">
                                <span className="precoDe"><s>R$12.00</s> </span>
                                <span className="precoPor">R$9.99</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                        <div className="opcoes">
                            <h3>Açaí Puro</h3>
                            <img src="https://st2.depositphotos.com/4366637/12182/i/600/depositphotos_121824358-stock-photo-acai-cup-brazilian-famous-fruit.jpg" alt="tijela" />
                            <div className="preco">
                                <span className="precoDe"><s>R$10.00</s> </span>
                                <span className="precoPor">R$7.50</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                        <div className="opcoes">
                            <h3>Açaí Completo</h3>
                            <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-acai-in-the-bowl-png-image_3637278.jpg" alt="tijela" />
                            <div className="preco">
                                <span className="precoDe"><s>R$15.00</s> </span>
                                <span className="precoPor">R$12.50</span>
                            </div>
                            <button>COMPRAR</button>
                        </div>
                    </section>
                </section>
            </main>
        </React.Fragment>
    )
}
export default Main