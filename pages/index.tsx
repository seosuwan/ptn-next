import Link from "next/link";
import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label>
        username
        <input
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
        />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link legacyBehavior href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};
export default App;

{
  /* <div>
<p>이름</p>
<input
  value={name}
  onChange={(e: any) => setName(e.target.value)}
  style={{ marginRight: "12px" }}
/>
<button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
  {name}으로 가보자~
</button>
</div>
{/* 정적라우팅 Link */
}
{
  /* <div>
<h2>Link to &apos; movie &apos;</h2>
<Link href="/movie"> 가보자</Link>
</div>
<div>
<h2>Link to &apos; patato &apos;</h2>
<Link href="/vegetable/patato"> 가보자</Link>
</div> */
}
{
  /* 정적라우팅 Router */
}
{
  /* <button type="button" onClick={() => router.push("/patato")}>
  patato 가보자
</button> */
}
