"use client";


// ずっとuseRouter使えなかったけど、別の関数で呼び出すようになったみたい
// URLのパスはusePathname、クエリーはuseSearchParamsだそうです

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useRouterUrl = () =>{
  const router = usePathname();
  const  [style, setStyle] = useState(false);

    // const query = useSearchParams()
    const test =useEffect(() => {
      // console.log(router);
      if(router==="/about"){
        setStyle(true); 
       }
      return(()=>{
        setStyle(false);
      })
    }, [router]);

  return{router, style, test}

}

// ページURLが/aboutの時のみ、styleをtrueにすhooks
// アンマウント時にfalseを入れる＆routerが変わるたびに呼び出されている…はず