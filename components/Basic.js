import React, { Component } from 'react';
import {ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Accordian from './Accordian';

class Basic extends Component
{
    render(){
        return(
            <ScrollView>
            <Header/>
            <Accordian/>
            <Footer/>
            </ScrollView>
        );
        }
    }

export default Basic;