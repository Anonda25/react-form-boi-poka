import { toast } from "react-toastify";

  const getStoredReadList =()=>{
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList= JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
  }

  const addToStoredReadList=(id)=>{
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        //already exsist
        console.log('already exsist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast.success('added the read list book')
    }
  }

const getStoredWeshList = ()=>{
    const storedWeshList = localStorage.getItem('wish-list');
    if(storedWeshList){
        const storedList = JSON.parse(storedWeshList)
        return storedList;
    }
    else{
        return [];
    }

}

  const addToStoredWeshList =(id)=>{
    const storedWishList = getStoredWeshList()
      if (storedWishList.includes(id)){
        //already exsist
        console.log('already exsist');
    }
    else{
        storedWishList.push(id);
        const storedList = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedList)
        toast.success('added the success')
    }
  }

export { addToStoredReadList, addToStoredWeshList, getStoredReadList }