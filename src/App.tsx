import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import HomeScreen from "./pages/HomeScreen";
import CourseLearningPage from "./pages/CourseLearningPage";
import ScrollToTop from "./components/ScrollToTop";
import FullPageLoader from "./components/FullPageLoader";
import { useEffect, useState } from "react";
import InstructorPage from "./components/InstructorPage";

function App() {

    const [allData , setAllData] = useState([]);
    const [IsLoading , setIsLoading] = useState(true);
    useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then((data)=>{
    setAllData(data);
    setIsLoading(false);
    
  }).catch((error)=>
    <p>{error}</p>
  )
  }, [allData])
  if (IsLoading) {
    return <FullPageLoader/>
  }

  return (
    <>
      
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/courses/:id" element={<CourseLearningPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/instructor" element={<InstructorPage apiData ={allData}/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
