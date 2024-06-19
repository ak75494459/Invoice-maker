import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Tables from "./components/Tables";
import InvoiceDetails from "./components/InvoiceDetails";
import ClientDetails from "./components/ClientDetails";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import { useState } from "react";
import Items from "./components/Items";

function App() {

  const [showInvoice, setShowInvoice] = useState(false)

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [itemList, setItemList] = useState([]);
  const [notes, setNotes] = useState("")

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };



  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow " >
        {
          showInvoice ? <div>
            <Header />
            <div id="invoice-content">
              <div>
                <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">
                  Invoice
                </h2>
              </div>
              <MainDetails />
              <ClientDetails name={name} number={number} />
              <InvoiceDetails />
              <Items itemList={itemList} notes={notes} />

              <Footer name={name} />
            </div>
            <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shawod hover:bg-transparent hover:text-blue-500 transition-all duration-300" onClick={() => setShowInvoice(false)}>Preview Invoice</button>
          </div> :
            <>
              <div className="flex flex-col justify-center">
                <label htmlFor="name" className="font-bold text-black mt-5 ml-1">Enter your name</label>
                <input
                  className="p-3 bg-gray-200 text-black border-2 border-black rounded"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter your Name"
                  autoComplete="off "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email" className="font-bold text-black mt-5 ml-1">Enter your Number</label>
                <input
                  className="p-3 bg-gray-200 text-black border-2 border-black rounded"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="off "
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <Tables itemList={itemList} handleAddItem={handleAddItem} setItemList={setItemList} />
                <Notes setNotes={setNotes} notes={notes} />
                <button className="mt-10 bg-blue-500 text-white font-bold py-2 px-8 rounded hover:border-2 hover:bg-transparent hover:text-blue-500 transition-all duration-300" onClick={() => setShowInvoice(true)}>Preview Invoice</button>
              </div>
            </>
        }
      </main>
    </>
  );
}

export default App;
