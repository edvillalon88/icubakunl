import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native'
import CardHome from '../../components/CardHome';

const Home = ({})=>{
    return (
        <ScrollView style={{ flex: 1, flexDirection:'column' }}>
          <CardHome title={10} subtitle={'Total'} />
          <CardHome title={10} subtitle={'Realizadas'} />
          <CardHome title={0} subtitle={'Canceladas'} />
          <CardHome title={0} subtitle={'En espera'} />
          
        </ScrollView>
      ); 
}
export default Home;