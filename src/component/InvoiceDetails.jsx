import { format, parseISO } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteInvoice,
  markAsPaid,
  setSelectedInvoice,
  toggleForm,
} from "../Store/InvoiceSlice";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { InvoicePDF } from "./InvoicePDF";
import { Download } from "lucide-react";

function InvoiceDetails({ invoice }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(toggleForm());
  };

  const handleMarkAspaid = () => {
    dispatch(markAsPaid(invoice.id));
  };

  const handleDelete = () => {
    dispatch(deleteInvoice(invoice.id));
    dispatch(setSelectedInvoice(null));
  };

  const formatDate = (dateString) => {
    try {
      return format(parseISO(dateString), "dd-MM-yyyy");
    } catch (error) {
      return "Invalid Date";
    }
  };

  return (
   <div className="bg-slate-800 rounded-lg max-w-full w-full px-4 sm:px-6 md:px-8">
  {/* Header */}
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2 mt-2 pt-3 md:mb-4 md:mt-4 md:pt-5">
    {/* Status */}
    <div className="flex items-center gap-2 ">
      <span>Status</span>
      <div
  className={`px-2 py-1 sm:px-4 sm:py-2 rounded-lg flex items-center space-x-2 ${
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
  <span className="capitalize text-sm">{invoice.status}</span>
</div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap gap-2 md:gap-4">
      <PDFDownloadLink
        document={<InvoicePDF invoice={invoice} />}
        fileName={`invoice-${invoice.id}.pdf`}
        className="px-4 py-2 md:py-4 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center space-x-2 text-sm"
      >
        {({ loading }) => (
          <>
            <Download size={18} />
            <span>{loading ? "Loading..." : "Download PDF"}</span>
          </>
        )}
      </PDFDownloadLink>
      <button
        className="px-4 py-2 rounded-full bg-slate-700 hover:bg-slate-600 text-sm"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-sm"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="px-4 py-2 rounded-full bg-violet-500 hover:bg-violet-600 text-sm"
        onClick={handleMarkAspaid}
      >
        Mark as Paid
      </button>
    </div>
  </div>

  {/* Invoice Body */}
  <div className="bg-slate-900 rounded-lg p-6 sm:p-8">
    {/* Top Info */}
    <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
      <div>
        <h2 className="text-lg sm:text-xl font-bold mb-2">#{invoice.id}</h2>
        <p className="text-slate-400">{invoice.projectDescription}</p>
      </div>
      <div className="text-left md:text-right text-slate-400">
        <p>{invoice.billFrom.streetAddress}</p>
        <p>{invoice.billFrom.city}</p>
        <p>{invoice.billFrom.postCode}</p>
        <p>{invoice.billFrom.country}</p>
      </div>
    </div>

    {/* Bill Info */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div>
        <p className="text-slate-400 mb-2">Invoice Date</p>
        <p className="font-bold">{formatDate(invoice.invoiceDate)}</p>
        <p className="text-slate-400 mt-4 mb-2">Payment Due</p>
        <p className="font-bold">{formatDate(invoice.dueDate)}</p>
      </div>

      <div>
        <p className="text-slate-400 mb-2">Bill To</p>
        <p className="font-bold mb-2">{invoice.clientName}</p>
        <p className="text-slate-400">{invoice.billTo.streetAddress}</p>
        <p className="text-slate-400">{invoice.billTo.city}</p>
        <p className="text-slate-400">{invoice.billTo.postCode}</p>
        <p className="text-slate-400">{invoice.billTo.country}</p>
      </div>

      <div>
        <p className="text-slate-400 mb-2">Sent To</p>
        <p className="font-bold break-words">{invoice.billTo.clientEmail}</p>
      </div>
    </div>

    {/* Items Table */}
    <div className="bg-slate-800 rounded-lg overflow-hidden">
      <div className="p-4 sm:p-8 overflow-x-auto">
        <table className="w-full min-w-[400px]">
          <thead>
            <tr className="text-slate-400 text-sm sm:text-base">
              <th className="text-left p-2">Item Name</th>
              <th className="text-center p-2">QTY</th>
              <th className="text-right p-2">Price</th>
              <th className="text-right p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr className="text-white text-sm sm:text-base" key={index}>
                <td className="text-left p-2">{item.name}</td>
                <td className="text-center p-2">{item.quantity}</td>
                <td className="text-right p-2">{item.price.toFixed(2)}</td>
                <td className="text-right p-2">{item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Amount Due */}
      <div className="bg-slate-900 p-4 sm:p-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <span className="text-white text-lg sm:text-xl">Amount Due</span>
        <span className="text-2xl sm:text-3xl font-bold">
          ₹{invoice.amount.toFixed(2)}
        </span>
      </div>
    </div>
  </div>
</div>

  );
}

export default InvoiceDetails;
