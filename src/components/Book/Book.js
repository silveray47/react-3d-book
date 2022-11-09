import React from 'react'
import {StyledBook} from '../Styles/StyledBook'
import {StyledPage} from '../Styles/StyledPage'


export const Book = (props) => {
  const { children, width, height, bookAngle, bookColor } = props
    const backgroundPagesProps = { width, height, bookAngle, bookColor }



  return (
    <StyledBook className='Book'>
        <StyledPage className='stack-page' { ... backgroundPagesProps}></StyledPage>
        <StyledPage className='stack-page' { ... backgroundPagesProps} ></StyledPage>
        <StyledPage className='stack-page' { ... backgroundPagesProps} ></StyledPage>
        <StyledPage className='left-background-page' { ... backgroundPagesProps} ></StyledPage>
        <StyledPage className='stack-page' { ... backgroundPagesProps} ></StyledPage>
        <StyledPage className='stack-page' { ... backgroundPagesProps} ></StyledPage>
        <StyledPage className='stack-page' { ... backgroundPagesProps} ></StyledPage>
        <StyledPage className='right-background-page' { ... backgroundPagesProps} ></StyledPage>
    </StyledBook>
  )
}
