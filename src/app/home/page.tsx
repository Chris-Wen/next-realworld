'use client'
// import Image from "next/image";
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'

export default function Home(props: any) {
  const pathName = usePathname()
  const segment = useSelectedLayoutSegment()
  console.log(props, pathName, segment);
  return <main>home page</main>;
}


