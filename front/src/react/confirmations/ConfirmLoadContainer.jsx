import React from 'react'
import ConfirmLoad from './ConfirmLoad'
import {useSelector} from 'react-redux'

const ConfirmLoadContainer = () => {

    const payment = useSelector((state) => state.walletReducer.payment)

    return(
        <ConfirmLoad
         payment={payment}
        />
    )
}

export default ConfirmLoadContainer