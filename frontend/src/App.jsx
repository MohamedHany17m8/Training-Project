import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaWallet,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle clicks outside the sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Navigation Bar - Logo Section */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black p-4 flex justify-between items-center border-b border-gray-800 sticky top-0 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none transition-all duration-300"
        >
          <FaBars />
        </motion.button>
        <div className="flex items-center justify-center flex-grow">
          <h1 className="text-2xl sm:text-3xl font-bold">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="anton-regular"
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Red
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="birthstone-regular text-red-100 text-4xl sm:text-5xl"
              style={{
                textShadow: "2px 2px 4px rgba(255, 0, 0, 1)",
                display: "inline-block",
                marginLeft: "8px",
              }}
            >
              <span style={{ fontSize: "1.5em" }}>L</span>ine
            </motion.span>
          </h1>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white text-2xl focus:outline-none transition-all duration-300"
        >
          <FaSearch />
        </motion.button>
      </motion.nav>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-72 sm:w-96 bg-[#a4a09b] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="p-4 flex bg-white justify-between items-stretch border-b border-gray-800 relative h-50">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-20 h-20 sm:w-30 sm:h-30 bg-gray-700 rounded-full mr-3 flex items-center justify-center overflow-hidden"
            >
              <FaUser className="text-5xl sm:text-7xl" />
            </motion.div>
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="birthstone-regular text-red-500 text-4xl sm:text-6xl block"
                style={{ textShadow: "1px 1px 2px rgba(255, 0, 0, 1)" }}
              >
                market
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block font-bold text-black text-2xl sm:text-3xl anton-regular"
              >
                MR.FAROK
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-black text-2xl sm:text-3xl"
              >
                0.0
              </motion.span>
            </div>
          </div>
          <div className="flex flex-col justify-between text-black h-full py-4">
            <motion.div
              whileHover={{ scale: 1.2, color: "#ff0000" }}
              className="transition-all duration-300"
            >
              <FaShoppingCart className="text-3xl sm:text-4xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, color: "#ff0000" }}
              className="transition-all duration-300"
            >
              <FaWallet className="text-3xl sm:text-4xl" />
            </motion.div>
          </div>
        </div>

        <div className="p-4 bg-[#a4a09b]">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
            className="mb-4 anton-regular text-xl sm:text-2xl text-black"
          >
            {[
              "CARS",
              "TIRES",
              "CHECK CARS",
              "ENGEN EDIT",
              "MALFUNCTION",
              "TEST",
              "BIKES",
              "CAR MODIFICATION PARTS",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="mb-2"
              >
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block p-1 hover:bg-gray-800 hover:text-white rounded transition-all duration-300 transform hover:translate-x-2"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 sm:mt-8 px-4 flex flex-col md:flex-row"
      >
        {/* Left side - QR Code */}
        <div className="w-full md:w-1/3 flex justify-center items-center md:mb-0 mb-8">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg bg-black shadow-lg shadow-red-900/20 transition-all duration-300">
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="qrGradient"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ff0000", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
            </svg>
            <motion.div whileHover={{ scale: 1.03 }} className="w-full h-full">
              <QRCodeSVG
                value="RED LINE"
                size={224}
                bgColor="black"
                fgColor="url(#qrGradient)"
                level="H"
                includeMargin={false}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Right side - Date, Location and Images */}
        <div className="w-full md:w-2/3 flex flex-col">
          {/* Date and Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-left"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col"
              >
                <span className="silkscreen-regular text-3xl sm:text-4xl">
                  DRIVE
                </span>
                <span className="anton-regular text-3xl sm:text-4xl">TEST</span>
              </motion.div>
              <motion.span
                whileHover={{ scale: 1.05, color: "#ff5555" }}
                className="birthstone-regular text-white text-2xl sm:text-3xl"
                style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 1)" }}
              >
                :12/12/2025
              </motion.span>
            </div>
            <motion.p
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl sm:text-3xl anton-regular mt-4"
            >
              LOCATION
            </motion.p>
          </motion.div>

          {/* Three Images */}
          <div className="flex flex-col md:flex-row h-auto sm:h-60 justify-between items-center relative mb-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-3/5 mb-6 md:self-end md:-mb-20 flex justify-center"
            >
              <img
                src="/Screenshot 2025-04-12 155638.png"
                alt="First image"
                className="h-40 sm:h-60 object-contain hover:brightness-110 transition-all duration-300 max-w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="w-full md:w-1/5 mb-6 md:mb-0 md:-mt-20 flex justify-center"
            >
              <img
                src="/Adobe Express - file.png"
                alt="Logo"
                className="h-24 sm:h-30 object-contain hover:brightness-110 transition-all duration-300 max-w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-3/5 mb-4 md:mb-0 md:self-start md:-mt-20 flex justify-center"
            >
              <img
                src="/Screenshot 2025-04-12 155711.png"
                alt="Second image"
                className="h-40 sm:h-60 object-contain hover:brightness-110 transition-all duration-300 max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
