import logo from '../imagens/logo.png';
export default function Menu(){
    return (
        <div class="topo">
        

        <div class="container">
            
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="borda-vertical"></div>
           <img class="img-logo" src={logo}/>
        </div>
                
        <div class="pesquisar">
            <input placeholder="Pesquisar"/>
        </div>
                    
        <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
        </div>
        <Mobile/>
    </div>
     
    );
}
function Mobile(){
    return(
        <div class="mobile">
            <div class="logo">

                <ion-icon name="logo-instagram"></ion-icon>
            </div>
               <div class="insta"> <a href="http://instagram.com"> 
               <img class="img-logo" src={logo}/> </a>
            </div>
           
            <div class="direct">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

        </div>
    )
}