import AuthView from "@/views/AuthView";
import HomeView from "@/views/HomeView";
import ServicesView from "@/views/ServicesView";
import ThreatsView from "@/views/ThreatsView";
import NotFoundView from "@/views/NotFoundView";
import DevView from "@/views/DevView";

import Threats from "@/views/threat-bank" ;
import Services from "@/views/services";


export default {
    AuthView,
    HomeView,
    ServicesView,
    ThreatsView,
    ...Threats,
    ...Services,
    NotFoundView,
    DevView,
}