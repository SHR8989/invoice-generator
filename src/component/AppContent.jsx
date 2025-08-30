import React from "react";
import Header from "./Header";
import InvoiceList from "./InvoiceList";
import InvoiceForm from "./InvoiceForm";
import InvoiceDetails from "./InvoiceDetails";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Store/InvoiceSlice";


function AppContent() {
  const dispatch = useDispatch();
  const { isFormOpen, selectedInvoice } = useSelector(
    (state) => state.invoices
  );

  const handleNewInvoice = () => {
    dispatch(toggleForm());
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-hidden">
       
      <div className="max-w-5xl mx-auto py-12 px-4">
        <Header onNewInvoice={handleNewInvoice} />

        {selectedInvoice ? (
          <InvoiceDetails invoice={selectedInvoice} />
        ) : (
          <InvoiceList />
        )}
        {isFormOpen && <InvoiceForm />}
      </div>

      {/* <Footer /> */}

    </div>
  );
}

export default AppContent;
