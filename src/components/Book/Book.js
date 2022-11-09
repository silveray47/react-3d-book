import React from 'react'
import {StyledBook} from '../Styles/StyledBook'
import {StyledPage} from '../Styles/StyledPage'


export const Book = () => {
  return (
    <StyledBook className='Book'>
        <StyledPage className='stack-page' ></StyledPage>
        <StyledPage className='stack-page'  ></StyledPage>
        <StyledPage className='stack-page'  ></StyledPage>
        <StyledPage className='left-background-page'  ></StyledPage>
        <StyledPage className='stack-page' ></StyledPage>
        <StyledPage className='stack-page'  ></StyledPage>
        <StyledPage className='stack-page' ></StyledPage>
        <StyledPage className='right-background-page'  ></StyledPage>
    </StyledBook>
  )
}
