
import { sugestoesSidebar } from '../dados.js'
import fiona from '../imagens/fiona.jpeg';
function Usuario(props){
return (
    <div class="caixa-sugestoes">
            <div class="img-sugestoes">
                <img src= {props.img} alt=""/>
            </div>
            
            <div class="textos">
                <h1>{props.nome}</h1>
                <h2>{props.Sobrenome}</h2>
            </div>
        </div>
        
)
}
 function Sidebar(){
    return (
        <div class="sugestoes">
             <Usuario nome='Feiona' Sobrenome='Assis' img={fiona}/>
        <div class="para-voce">
            <a class="link1" href="http://instagram.com">Sugestões para você</a>
            <a class="link2" href="http://instagram.com">Ver tudo</a>
        </div>
        <Sugestoes/>

        <div class="rodape">
           <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags • 
            Idioma</p>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    </div>
    );
}

function Sugestoes (){
   
    return ( 
        <div class="opcoes">
            {sugestoesSidebar.map((sugestao)=> { 
                return(
                    <div class="caixa-sugestao1">
                        <div class="img-sugestoes1">
                            <img src={sugestao.img} alt=""/>
                            <div class="textos1">
                                <h1>{sugestao.nome}</h1>
                                <h2>{sugestao.sobrenome}</h2>
                            </div>
                        </div>
                        <a class="link3" href="http://instagram.com">Seguir</a>
                    </div>
                )}
            )}      
        </div>  
    ); 
}
export default Sidebar;



