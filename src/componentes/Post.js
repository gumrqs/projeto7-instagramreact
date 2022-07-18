import React from 'react';
export default function Post(props){
    const [nomeIcone, setNomeIcone] = React.useState("heart-outline");
    const [nomeClasse, setNomeClasse] = React.useState("nada");
    function likeIcone(){
        if(nomeIcone === "heart-outline"){
            setNomeIcone("heart");
            setNomeClasse("curtido");
        } 
        if(nomeIcone === "heart"){ 
            setNomeIcone("heart-outline");
            setNomeClasse("nada");
        }
    }
    return( 
            <div className='post'>
                <div class="usuario">
                    <div class="caixa-sugestao2">
                        <div class="img-sugestoes1">
                            <img src={props.postImg} alt=""/>
                            <div class="textos1">
                                <h1>{props.postUsuario}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="publicacao">
                    <img class="img-feed" src={props.postPubli} alt=""/>
                </div>
        
                <div class="reacao">
                    <div class="reacao1">
                        <div class={nomeClasse}><ion-icon name={nomeIcone} onClick={()=> likeIcone()}></ion-icon></div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="salvar">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                
                <div class="curtidas">
                    <div class="conteudo-curtidas">
                        <img class="img-curtidas" src={props.postImgCurtidas}alt=""/> 
                        <div class="numero-curtidas">Curtido por <strong>{props.postCurtido}</strong> e <strong>outras 101.523 pessoas</strong> 
                        </div>  
                    </div>
                
                </div>
            </div>
                )}
          
