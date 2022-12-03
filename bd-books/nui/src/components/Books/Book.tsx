import React, { useState, useEffect } from 'react'
import { useStyles } from './index.styles'
import { Slide } from '@mui/material'
import { useNuiEvent } from '../../hooks/useNuiEvents';
import { fetchNui } from '../../hooks/fetchNui';
import { isEnvBrowser } from '../../hooks/misc';
import HTMLFlipBook from 'react-pageflip';

const Contract = {
    type: 'contract',
    photo1: 'https://imgur.com/42drqSA.png',
    photo2: 'https://imgur.com/HMCHlvN.png',
    designationStamp: 'https://imgur.com/6zfsNzU.png',
    contractNo: 'MCMZCIC.VI',
    contractName: 'Pacific City Bank',
    targetName: 'Pacific Bank',
    location: 'Pacific',
    optional: true,
    optionalMain: 'Team Uniform (Optional)',
    optionalMap: [
        { msg: 'Jacket 1' },
        { msg: 'Jacket 2' },
        { msg: 'Jacket 3' },
    ],
    messages: [
        { msg: 'Your crew will rob the Bay City Bank under the following conditions:' },
        { msg: '- You will rob the bank under the guise of filming the movie: HARD TO KILL' },
        { msg: '- You will designate a directo, the action star, actors, and film crew. You may use hostages to be extrasor film crew. You are encourage to involve officers in roles if they are willing.' },
        { msg: '- After the robbery is done, you are to film and escape scene worthy of an action blockbuster movie.' },
        { msg: '- Lose any chasing PD' },
        { msg: 'This contract can only be marked complete when you return home with the take AND this document.' },
    ],
}

const Comic = {
    type: 'comic',
    frontPage: 'https://imgur.com/PEdkyzp.jpg',
    backFrontPage: 'https://imgur.com/PEdkyzp.jpg',
    frontBackPage: 'https://imgur.com/PEdkyzp.jpg',
    backPage: 'https://imgur.com/PEdkyzp.jpg',
    pages: [
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
        {img: 'https://imgur.com/rjdCy5w.png'},
    ]
}


export const Book = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false || isEnvBrowser())
    const [Book, setBook] = useState(Comic) as any

    const width = window.innerWidth;
    const height = window.innerHeight;
    const WidthSize = width * 0.4;
    const HeightSize = height * 0.80;

    useEffect(() => {
        const handleEscapeKey = (event: any) => {
            if (event.code === 'Escape' && open) {
                setOpen(false);
                fetchNui('bd-books:closeapp', {})
            }
        }

        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [open, setOpen])

    useNuiEvent('bd-books:setcontract', (data) => {
        setBook(data.contract)
        setOpen(true)
    })

    return (
        <>
            
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <div className={classes.wrapper}>
                    {Book.type === 'contract' && <>
                        {/* @ts-ignore */}
                        <div className={classes.realWrapper} /><div className={classes.bookWrapper}>
                            <div className={classes.dataWrapper}>
                                <div className={classes.section}>
                                    <div className={classes.firstImage}>
                                        <div className={classes.dataPhoto} style={{ backgroundImage: `url(${Book.photo1})` }}>
                                            <div className={classes.tape}
                                                style={{ backgroundImage: 'url(https://imgur.com/0idH1ym.png)' }} />
                                        </div>
                                    </div>
                                    <div className={classes.firstImage2}
                                        style={{
                                            position: 'absolute',
                                            top: '30%',
                                            marginRight: Book.optional ? '30%' : '0%',
                                        }}
                                    >
                                        <div className={classes.dataPhoto2} style={{ backgroundImage: `url(${Book.photo2})` }}>
                                            <div className={classes.tape2}
                                                style={{ backgroundImage: 'url(https://imgur.com/EMoLyvT.png)' }} />
                                            {Book.optional && <div className={classes.optional} style={{ backgroundImage: 'url(https://imgur.com/lflwIjm.png)' }}>
                                                <div className={classes.optionalWrapper}>
                                                    <div className={classes.briefingText}>{Book.optionalMain}</div>
                                                    <br />
                                                    {Book.optionalMap.map((item: any, index: number) => (
                                                        <div className={classes.briefingText} style={{ fontSize: '1.2rem' }} key={index}>{item.msg}</div>
                                                    ))}
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.section2} style={{
                                    alignItems: 'center',
                                }}>
                                    <div className={classes.paper}>
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            position: 'relative',
                                            top: '20%',
                                        }}>
                                            <div className={classes.hr} style={{ left: '20%', top: '1%' }}>
                                                <div className={classes.zone1}>

                                                    <div className={classes.separation}>
                                                        <h2 style={{ color: '#962214', marginLeft: '5px' }}>{Book.contractNo}</h2>
                                                    </div>
                                                    <div className={classes.separation}>
                                                        <h3 style={{ color: 'black', marginLeft: '20px' }}>{Book.contractName}</h3>
                                                    </div>
                                                    <div className={classes.separation}>
                                                        <h4 style={{ color: 'black', marginLeft: '20px' }}>{Book.targetName}</h4>
                                                    </div>
                                                    <div className={classes.separation}>
                                                        <h4 style={{ color: 'black', marginLeft: '20px' }}>{Book.location}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={classes.completeInfo} style={{ wordBreak: 'break-word', top: '8.5%' }}>
                                                {Book.messages.map((msg: any, index : any) => (
                                                    <div className={classes.briefingText} key={index}>{msg.msg}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}

                    {Book.type === 'comic' &&
                        <div className={classes.centerComic}>
                            {/* @ts-ignore */}
                            <HTMLFlipBook
                                width={WidthSize}
                                height={HeightSize}
                                showCover={true}
                                drawShadow={true}
                            >
                                <div className={classes.comicPage}>
                                    <img src={Book.frontPage} alt="comic" className={classes.photoFit}/> 
                                </div>
                                <div className={classes.comicPage}>
                                    <img src={Book.backFrontPage} alt="comic" className={classes.photoFit}/> 
                                </div>
                                {Book.pages.map((page: any, index: number) => (
                                    <div className={classes.comicPage} key={index}>
                                        <img src={page.img} alt="comic" className={classes.photoFit} /> 
                                    </div>
                                ))}
                                <div className={classes.comicPage}>
                                    <img src={Book.frontBackPage} alt="comic" className={classes.photoFit}/> 
                                </div>
                                <div className={classes.comicPage}>
                                    <img src={Book.backPage} alt="comic" className={classes.photoFit}/> 
                                </div>
                            </HTMLFlipBook>
                        </div>}
                </div>
            </Slide>
        </>
    )
}
