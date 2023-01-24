import { HomeContextProvider} from "../../context/DataContext";
import SectionHeader from "../organisms/SectionHeader";
import SectionResults from "../organisms/SectionResults";

const Home = () => {
    
    return(
        <HomeContextProvider>
            <SectionHeader/>
            <SectionResults/>
        </HomeContextProvider>
    );
}

export default Home;