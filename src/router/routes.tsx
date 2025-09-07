import HomePage from "@/pages/home/HomePage";
import Inoformations from "@/pages/informations/Inoformations";
import SearchResult from "@/pages/search-result/SearchResult";

export const MainRoutes = [
    {
        path: "/",
        component: <HomePage />
    }, 
     {
        path: "/search/city",
        component: <SearchResult />
     },
     {
        path: "/information/:lat/:long",
        component: <Inoformations />
     }
]