import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Contents from "@/layout/Contents";
import Sidebar from "@/layout/Sidebar";

function App() {
    //js

    //view
    return (
        <>
            <Header
                name="Jumanazar"
                title="Java Engineer"
                description="SweetK"
            />
            <Sidebar title="CMS 2022" menu="추천 콘텐츠" />
            <Contents
                title="VisitSeoul CMS"
                description="No comments"
                version={new Date().getFullYear()}
            />
            <Footer
                title="Copyright"
                description="(www.jumanazar.uz)"
                year={new Date().getFullYear()}
            />
        </>
    );
}

export default App;
