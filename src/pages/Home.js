import logo from "../pic/logo.png"
import React from "react"
import "./Home.css"
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";


import { Typewriter } from "react-simple-typewriter"

const Home = () => {

  return (
    <>
      <title>HealthScoped🔎</title>
      <div className='homeContainer'>
        <div className='content'>
          <h3 className='homeh3'>WELCOME TO</h3>
         
          <h1 className="nameH1">
            HealthScoped🔎
          </h1>
          <p className="homeP">Explore the hidden health effects of</p>
          <h2>
            <span className="typewriter">
              <Typewriter words={["Apple Sauce", "Lotion", "Hand Cream", "Pain Relief"]} loop cursor cursorStyle='?' typeSpeed={150} deleteSpeed={80} delaySpeed={900} />
            </span>
          </h2>

          <p className="homeP">Utilizing data provided by the FDA, we provide a search engine for you to research your
            <br></br>trusted products to find what they don't want you to know🤯</p>

            <div className='miniButtons'>

              <button className='purpButton' onClick={() => window.location = "Search"}>
                Food
              </button>
              <button className='purpButton' onClick={() => alert('Coming Soon!')}>
                Drug
              </button>
              <button className='purpButton'  onClick={() => alert('Coming Soon!')}>
                Devices
              </button>
              <h6 className="what">⬇️What are people scoping? 👀⬇️</h6>
            </div>

          
        </div>
        <div className='homeLogo'>
            <img className='homeLogo'src={logo} alt='' />
        </div>
      </div>


      <div class="grid-wrapper">
        <div class="grid-container">
          <div class="panel">
            <img src="https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00051500255377/5658eb89368c81fc7ca4bbedd161c9b9_large.png&width=256&type=webp&quality=80" alt="Image 1" class="panel-image"></img>
            <h3>JIF Peanut Butter</h3>
            <p>Times Scoped: 100</p>
          </div>
          <div class="panel">
            <img src="https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/00305730150408/045b4f6925373006d92617587b59be84_large.png&width=256&type=webp&quality=80" alt="Image 2" class="panel-image"></img>
            <h3>Advil</h3>
            <p>Times Scoped: 205</p>
          </div>
          <div class="panel">
            <img src="https://techmarket.co.uk/cdn/shop/products/iphone-xr-nc-64gb-black-desktop1-Format-488_362f6782-42dd-46b4-9296-2874da165eaf_256x.png?v=1666093572" alt="Image 3" class="panel-image"></img>
            <h3>iPhone</h3>
            <p>Times Scoped: 61</p>
          </div>

        </div>
      </div>
    </>
  )
};

export default Home;