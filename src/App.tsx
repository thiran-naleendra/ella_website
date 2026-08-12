import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AirportTransfer from "./pages/AirportTransfer";
import Safari from "./pages/Safari";
import RentVehicle from "./pages/RentVehicle";
import About from "./pages/About";
import Hire from "./pages/Hire";
import { SeoHead, businessSchema, websiteSchema } from "./components/SeoHead";
import { AirportRoutePage, SafariLandingPage, RentalLandingPage, NotFound } from "./pages/SeoLandingPages";

const metadata={
 home:["Radesha Tours Ella | Sri Lanka Tours, Transfers & Rentals","Explore Sri Lanka with Radesha Tours Ella. Book private airport transfers, safari tours, car rentals, scooter rentals and custom Sri Lanka tours with easy WhatsApp booking."],
 airport:["Sri Lanka Airport Transfers | Private Airport Taxi | Radesha Tours","Book reliable private airport transfers from Bandaranaike International Airport to Ella, Kandy, Galle, Mirissa, Yala, Arugam Bay and destinations across Sri Lanka."],
 hire:["Sri Lanka Airport Transfer Routes | Private Taxi Quotes","Explore airport transfer routes from Colombo Bandaranaike Airport to popular Sri Lankan destinations including Ella, Kandy, Galle, Mirissa and Arugam Bay."],
 safari:["Sri Lanka Safari Tours | Yala & Udawalawe Safari | Radesha Tours","Book private Sri Lanka safari tours to Yala, Udawalawe, Bundala and Kumana National Parks with local drivers, safari jeeps and easy WhatsApp booking."],
 rent:["Car & Scooter Rental Ella Sri Lanka | Radesha Tours","Rent cars, SUVs, sedans and scooters in Ella, Sri Lanka. Flexible rentals, maintained vehicles and simple WhatsApp booking with Radesha Tours."],
 about:["About Radesha Tours | Local Travel Service in Ella Sri Lanka","Learn about Radesha Tours, a local Ella-based travel service offering airport transfers, Sri Lanka tours, safaris and vehicle rentals."]
} as const;
function Page({seo,path,children,schema}:{seo:readonly[string,string];path:string;children:React.ReactNode;schema?:Record<string,unknown>[]}){return <><SeoHead title={seo[0]} description={seo[1]} path={path} schema={schema}/>{children}</>}

export default function App(){return <BrowserRouter><Layout><Routes>
 <Route path="/" element={<Page seo={metadata.home} path="/" schema={[businessSchema,websiteSchema]}><Home/></Page>}/>
 <Route path="/airport-transfer" element={<Page seo={metadata.airport} path="/airport-transfer"><AirportTransfer/></Page>}/>
 <Route path="/hire-rates" element={<Page seo={metadata.hire} path="/hire-rates"><Hire/></Page>}/>
 <Route path="/hire" element={<Navigate to="/hire-rates" replace/>}/>
 <Route path="/safari" element={<Page seo={metadata.safari} path="/safari"><Safari/></Page>}/>
 <Route path="/rent-vehicles" element={<Page seo={metadata.rent} path="/rent-vehicles"><RentVehicle/></Page>}/>
 <Route path="/rent" element={<Navigate to="/rent-vehicles" replace/>}/>
 <Route path="/about" element={<Page seo={metadata.about} path="/about"><About/></Page>}/>
 {['colombo-airport-to-ella','colombo-airport-to-kandy','colombo-airport-to-galle','colombo-airport-to-mirissa','colombo-airport-to-arugam-bay'].map(slug=><Route key={slug} path={`/airport-transfer/${slug}`} element={<AirportRoutePage slug={slug}/>}/>)}
 {['yala-national-park','udawalawe-national-park','bundala-national-park','kumana-national-park','ella-to-yala','ella-to-udawalawe'].map(slug=><Route key={slug} path={`/safari/${slug}`} element={<SafariLandingPage slug={slug}/>}/>)}
 <Route path="/car-rental-ella" element={<RentalLandingPage type="car"/>}/><Route path="/scooter-rental-ella" element={<RentalLandingPage type="scooter"/>}/>
 <Route path="*" element={<NotFound/>}/>
 </Routes></Layout></BrowserRouter>}
