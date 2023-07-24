import Link from "next/link"
import Image from 'next/image'

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  return (
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <Image src="/main_img.png" alt="설명" height={1000} width={1000}/>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            GROUP FOUR 치킨집
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            (대충 맛있는 치킨집이라는 설명)
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
          <br />
        </div>
        <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              문의하기
            </h1>
            <Input type="text" placeholder="이름" />
            <br />
            <Input type="email" placeholder="이메일" />
            <br />
            <Input type="text" placeholder="전화번호" />
            <br />
          </div>
      </section>
  )
}
