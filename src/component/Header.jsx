import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Filter, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../Store/InvoiceSlice";

const status = ["all", "paid", "pending", "draft"];

function Header({ onNewInvoice }) {
  const dispatch = useDispatch();
  const { invoices, filter } = useSelector((state) => state.invoices);

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-white md:mb-2">Invoices</h1>
        <p className="text-slate-400 text-sm md:text-lg">
          {invoices.length === 0
            ? "No Invoice"
            : ` There are ${invoices.length} Total Invoices`}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
  {/* Filter Menu */}
  <Menu as="div" className="relative">
    <Menu.Button className="flex items-center space-x-2 text-sm sm:text-base md:text-lg text-white hover:text-violet-400 focus:outline-none">
      <Filter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      <span>Filter by Status</span>
    </Menu.Button>

    <Menu.Items className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg p-2 z-10 transition-all duration-300 ease-out transform origin-top">
      {status.map((s) => (
        <Menu.Item key={s}>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-slate-700" : ""
              } w-full text-left px-3 py-2 rounded-lg capitalize ${
                filter === s ? "text-violet-500" : "text-white"
              }`}
              onClick={() => dispatch(setFilter(s))}
            >
              {s}
            </button>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Menu>

  {/* New Invoice Button */}
  <button
    type="button"
    className="flex items-center justify-center space-x-2 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-full"
    onClick={onNewInvoice}
  >
    <div className="bg-white rounded-full p-1 sm:p-2 flex items-center justify-center">
      <Plus className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-violet-500" />
    </div>
    <span className="text-sm sm:text-base md:text-lg">New Invoice</span>
  </button>
</div>

    </div>
  );
}

export default Header;
