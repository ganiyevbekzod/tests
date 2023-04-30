import "./assets/styles/index.css"
import "./app.css"
import Card from "./Card/UserCard";
import data from "./data";
import HeaderPic from "./assets/images/header_img.jpg"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  let [newData, setNewData] = useState(data);
  let [searchData, setSearchData] = useState([]);

  const handleClick = (evt) => {
    const text = evt.target.textContent
    const filteredData = data.filter(item => item.languages.includes(text) || item.level === text || item.role === text)
    setNewData(filteredData);

    if (text && !searchData.includes(text)) {
      setSearchData([...searchData, text])
    }
    toast("Talabingiz bajarildi");
  }

  const clearAll = () => {
    setNewData(data);
    setSearchData([]);
        toast("Tozalandi");
  }

  const clearBtn = (evt) => {
    const filteredData = newData.filter(item => !item.languages.includes(evt.target.textContent) || !item.level === !evt.target.textContent || item.role === evt.target.textContent)
    const findedIndex = searchData.findIndex(item => item === evt.target.textContent);
    searchData.splice(findedIndex, 1);
    setSearchData(searchData);
    setNewData(searchData.length ? filteredData : data);
    toast("Olib tashlandi");
    console.log(searchData);
    console.log(evt.target.textContent);
  }

  return (
    <div className="App">
      <img className="w-100" src={HeaderPic} alt="header_img" />
      <div>
      </div>
      <div className="container">
        {searchData.length ? <h3 className="d-flex align-items-center mt-3 ">{searchData.map(item => item ? (<span className="clearspan  border border-end-0 ps-2 me-3 fw-bold  rounded-end ">{item}<button  className="deletebtn rounded-end ms-1 fw-bold" onClick={clearBtn}>X</button></span>) : '')} <button className="clearbtn btn btn-danger ms-auto " onClick={clearAll}>Clear All</button></h3> : null}
        <ul className="list list-unstyled mt-5" >
          {
            newData.map((item =>
              <Card
                key={item.id}
                handleClick={handleClick}
                logo={item.logo}
                company={item.company}
                new={item.new}
                featured={item.featured}
                position={item.position}
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
                role={item.role}
                level={item.level}
                languages={item.languages}
              />
            ))
          }

        </ul>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div>
  );
}

export default App;