import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Card from './Components/Cards/Card'
import Card1_img from './assets/card1.png'
import Card2_img from './assets/card2.png'
import Card3_img from './assets/card3.png'
import Card4_img from './assets/card4.png'
import Body from './Components/Body/Body'
import Second from './Components/Second/Second'
import Campus from './Components/Campus/Campus'
import Banner from './Components/Banner/Banner'






const App = () => {
  return (
    <>
      <Navbar/>
      <Main/>
      <Card title="Let's talk science" dic="Learn More"  imgCard={Card1_img}/>
      <Card title="Innovation course" dic="Learn More"  imgCard={Card2_img}/>
      <Card title="Cloud storage" dic="Learn More"  imgCard={Card3_img}/>
      <Card title="Online Education" dic="Learn More" imgCard={Card4_img}/>
      <Body/>
      <Second text="CampusLife"/>
      <Campus/>
      <Second text="PopularCourses"/>
      <Card title="Let's talk science" dic="Learn More"  imgCard={Card1_img}/>
      <Card title="Innovation course" dic="Learn More"  imgCard={Card2_img}/>
      <Card title="Cloud storage" dic="Learn More"  imgCard={Card3_img}/>
      <Card title="Online Education" dic="Learn More" imgCard={Card4_img}/>
      <Banner/>
      <Second text="UpcomingEvents"/>
      <Card title="Let's talk science" dic="Learn More"  imgCard={Card1_img}/>
      <Card title="Innovation course" dic="Learn More"  imgCard={Card2_img}/>
      <Card title="Cloud storage" dic="Learn More"  imgCard={Card3_img}/>
      <Card title="Online Education" dic="Learn More" imgCard={Card4_img}/>
      <Second text="WhatOurStudentSaying"/>

    </>
  )
}

export default App
