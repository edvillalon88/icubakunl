import React, { Component } from 'react';

import { Card, Text } from 'react-native-elements' 

const style = {
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'flex-start',
    paddingBottom:20,
    paddingTop:20
}

const CardHome = ({title, subtitle, color})=>(    
    <Card wrapperStyle={{...style, backgroundColor: color ? color : '#fff'}}>
        <Text h2>{title}</Text>
        <Text >{subtitle}</Text>
 
    </Card>
)


  
export default CardHome