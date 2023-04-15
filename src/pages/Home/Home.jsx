import React from 'react'
import './Home.css'
import IMAGE_HERO_MOBILE from '../../assets/images/image-hero-mobile.png'
import Button from '../../components/Button/Button'

import databiz from "../../assets/images/clients/client-databiz.svg";
import audiophile from "../../assets/images/clients/client-audiophile.svg";
import meet from "../../assets/images/clients/client-meet.svg";
import maker from "../../assets/images/clients/client-maker.svg";
import { useNavigate } from 'react-router';

const CLIENTS = [
  {name: 'databiz', url: databiz},
  {name: 'audiophile', url: audiophile},
  {name: 'meet', url: meet},
  {name: 'maker', url: maker}
]

function Home() {

  const navigate = useNavigate()

  return (
    <main>
      <div className="container">
        <img src={IMAGE_HERO_MOBILE} alt='hero-mobile' />
        <div className="sub-container">
          <h1>Make <span>remote work</span></h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <Button 
            btnType="btn-primary"
            handleClick={() => {
              navigate('/learn-more')
            }} 
          >Learn more</Button>
          <div className="clients-container">
            {CLIENTS.map((client) => {
              return <img className={`client-${client.name}`} key={client.name} src={client.url} alt='client' />
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
