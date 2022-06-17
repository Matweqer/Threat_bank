import AuthView from "@/views/AuthView";
import HomeView from "@/views/HomeView";
import ServicesView from "@/views/ServicesView";
import ThreatsView from "@/views/ThreatsView";
import NotFoundView from "@/views/NotFoundView";
import Threats from "@/views/threat-bank" ;
import DevView from "@/views/DevView";

export default {
    AuthView,
    HomeView,
    ServicesView,
    ThreatsView,
    ...Threats,
    NotFoundView,
    DevView,
}