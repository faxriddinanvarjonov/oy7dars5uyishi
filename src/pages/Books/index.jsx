import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../app/images/Logo.svg";
import Icons from "../../app/images/Icons.png";
import IconsFooter from "../../app/images/IconsFooter.png";
import Cart from "../../app/images/Cart.png";
import Book from "../../app/images/Book.png";
import "../../app/globals.css";

function Index() {
  let svg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="7" fill="none">
      <path
        stroke="#FFCA42"
        stroke-width="1.5"
        d="M12 1.667a1.833 1.833 0 1 1 0 3.667 1.833 1.833 0 0 1 0-3.667ZM21.166 1.667a1.833 1.833 0 1 1 0 3.667 1.833 1.833 0 0 1 0-3.667ZM2.833 1.667a1.833 1.833 0 1 1 0 3.666 1.833 1.833 0 0 1 0-3.666Z"
      />
    </svg>
  );

  return (
    <>
      <header className="bg-[#1B3764] pt-[35px] mb-[100px]">
        <div className="max-w-[1300px] container ml-auto mr-auto">
          <div className="flex items-center justify-between">
            <div className="flex gap-[33px] items-center">
              <Link href={"/"}>
                <Image src={Logo} alt="logo" />
              </Link>
              <Image src={Icons} alt="icons" />
            </div>
            <nav className="flex items-center">
              <div
                data-title="nav-bar"
                className="max-w-[742px] flex gap-8 text-white items-center"
              >
                <div>
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="">
                    Pages
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link href={"/books"}>Authors books</Link>
                    </li>
                    <li>
                      <Link href={"/page"}></Link>
                    </li>
                  </ul>
                </div>
                <div className="indicator cursor-pointer">
                  <span className="indicator-item badge bg-[#FFCA42] max-w-[21px] text-black text-[10px] font-bold">
                    01
                  </span>
                  <div>
                    <Image src={Cart} alt="cart" />
                  </div>
                </div>
                <div className="flex items-center justify-center w-[180px] h-[50px] px-[33px] py-[13px] bg-[#FFCA42] text-[#1B3764] font-semibold cardo">
                  Order Today
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container max-w-[1300px] ml-auto mr-auto gap-[23px] flex flex-col">
          <div></div>
        </div>
      </header>
      <main className="bg-white min-h-[527px] py-[150px] ">
        <section className="max-w-[1300px] container mx-auto">
          <div className="flex justify-center items-center flex-col gap-[22px] ">
            <h1 className="text-[45px] cardo text-slate-900">
              Author’s Book Includes
            </h1>
            <div className="bg-[#FFCA42] h-[3px] w-[55px]"></div>
          </div>
          <div className="mt-[55px] flex gap-24">
            <div className="flex gap-[40px] items-center">
              <Image src={Book} alt="book" width={300} height={400}></Image>
              <div className="w-[280px] h-[333px] flex gap-3 flex-col justify-center">
                <p className="cardo text-[32px] text-black font-bold">
                  Atomic One’s
                </p>
                <p>
                  Many variations of passages of Lorem Ipsum willing araise
                  alteration in some form.
                </p>
                <div className="flex gap-9">
                  <div className="flex items-center flex-col">
                    <div className="flex gap-4 items-center font-bold">
                      <div className="rounded-full bg-[#ffca42] size-4"></div>
                      <p className="flex cardo text-black text-3xl">Pages:</p>
                    </div>
                    <p>586pages</p>
                  </div>{" "}
                  <div className="flex items-center flex-col">
                    <div className="flex gap-4 items-center font-bold">
                      <div className="rounded-full bg-[#ffca42] size-4"></div>
                      <p className="flex cardo text-black text-3xl">Length:</p>
                    </div>
                    <p>10 hour</p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-[180px] h-[50px] px-[33px] py-[13px] border border-[#FFCA42] text-[#1B3764] font-semibold cardo">
                  Order Today
                </div>
              </div>
            </div>{" "}
            <div className="flex gap-[40px] items-center">
              <Image src={Book} alt="book" width={300} height={400}></Image>
              <div className="w-[280px] h-[333px] flex gap-3 flex-col justify-center">
                <p className="cardo text-[32px] text-black font-bold">
                  Atomic One’s
                </p>
                <p>
                  Many variations of passages of Lorem Ipsum willing araise
                  alteration in some form.
                </p>
                <div className="flex gap-9">
                  <div className="flex items-center flex-col">
                    <div className="flex gap-4 items-center font-bold">
                      <div className="rounded-full bg-[#ffca42] size-4"></div>
                      <p className="flex cardo text-black text-3xl">Pages:</p>
                    </div>
                    <p>586pages</p>
                  </div>{" "}
                  <div className="flex items-center flex-col">
                    <div className="flex gap-4 items-center font-bold">
                      <div className="rounded-full bg-[#ffca42] size-4"></div>
                      <p className="flex cardo text-black text-3xl">Length:</p>
                    </div>
                    <p>10 hour</p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-[180px] h-[50px] px-[33px] py-[13px] border border-[#FFCA42] text-[#1B3764] font-semibold cardo">
                  Order Today
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1B3764] min-h-[527px] flex items-center ">
        <div className="max-w-[1300px] container mx-auto ">
          <div className="flex">
            <div className="flex flex-col gap-7 sm:mr-[181px]">
              <Link href={"/"}>
                <Image src={Logo} alt="logo" />
              </Link>
              <Image src={IconsFooter} alt="icons" />
            </div>
            <div className="flex gap-[65px]">
              <div className="w-[225px] flex flex-col gap-7">
                <span className="cardo font-bold text-white text-2xl">
                  Explore
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Home</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>About Us</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Services</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Appointments</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Blog</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className="w-[225px] flex flex-col gap-7">
                <span className="cardo font-bold text-white text-2xl">
                  Utility Pages
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Start here</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Style guid</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>404 not found</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Password protected</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Licenses</Link>
                  </div>
                  <div className="flex items-center gap-[19px]">
                    <div>{svg}</div>
                    <Link href={"/"}>Changelog</Link>
                  </div>
                </div>
              </div>
              <div>
                <span className="cardo font-bold text-white text-2xl">
                  Keep in Touch
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-24 pt-[18px] border-t">
            © Drafted by Victorflow - Powered by Webflow
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
