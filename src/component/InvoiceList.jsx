import { format, parseISO } from "date-fns";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedInvoice } from "../Store/InvoiceSlice";

function InvoiceList() {
  const dispatch = useDispatch();
  const { invoices, filter } = useSelector((state) => state.invoices);

  const filteredInvoices = invoices.filter((invoice) => {
    if (filter === "all") return true;
    return invoice.status === filter;
  });

  if(filteredInvoices.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-slate-400">No Invoice Found</p>
      </div>
    );
  }

const handleInvoiceClick = (invoice) => {
  dispatch(setSelectedInvoice(invoice));
}

  const formatDate = (date) => {
    try {
      return format(parseISO(date), "dd-MM-yyyy");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="space-y-4">
  {filteredInvoices.map((invoice) => (
    <div
      key={invoice.id}
      onClick={() => handleInvoiceClick(invoice)}
      className="bg-slate-800 rounded-lg p-3 md:p-6 hover:bg-slate-700 transition-colors duration-200 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
        
        {/* Left side */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-sm md:text-lg">
          <span className="text-slate-400">{invoice.id}</span>
          <span className="text-slate-400">Due {formatDate(invoice.dueDate)}</span>
          <span className="text-slate-300">{invoice.clientName}</span>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-between md:justify-end space-x-3 md:space-x-6">
          <span className="text-sm md:text-2xl font-bold">
            ₹{invoice.amount?.toFixed(2) || "0.00"}
          </span>

          <div
            className={`px-2 md:px-4 py-1 md:py-2 rounded-lg flex items-center space-x-2 ${
              invoice.status === "paid"
                ? "bg-green-900/20 text-green-50"
                : invoice.status === "pending"
                ? "bg-orange-900/20 text-orange-500"
                : "bg-slate-700/50 text-slate-400"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                invoice.status === "paid"
                  ? "bg-green-500"
                  : invoice.status === "pending"
                  ? "bg-orange-500"
                  : "bg-slate-400"
              }`}
            ></div>
            <span className="capitalize text-sm md:text-lg">
              {invoice.status}
            </span>
          </div>

          <ChevronRight className="text-violet-500" />
        </div>
      </div>
    </div>
  ))}
</div>

  );
}

export default InvoiceList;
