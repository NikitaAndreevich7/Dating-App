import React from 'react'
import { DatingAppServiceConsumer } from '../context/datingAppContextApp'

const withDatingAppService = () => (Wrapped) => {
    
    return(props) =>{
        return(
            <DatingAppServiceConsumer>
                {
                    (datingService) =>{
                        return(<Wrapped {...props}
                                datingService={datingService}/> )
                    }
                }
            </DatingAppServiceConsumer>
        )
    }
}

export default withDatingAppService 