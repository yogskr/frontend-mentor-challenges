import { projectListTexts } from "../assets/routes/text-data";
import { projectText } from "../assets/routes/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function Projects() {
  const projectItems = projectListTexts.map((text) => (
    <figure
      key={text.id}
      className={`flex h-[125px] w-full ${text.background} bg-contain bg-center bg-no-repeat`}
    >
      <span className="group flex h-full w-full items-end bg-gradient-to-r from-black/70 p-5 hover:cursor-pointer hover:from-neutral-300/85 hover:to-neutral-300/85 hover:transition-all">
        <p className="flex w-full flex-col text-balance font-josefinSans text-[1.5rem] font-extralight leading-none text-white group-hover:font-light group-hover:text-black">
          <span>{uppercaseLetter(text.titleOne)}</span>
          <span>{uppercaseLetter(text.titleTwo)}</span>
        </p>
      </span>
    </figure>
  ));

  return (
    <section className="px-5 pb-20 pt-10">
      <h2 className="mb-10 text-center font-josefinSans text-[2rem] font-light">
        {uppercaseLetter(projectText.heading)}
      </h2>
      <div className="flex flex-col items-center gap-5">
        {projectItems}
        <button className=" border border-black bg-white p-[0.6rem] px-12 align-middle font-josefinSans font-semibold tracking-widest hover:cursor-pointer hover:bg-black hover:text-white hover:transition">
          {uppercaseLetter(projectText.button)}
        </button>
      </div>
    </section>
  );
}
