import Image from 'next/image'
import { Layout } from "../components"

import wolf from '../assets/images/wolf.png'

export default function Home() {
  return (
    <Layout>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="p-3 me text-black rounded-lg bg-white shadow-md flex justify-center flex-col items-center min-w-[380px] m-3">
            <Image width={64} height={64} src={wolf} alt="Tachittanachote's Symbol" />

            <p className="select-none font-medium mt-3 mb-1">About me</p>
            <div>I'm Aek 🧑</div>
            <div className="mb-3">Software Engineer 👩‍💻</div>
            <div className="flex">
              <div className="mx-3">
                <a href="https://www.github.com/tachittanachote"><i className="fa-brands fa-github-square"></i></a>
              </div>
              <div className="mx-3">
                <a href="https://www.facebook.com/aek.tachittanachote"><i className="fa-brands fa-facebook-square"></i></a>
              </div>
              <div className="mx-3">
                <a href="https://www.instagram.com/https.aek"><i className="fa-brands fa-instagram-square"></i></a>
              </div>
            </div>
            <div className="mt-3 text-[12px]">Powered by Next.js, Github and Vercel 💗</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
