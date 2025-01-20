import { Search, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-16 border-b bg-white px-4 flex items-center justify-between">
      <div className="w-96">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 pl-9 pr-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <button className="p-2 rounded-full hover:bg-gray-100">
        <User size={20} className="text-gray-600" />
      </button>
    </header>
  );
};