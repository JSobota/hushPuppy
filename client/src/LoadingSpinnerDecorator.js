import Spinner from 'react-spinkit'
import React from 'react';
import './styles/loadingspinnerdecorator.css'

function LoadingSpinnerDecorator(Component) {
  return (
    (props) => props.loading ? (
      <Spinner className="spinner"
               fadeIn="none"
               name='ball-spin-fade-loader' />
    ) : Component
  )
}

export default LoadingSpinnerDecorator
