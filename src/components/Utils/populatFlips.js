import {Flip} from '../styled/StyledFlip'
import {OutermostFlip} from '../styled/OutermostFlip'




const populatFlips = (segments ,Props) =>{
    if (segments === 1) {
        return(
        <OutermostFlip className='OutermostFlip' {...Props}>
            <div style={{display:"none"}}>{Props.Children}</div>
        </OutermostFlip>
        )
    } else {
        return(
            <Flip className={`Flip-${segments}`} {...Props} >
                {populatFlips(segments-1,Props)}
            </Flip>
        )
    }
}

 export default populatFlips