import React, {useState} from 'react'
import BulletPointDiv from './BulletPointDiv'
import styled from 'styled-components'


const ContainerDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;`


const Memes = () =>{

    const cssMemes = [
        "https://pics.me.me/him-css-html-html-without-css-54531248.png",
        "https://pics.me.me/judi-html-html-css-titleim-not-good-at-titles-title-56222229.png",
        "https://starecat.com/content/wp-content/uploads/me-makes-small-change-to-the-css-my-websites-looks-ridiculous.jpg",
        "https://www.bram.us/wordpress/wp-content/uploads/2017/01/css-is-awesome.jpg",
    ]

    const gitMemes = [
        "https://miro.medium.com/max/1200/0*tmfbLDU_hIeg0B3B.jpg",
        "https://i.redd.it/c7xz1970t7t21.png",
        "https://res.cloudinary.com/practicaldev/image/fetch/s--NUSRQ-3J--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.redd.it/5iphhycu0io11.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsofes9nTumS8rP4jh-VSzXNr07bnkskci6w&usqp=CAU",
        "https://media.makeameme.org/created/git-blame-blame.jpg",
        "https://memegenerator.net/img/instances/44318584.jpg"
    ]

    const programmerMemes = [
        "https://i.chzbgr.com/full/9195089920/h7E59E42E/meme-cartoon-%D0%B0-%D0%B0-%D0%B0-its-first-word-arrays-start-at-1-live-local-late-breaking-baby-found-in-dumpster",
        "https://external-preview.redd.it/lIPUeKFOI5tcj85H8fcNgjGWLAGGNAbCvde-mkqhaN4.png?auto=webp&s=52345cf9d85662cbc2c0019c162e1fe801db3464",
        "https://i.pinimg.com/originals/36/ab/81/36ab81cd8d63cf7c4a08f39403698c77.jpg",
        "https://i.redd.it/svi2zx472xr41.jpg",
        "https://i.pinimg.com/originals/54/4d/54/544d540dbdbd29c415ee24e89af8cbc5.jpg",
        "https://miro.medium.com/max/1920/0*z1mm6izqSeDiKukb",
        "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-63.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSp02w12wTbJjIJv5-zbb50srbgKuAGt0RAw&usqp=CAU",
        "https://miro.medium.com/max/1434/1*jdAwoALSdrFDeE4v1QRLNg.png"
    ]


    const [memeToDisplay, setMeme] = useState('https://i.pinimg.com/originals/54/4d/54/544d540dbdbd29c415ee24e89af8cbc5.jpg')

    const randomize = (e) => {
        const memeType = e.target.id;

        switch (memeType){
            case 'css': 
                setMeme(cssMemes[Math.floor(Math.random() * Math.floor(cssMemes.length))])
                break;
            case 'git':
                setMeme(gitMemes[Math.floor(Math.random() * Math.floor(gitMemes.length))])
                break;
            case 'programmerMemes':
                setMeme(programmerMemes[Math.floor(Math.random() * Math.floor(gitMemes.length))])
                break;
        }
    }

    return (
        <ContainerDiv>
        <BulletPointDiv>
            <div>
                <img width='300' height='400' src={memeToDisplay} alt=""/>
            </div>
            <div>
            <button id='css' onClick={randomize}>Give me CSS memes</button>
            <button id='git' onClick={randomize}>Give me Git memes</button>
            <button id='programmerMemes' onClick={randomize}>Give me Programmer memes</button>
            </div>
        </BulletPointDiv>
        </ContainerDiv>
    )

}

export default Memes