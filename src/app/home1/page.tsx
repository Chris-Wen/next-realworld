"use client";
// import Image from "next/image";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home1(props: any) {
  // const pathName = usePathname();
  // const segment = useSelectedLayoutSegment();
  const [count, setAccount] = useState(0);
  const [count1, setAccount1] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // console.log(11, count);
    setAccount1(count + 1);
    // countRef.current = count;
  }, [count]);

  return (
    <main className="">
      <div>
        home page {count} - {count1} - {countRef.current}
      </div>
      <button className="mx-1 border-dashed bg-slate-300 px-3 py-1" onClick={() => setAccount(count + 1)}>
        click1
      </button>
      <button
        className="mx-1 border-dashed bg-green-400 px-3 py-1"
        onClick={() => {
          countRef.current++;
        }}
      >
        click2
      </button>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((item) => {
          return (
            <div className=" border border-cyan-300 px-3 py-1" key={item}>
              {item}
            </div>
          );
        })}
      </div>
      <div>
        <input className="form-input px-4 py-3 rounded-full border" type="text" placeholder="请输入" />
      </div>
    </main>
  );
}
