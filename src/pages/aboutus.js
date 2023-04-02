import Navbar from '../components/navBar';
import nosotros1 from "../images/nosotros1.jpg";
import nosotros2 from "../images/nosotros2.jpg";

export default function AboutUs(){
    return (<>
        <Navbar/>;
        <div class="class=" nosotros_main>
            <div class="info_1">
                <img class="info_1-image" src={nosotros1}></img>
                <p class="info_1-text"> Top Secret Co., Ltd. (株式会社トップシークレット, Kabushiki-gaisha Toppu Shīkuretto) is a Japanese automobile tuner and parts manufacturer. The company was founded by Japanese automotive engineer and driver, Kazuhiko “Smokey” Nagata.[1]
The company is mainly known for its tuning, aftermarket parts, body kits, and performance engineering. Top Secret's current product lineup consists of aero, exterior and interior, engine, exhaust , chassis, brake, suspension, and powertrain parts.
Top Secret is also known for its illegal Wangan high speed runs, professional drifting, circuit, and drag racing</p>
            </div>
            <div class="info_2">
                <p class="info_2-text">The Mid Night Club was founded in 1987 built on a strong code of ethics to prevent any members of the club endangering a member of the public or any other members of the club. Mid Night had high entry requirements, the minimum requirement being that you had a car capable of going over 250km/h (160 mph). Although this is a minimum requirement, you will be at the back of the back as the Mid Night Club used to race along the Wangan highway between Tokyo and Yokohama at sustained racing speeds of upwards of 300km/h (190 mph). </p>
                <img class="info_2-image" src={nosotros2}></img>
            </div>
        </div>
        </>
        )
}