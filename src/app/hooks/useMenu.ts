

import { useState } from 'react';

 const useMenu = () => {
   const [open,setOpen] = useState<boolean>(false)
   
       const handleMenu = () =>{
           if(open===true){
               setOpen(false)
           }else{
               setOpen(true)
           }
        }

    return{
        handleMenu,
        open,
    }
}

export default useMenu;