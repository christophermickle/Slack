import { AiOutlineSlack } from "solid-icons/ai";
import { FaSolidAngleDown } from "solid-icons/fa";
import { BsSearchHeart } from "solid-icons/bs";
import { BsChatQuoteFill } from "solid-icons/bs";

function Nav() {
  return (
    <header class="h-4em">
      <nav class="flex border border-b-4 border-purple items-center">
        <strong>
          <a
            href="/"
            class="uppercase flex border-r-4 border-purple pr-4 h-full items-center p-4"
          >
            <AiOutlineSlack size="2em" color="#000" class="mt-[-1]" />
            <span class="flex justify-center text-black">slack</span>
          </a>
        </strong>
        <div class="flex">
          <ul class="flex flex-grow justify-start items-center gap-x-8 ml-4  pr-4 h-[4em] border-r-4 border-purple my-auto">
            <li class="flex"><a href="#">
              Products</a>
              <FaSolidAngleDown
                size="1.2em"
                class=" pl-2 flex self-center mt-1"
              />
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Enterprise</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
          <div class="flex absolute right-0 h-[4em]">
            <div class="mx-4 border-x-4 border-purple h-[4em]">
              <BsSearchHeart class="my-auto text-[3.6em] py-4 " />
            </div>
            <a href="#" class="capitalize  ml-4 p-4 items-center flex ">
              <BsChatQuoteFill size="1.2em" class="mr-4 flex items-center " />
              Talk to sales
            </a>
            <a href="#" class="capitalize bg-slate-900 text-white p-4 md:">
              Login / Register
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
