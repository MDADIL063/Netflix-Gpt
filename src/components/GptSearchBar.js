import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const configLanguage = useSelector((store) => store.config.lang);
  //   console.log(configLanguage);
  return (
    <div className=" flex justify-center pt-[10%]">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input className="p-4 m-4 col-span-9" placeholder={lang[configLanguage].gptSearchPagePlaceholder} type="text" />
        <button className="px-4 py-2 m-4 col-span-3 bg-red-700 text-white rounded-lg">{lang[configLanguage].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
