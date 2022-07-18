import { storiesCorpo } from '../dados.js';
import { postsCorpo } from '../dados.js';
import background from '../imagens/stories_background.jpg';
import React from 'react';

export default function Corpo(){
    return (
        <div class="feed">
                <Stories/>
                <Posts/>
        </div> 
    );         
}
function Stories () {
    return (
        <div class="stories">
        {storiesCorpo.map((story)=>{
        return(
                <div class="story">
                    <div class="img-stories">
                        <img class="img-externa" src={background} alt=""/>
                        <img class="centro" src={story.img} alt=""/>
                    </div>
                    <div class="texto-stories">{story.texto}</div>
                </div>
        )}
        )} 
        <ion-icon name="chevron-forward-circle"></ion-icon>

        </div> 
    );         
}

function Posts(){
    const [nomeIcone, setNomeIcone] = React.useState("heart-outline");

    return (
        <div>
            {postsCorpo.map((post)=>
            {
            return(  
            <div class="feed">
                <div class="usuario">
                    <div class="caixa-sugestao1">
                        <div class="img-sugestoes1">
                            <img src={post.img} alt=""/>
                            <div class="textos1">
                                <h1>{post.usuario}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="publicacao">
                    <img class="img-feed" src={post.publi} alt=""/>
                </div>
        
                <div class="reacao">
                    <div class="reacao1">
                    <ion-icon name={nomeIcone} onClick={()=> { 
                            if(nomeIcone === "heart-outline")
                            {
                            setNomeIcone("heart")  
                        } 
                            else 
                            { setNomeIcone("heart-outline");}}}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="salvar">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                
                <div class="curtidas">
                    <div class="conteudo-curtidas">
                        <img class="img-curtidas" src={post.imgcurtidas}alt=""/> 
                        <div class="numero-curtidas">Curtido por <strong>{post.curtido}</strong> e <strong>outras 101.523 pessoas</strong> 
                        </div>  
                    </div>
                
                </div>
            </div>
                )}
            )}
        </div>
    ); 
}
