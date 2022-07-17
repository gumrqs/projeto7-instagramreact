
import biscoito from './imagens/biscoito.jpeg';
import botas from './imagens/botas.jpeg';
import braba from './imagens/braba.jpeg';
import draga from './imagens/draga.jpeg';
import principe from './imagens/princi.jpeg';
import burek from './imagens/burek.jpg';
import urro from './imagens/urro.jpg';
import mentiroso from './imagens/mentiroso.jpeg';
import farfar from './imagens/farfar.jpeg';
import far from './imagens/far.jpg';
import madrinha from './imagens/fadamadrinha.jpeg';
import sherek from './imagens/sherek.jpeg';
import shereksuspeito from './imagens/shereksupeito.jpg';
import ufsm from './imagens/ufsm.jpeg';
import meme from './imagens/meme.jpeg';
import burrinho from './imagens/burrinho.jpeg';
import burrotriste from './imagens/burrotriste.jpeg';




const sugestoesSidebar=[ 
    {
        nome: 'Gato',
        sobrenome:'de botas', 
        img:botas
    }, 
    {   
        nome: 'Dragoa',
        sobrenome:'e o burro',
        img:draga
    },
    {   
        nome: 'Principe',
        sobrenome:'odonto',
        img:principe
    },
    {   
        nome: 'Princesa',
        sobrenome:'raivosa',
        img:braba
    },
    {   
        nome: 'Biscoito',
        sobrenome:'de vanilla',
        img:biscoito
    },
]

const storiesCorpo =[

    {
        img: sherek,
        texto:'chureq'
    },
    {
        img: madrinha,
        texto:'fada'
    },
    {
        img: urro,
        texto:'Urro'
    },
    {
        img: burek,
        texto:'Burek'
    },
    {
        img: mentiroso,
        texto:'falso'
    },
    {
        img: shereksuspeito,
        texto:'sherek'
    },
    {
        img: farfar,
        texto:'tãotão...'
    },
    {
        img: far,
        texto:'distante'
    },
    ]
const postsCorpo = [
    {
        img: burek,
        usuario: 'friends',
        publi: burrinho,
        curtido: 'faz o urro',
        imgcurtidas: urro
    },
    {
        img:burrotriste,
        usuario: 'Eu',
        publi:burrotriste,
        curtido: 'dragoa',
        imgcurtidas: draga
    },
    {
        img: ufsm,
        usuario: 'faculdade',
        publi: meme,
        curtido: 'alunos',
        imgcurtidas: sherek

    },
    {
        img: far,
        usuario: 'alguem',
        publi: sherek,
        curtido:'gato de..',
        imgcurtidas: urro
    }
]

export {
    sugestoesSidebar,
    storiesCorpo,
    postsCorpo

}