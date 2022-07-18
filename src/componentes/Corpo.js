import { storiesCorpo } from '../dados.js';
import { postsCorpo } from '../dados.js';
import Post from './Post';
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
    let postProps = postsCorpo.map(post => <Post postImg={post.img} postUsuario={post.usuario} postPubli={post.publi} postImgCurtidas={post.imgcurtidas} postCurtido={post.curtido}/>);
    return (
        <div class='feed'>
            {postProps}
        </div>
    ); 
}
