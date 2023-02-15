
import Link from "next/link";



async function getData(){
  const res = await fetch("https://blogpage.microcms.io/api/v1/blog")
  const data = await res.json();
  return data;
}
export default async function StaticPage() {
 const data = await getData();
//  console.log(data);


//  // ページの生成された時間を取得
//  const time = new Date().toLocaleString();

//  if (!contents || contents.length === 0) {
//   return <h1>No contents</h1>;
//  }

 return (
  <div>
    <main>
   <h1 >ブログだよ {data.content} </h1>
   <ul>
    
    {/* {test.map(() => {
     return (
      <li key={post.id}>
       <Link href={`/static/${post.id}`}>{post.title}</Link>
      </li>
     );
    })} */}
   </ul>
   </main>
  </div>
  
 );
}