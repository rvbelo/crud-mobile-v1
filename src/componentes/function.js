import React from 'react'

export default function InputChange(props) {
  return (
    <input
      type="text"
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}