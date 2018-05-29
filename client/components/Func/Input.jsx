import React from 'react'
import InputMask from 'react-input-mask'

export default Input = (props) => {
  const { context, stateName, ...rest } = props

  return (
    <div>
      {
        props['data-mask'] ? (
          <InputMask
            ref={i => context.i = i}
            mask={ props['data-mask'] }
            onChange={ e => {
              context.setState({ [stateName]: e.currentTarget.value},
                () => context[`${stateName}Validate`] && context[`${stateName}Validate`]())
            } }
            value={ context.state[stateName] }
            { ...rest }
          />
        ) : (
          <input
            ref={i => context.input = i}
            onChange={ e => {
              context.setState({ [stateName]: e.currentTarget.value},
                () => context[`${stateName}Validate`] && context[`${stateName}Validate`]())
            } }
            value={ context.state[stateName] }
            { ...rest }
          />
        )
      }
      <ul className="parsley-errors-list filled">
        {
          context.state[`${stateName}Errors`] && context.state[`${stateName}Errors`].map((error, index) => (
            <li key={ index } className="parsley-type">{ error }</li>
          ))
        }
      </ul>
    </div>
  )
}
