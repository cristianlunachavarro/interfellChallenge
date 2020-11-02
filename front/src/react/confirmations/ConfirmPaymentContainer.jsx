import React from 'react'
import ConfirmPayment from './ConfirmPayment'
import {useSelector} from 'react-redux'

const ConfirmPaymentContainer = () => {

    const payment = useSelector((state) => state.walletReducer.payment)

    return(
        <ConfirmPayment
         payment={payment}
        />
    )
}

export default ConfirmPaymentContainer