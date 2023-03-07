import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Contents from "@/layout/Contents";
import Sidebar from "@/layout/Sidebar";

function App() {
    //js

    //view
    return (
        <>
            <Header title="Jumanazar" description="Java Engineer" />
            <Sidebar />
            <Contents />
            <Footer />
        </>
    );
}

export default App;
