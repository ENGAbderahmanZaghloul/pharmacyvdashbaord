import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [showCalender, setShowCalender] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const calenderHandler = () => {
    setShowCalender(!showCalender);
  };
  const notificationHandler = () => {
    setShowNotification(!showNotification);
  };
  return (
    <section className="ml-56 mr-5 px-8 py-4 rounded-full bg-white flex justify-between items-center">
      <div>
        <h1 className="text-lg font-medium">Product List</h1>
        <p className="text-xs font-normal text-[#888888]">
          Let's check your pharmacy today!
        </p>
      </div>
      <form className="border rounded-full bg-slate-50 h-fit flex gap-3 px-3 py-1">
        <img
          src="/public/images/Search.png"
          alt="search icon"
          className="text-[#888888]"
        />
        <input
          type="search"
          className="rounded-full bg-slate-50 text-[#888888]"
          value="Search"
        />
      </form>
      <div className="border rounded-full bg-slate-50 h-fit flex gap-3 px-3 py-1">
        <button onClick={calenderHandler}>
          <img src="/public/images/calendar.png" alt="" />
        </button>
        <p className="text-[#888888]">Calender</p>
        {showCalender && (
          <div
            style={{
              position: "fixed",
              top: "15%",
              left: "30%",
              width: "60%",
              height: "60%",
              backgroundColor: "#fff",
              border: "2px solid #ccc",
              zIndex: 9999,
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ textAlign: "right", padding: "5px" }}>
              <button onClick={calenderHandler}>❌</button>
            </div>

            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_email%40gmail.com&ctz=Africa%2FCairo"
              style={{ width: "100%", height: "100%", border: "none" }}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="rounded-[50%] bg-slate-50 w-8 h-8 text-center place-content-center relative">
        <span className="absolute bg-red-600 text-white w-4 h-4  bottom-5 left-4 text-xs rounded-full text-center">
          5
        </span>
        <button onClick={notificationHandler}>
          <img
            src="/public/images/notification.png"
            alt=""
            className="w-6 h-6 "
          />
        </button>
        {showNotification && (
          <div
            style={{
              position: "fixed",
              top: "18%",
              left: "68%",
              width: "30%",
              height: "fit-content",
              backgroundColor: "#fff",
              border: "2px solid #ccc",
              zIndex: 9999,
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ textAlign: "right", padding: "5px" }}>
              <button onClick={notificationHandler}>❌</button>
            </div>

            <div
              style={{
                width: "100%",
                height: "fit-content",
                border: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              className="py-3"
              allowFullScreen
            >
              <div className="bg-slate-50 rounded-full py-2">121212131</div>
              <div className="bg-slate-50 rounded-full py-2">121212131</div>
              <div className="bg-slate-50 rounded-full py-2">121212131</div>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-full w-fit px-5  text-start bg-slate-50  place-content-center relative flex justify-between gap-2">
        <div>
          <h1>Admin</h1>
          <p>admin@gmail.com</p>
        </div>
        <button>
          <img src="/public/images/ArrowLineDown-s.png" alt="" />
        </button>
      </div>
    </section>
  );
};

export default Topbar;
