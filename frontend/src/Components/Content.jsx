import React from 'react'
import Card from './Card'

const content = [
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Aashram-Live-S01-E01-MeetX-Uncut-Web-Series-420x280.jpg",
        title: "Aashram Live S01 (E01) MeetX Uncut Web Series Watch Online And Download Free Now Only On our website",
    },
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/04/Rangeen-Kahaniyan-S05-EP-1-2-ALT-Web-Series-420x280.jpg",
        title: "Rangeen Kahaniyan S05 (EP 1-2) ALT Web Series Watch Online And Download Free Now Only On our website",
    },
   { src: "https://tabooafairs.icu/wp-content/uploads/2024/04/Makkhan-Doodhwala-S01-Ep-4-5-HitPrime-Web-Series-420x278.jpg",
    title: "Bahu Jaan PrimeShots S02 Ep 1-2 Web Series Watch Online And Download Free Now Only On our website",
},
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Manchaha-Ep-4-PrimeShots-Web-Series-420x280.jpg",
        title: "Manchaha Ep 4 PrimeShots Web Series Watch Online And Download Free Now Only On our website",
    },
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Andha-Bapu-S01-Ep-1-2-SolTalkies-Web-Series-420x280.jpg",
        title: "Andha Bapu – S01 Ep 1-2 SolTalkies Web Series Watch Online And Download Free Now Only On our website",
    },
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/03/Study-Hard-Liz-Jordan-MissaX.jpg",
        title: "Study Hard – Liz Jordan – MissaX Watch Online And Download Free Now Only On our website",
    },
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Aashram-Live-S01-E01-MeetX-Uncut-Web-Series-420x280.jpg",
        title: "Aashram Live S01 (E01) MeetX Uncut Web Series Watch Online And Download Free Now Only On Taboo Affairs",
    },
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/04/Rangeen-Kahaniyan-S05-EP-1-2-ALT-Web-Series-420x280.jpg",
        title: "Rangeen Kahaniyan S05 (EP 1-2) ALT Web Series Watch Online And Download Free Now Only On our website",
    },
   { src: "https://tabooafairs.icu/wp-content/uploads/2024/04/Makkhan-Doodhwala-S01-Ep-4-5-HitPrime-Web-Series-420x278.jpg",
    title: "Bahu Jaan PrimeShots S02 Ep 1-2 Web Series Watch Online And Download Free Now Only On our website",
},
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Manchaha-Ep-4-PrimeShots-Web-Series-420x280.jpg",
        title: "Manchaha Ep 4 PrimeShots Web Series Watch Online And Download Free Now Only On our website",
    },
    {
        src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Andha-Bapu-S01-Ep-1-2-SolTalkies-Web-Series-420x280.jpg",
        title: "Andha Bapu – S01 Ep 1-2 SolTalkies Web Series Watch Online And Download Free Now Only On our website",
    },
]


function Content() {
  return (
    <div className='px-4 mx-auto lg:px-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>

    {content.map((d)=> (
        <Card src={d.src} title={d.title}/>
    ))}
        
     
    </div>
  )
}

export default Content