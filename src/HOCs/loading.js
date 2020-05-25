import React, {useState} from 'react';

export default BaseComponent => {
    return function(props){
        let [loading, setLoading] = useState(true);

        const handleLoading = () => (
            setLoading(false)
        )

        const loadingObj = {
            loading,
            handleLoading
        }

        return <BaseComponent loadingObj={loadingObj} {...props}/>
    }
}