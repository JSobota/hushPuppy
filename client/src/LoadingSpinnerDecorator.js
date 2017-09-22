import Spinner from 'react-spinkit'
import React from 'react';

function LoadingSpinnerDecorator(Component) {
  return (
    (props) => props.loading ? <Spinner className="spinner" name='cube-grid' /> : Component
  )
}

export default LoadingSpinnerDecorator
