import  { useEffect, useRef, useState } from 'react'

function useButtonLoader(defaultText,loadingText) {
    const [isLoading,setLoading] = useState(false);
    const element = useRef(null);

    useEffect(()=>{
        if(isLoading)
        {
        element.current.disabled = true; // eslint-disable-next-line
        element.current.innerHTML = '<span class="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>'+`<span>  ${loadingText}</span>`;

        }
        else
        {
            element.current.disabled = false;
            element.current.innerHTML = defaultText;

        }// eslint-disable-next-line
    },[isLoading])
    return (
   [element,setLoading]
  )
}

export default useButtonLoader