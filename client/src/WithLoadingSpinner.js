import React, { Component } from 'react'
import Spinner from 'react-spinkit'

export default function WithLoadingSpinner(Component) {
  return (props) => {
    return props.loading ? (
      <Spinner name="ball-spin-fade-loader" fadeIn="none" className="spinner" />
    ) : (
      <Component />
    )
  }
}
