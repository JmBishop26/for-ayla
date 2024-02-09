"use client"
import { useState } from "react";
import styles from "../styles/main.module.scss";
import { Container } from 'semantic-ui-react'

export default function Home() {

  const [noButtonStyle, setNoButtonStyle] = useState({
    position: "",
    left: 0,
    top: 0,
  });

  const [openNext, setOpenNext] = useState({
    clicked: false,
    firstPartDisplay: "block",
    secondPartDisplay: "none"
  })

  const [openLast, setOpenLast] = useState({
    clicked: false,
    secondPartDisplay: "block",
    thirdPartDisplay: "none",
  })

  const [secondNo, setSecondNo] = useState({
    display: "inline",
    width: "fit-content",
    height: "auto",
    opacity: "100"
  });

  const [openEnvelope, setOpenEnvelope] = useState({
    rotate: "0deg",
    top: "239",
    paperTop: "254",
    zIndex: "2"
  })

  const handleEnvelopeOpen = () => {
    setOpenEnvelope({
      rotate: "180deg",
      top: "109",
      paperTop: "150",
      zIndex: "5"
    })
  };

  const handleSecondButtonHover = () => {
    setSecondNo({
      display: "none",
      width: "1000px",
      height: "700px",
      opacity: "0"
    });
  };

  const handleNoButtonHover = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    setNoButtonStyle({
      position: "absolute",
      left: randomX,
      top: randomY,
    });
  };

  const handleFirstYesButton = () => {
    setOpenNext({
      clicked:true,
      firstPartDisplay: "none",
      secondPartDisplay: "block"
    })
  }

  const handleSecondYesButton = () => {
    setOpenLast({
      clicked: true,
      secondPartDisplay: "none",
      thirdPartDisplay: "block",
    })
  }

  return (
    <Container className={styles.container}>

      <div 
        className={styles.firstPart}
        style={{ display: `${openNext.firstPartDisplay}` }}
      >
        <h1>Can you be my Valentine's Date, Ayla????</h1>
        <button className={styles.btnYes} onClick={handleFirstYesButton}>
          <p>YESSSS!</p>
        </button>
        <button 
          className={styles.btnNo}
          onMouseOver={handleNoButtonHover}
          style={{ position: `${noButtonStyle.position}`, left: `${noButtonStyle.left}px`, top: `${noButtonStyle.top}px` }}
        >
          <p>NO</p>
        </button>
      </div>

      <div 
        className={styles.secondPart}
        style={{ display: `${openNext.clicked? openLast.secondPartDisplay : openNext.secondPartDisplay}` }}
      >
        <h1>
            true baaa? kase kinikilig na koooo
        </h1>
        <button 
          className={styles.btnYes} onClick={handleSecondYesButton}
          style={{ width: `${secondNo.width}`, height: `${secondNo.height}`  }}
        >
          <p>YESSSS ULIT!</p>
        </button>
        <button 
          className={styles.btnNo}
          onMouseOver={handleSecondButtonHover}
          style={{ opacity: `${secondNo.opacity}`}}
        >
          <p>NO</p>
        </button>

      </div>

      <div 
        className={styles.thirdPart}
        style={{ display: `${openLast.thirdPartDisplay}` }}
      >
       
        <div className={styles.envelopeContainer}>
          <div className={styles.envelope}></div>
          <div className={styles.top}
            style={{ rotate: `${openEnvelope.rotate}`, top: `${openEnvelope.top}px` }}></div>
          <div className={styles.right}></div>
          <div className={styles.left}></div>
          <div className={styles.bottom}></div>
          <h1 className={styles.openMe} onClick={handleEnvelopeOpen}>Open Me</h1>
          <div className={styles.heart}
            onClick={handleEnvelopeOpen}
          >
          </div>
          <div className={styles.paper}
          style={{top: `${openEnvelope.paperTop}px`, zIndex: `${openEnvelope.zIndex}` }}>
            <p>Happy Valentine's Day, Ayla</p>
            <div className={styles.heart}></div>
          </div>
        </div>
      </div>

    </Container>
  );
}
