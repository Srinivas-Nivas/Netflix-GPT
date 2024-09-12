import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { BGLOGO } from "../utils/constants";
const GPTSearch = () => {
    return (

        <div>

        <div className="absolute -z-10">
            <img src={BGLOGO}
             alt="logo"
              />
            
        </div>
            <GPTSearchBar/>
            <GPTMovieSuggestions/>

        </div>



    );

};
export default GPTSearch;