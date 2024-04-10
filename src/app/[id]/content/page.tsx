'use client'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'

export default function ContentPage(props: any) {
  const pathName = usePathname()
  const segment = useSelectedLayoutSegment()
  console.log(props, pathName, segment);

    return <main>contentPage page</main>;
  }
  
  
  