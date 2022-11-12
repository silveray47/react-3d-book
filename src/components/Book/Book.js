import React, { useState , Children} from 'react'
import {StyledBook} from '../Styles/StyledBook'
import {StyledPage} from '../Styles/StyledPage'


export const Book = (props) => {

  const [newChildren , setNewChildren] = useState([]);

  const { children, width, height, bookAngle, bookColor } = props
  const backgroundPagesProps = { width, height, bookAngle, bookColor }
  const pagesProps = { width, height, bookAngle }

  const ChildrenArray = Children.toArray(children);
  let bookCenter = ChildrenArray.findIndex(c => c.type.name === "Gutter");

  Children.map (ChildrenArray, (child, index) => {
    const side = index < bookCenter ? "left" : "right" ;

    newChildren.push( React.cloneElement(child, {...pagesProps, side:side, key:index}))
    setNewChildren(newChildren)  
  })  

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
