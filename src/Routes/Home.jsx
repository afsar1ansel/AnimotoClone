import Business from "../components/Business";
import CustomersReview from "../components/CustomersReview";
import EverythingNeed from "../components/EverythingNeed";
import Explore from "../components/Explore";
import FirstVideo from "../components/FirstVideo";
import Introduction from "../components/Introduction";
import PartnerOf from "../components/PartnerOf";
import QuicklyTemplates from "../components/QuicklyTemplates";
import HelpCenter from "./HelpCenter";

function Home() {

   document.title = 'Free Video Maker | Create &amp; Edit Your Videos Easily - Animoto';


   return (
      <div>
        <Introduction/>
        <Business/>
        <QuicklyTemplates/>
        <EverythingNeed/>
        <CustomersReview/>
        <PartnerOf/>
        <FirstVideo/>
        <HelpCenter/>
        <Explore/>
      </div>
   );
}

export default Home;