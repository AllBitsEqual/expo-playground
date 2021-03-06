import React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, ScrollView } from 'react-native'
import { blueprint } from '../../../assets'
import styles from '../../styles'
import NavigationButton from '../NavigationButton'

const DemoPage = ({ children, isHome }) => (
    <ImageBackground source={blueprint} resizeMode="repeat" style={styles.container}>
        <ScrollView contentContainerStyle={styles.constrainer}>
            {isHome ? undefined : (<NavigationButton title="<< Back to home" target="Home" />)}
            {children}
        </ScrollView>
    </ImageBackground>
)

DemoPage.defaultProps = {
    isHome: false,
}

DemoPage.propTypes = {
    children: PropTypes.node.isRequired,
    isHome: PropTypes.bool,
}

export default DemoPage
