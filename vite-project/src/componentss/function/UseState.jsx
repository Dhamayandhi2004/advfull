import axios from "axios";
import { useEffect, useState } from "react";
var UseEffect = () => {
  //   var [text, setText] = useState("kongu");
  //   useEffect(()=>{
  //     console.log(text);
  //     setText("KEC");
  //   },[text])
  //   return (
  // <section>
  //   <h1>use effect example</h1>
  //   <input
  //     type="text"
  //     placeholder="Enter your text"
  //     value={text}
  //     onChange={(e) => setText(e.target.value)}
  //   />
  //   <h2>Text Typed is {text}</h2>
  // </section>
  //   );
  // var [post, setPost] = useState([]);
  var [img, setImg] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {console.log(res.data)
  //      setPost(res.data)})
  //     .catch((err) => {console.log(err)});
  // },[]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((ans) => {
        console.log(ans.data.users);
        setImg(ans.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <h1>Fetching Images from Json placeholder api</h1>
      <h2>Images are </h2>
      {/* <ol>
       {post.map((data)=>(<li key={data.id}>{data.title}</li>))
       }
      </ol> */}
      <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
        {img.map((users) => (
          <li key={users.id} style={{ margin: "10px", textAlign: "center" }}>
           <img src= {users.image}
           alt={`${users.firstName}'s avatar`}
           style={{width:"128px",height:"128px",borderRadius:"50%"}}/></li>
        ))}
      </ul>
    </section>
  );
};
export default UseEffect;
