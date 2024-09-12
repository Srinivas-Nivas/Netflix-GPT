import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
    const langkey=useSelector(store => store.config.lang)
    return (
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-3/4 grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-10" placeholder={lang[langkey].GPTSearchPlaceHolder}></input>
            <button className="col-span-2 m-4 py-2 px-4 rounded-lg bg-red-700 text-white">{lang[langkey].search}</button>


        </form>
        
        
        
        
        </div>
    );
};

export default GPTSearchBar;