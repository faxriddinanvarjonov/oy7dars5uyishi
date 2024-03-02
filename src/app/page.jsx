import Image from "next/image";
import Book from "./images/Book.png";

export default function Home() {
  return (
    <section className="bg-[#1B3764] my-24">
      <div className="container max-w-[1300px] mx-auto flex justify-center items-center">
        <div className="max-w-[612px]">
          <i className="flex items-center gap-4 cardo text-white mb-[16px]">
            <span className="flex w-8 bg-[#FFCA42] h-[1px]"></span>Welcome to
            Pages
          </i>
          <h1 className="text-6xl cardo text-white">
            Books are uniquely portable magic
          </h1>
          <p className="mt-[32px] mb-11">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <div className="mb-14">
            <button className="btn bg-[#FFCA42] cardo text-slate-900 rounded-sm px-[50px] btn-success">
              Order Today
            </button>
            <button className="link px-14 text-white hover:opacity-85">
              Read Free Demo
            </button>
          </div>
          <div className="flex gap-20">
            <div className="flex items-center flex-col">
              <div className="flex gap-4 items-center font-bold">
                <div className="rounded-full bg-[#ffca42] size-4"></div>
                <p className="flex cardo text-white text-3xl">Pages:</p>
              </div>
              <p>586pages</p>
            </div>
            <div className="flex items-center flex-col">
              <div className="flex gap-4 items-center font-bold">
                <div className="rounded-full bg-[#ffca42] size-4"></div>
                <p className="flex cardo text-white text-3xl">Length:</p>
              </div>
              <p>10 hour</p>
            </div>
            <div className="flex items-center flex-col">
              <div className="flex gap-4 items-center font-bold">
                <div className="rounded-full bg-[#ffca42] size-4"></div>
                <p className="flex cardo text-white text-3xl">Ratings:</p>
              </div>
              <p>4.5/5 (305 ratings)</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={Book} alt="Book" className="w-[549px] h-[780px]" />
        </div>
      </div>
    </section>
  );
}
