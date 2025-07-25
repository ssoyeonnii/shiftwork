import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CalendarHeader({
  year,
  month,
  onPrevMonth,
  onNextMonth,
  onDateClick,
  userId,
  onSettingsClick,
}) {
  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const navigate = useNavigate();

  // 회원가입 페이지
  const moveJoin = () => {
    navigate("/UserJoin");
  };

  // 로그인 페이지
  const moveLogin = () => {
    navigate("/UserLogin");
  };

  // 회원탈퇴 페이지
  const deleteAccount = () => {
    navigate(`/DeleteAccount/${userId}`);
  };

  // 로그아웃
  const userLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");

    window.location.href = "/";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {userId && (
          <>
            <button
              onClick={onSettingsClick}
              className="btn_setting"
              style={{
                backgroundColor: "transparent",
                width: "fit-content",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20px"
              >
                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
              </svg>
            </button>
          </>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {userId ? (
            <>
              <div>
                <button onClick={userLogout} style={{
                backgroundColor: "transparent",
              }}>로그아웃</button>
              </div>
              <div>
                <button onClick={deleteAccount} style={{
                backgroundColor: "transparent",
              }}>회원탈퇴</button>
              </div>
            </>
          ) : (
            <>
              <div>
                <button onClick={moveLogin} style={{
                backgroundColor: "transparent",
              }}>로그인</button>
              </div>
              <div>
                <button onClick={moveJoin} style={{
                backgroundColor: "transparent",
              }}>회원가입</button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="div_header_container">
        {/* 왼쪽 버튼 */}
        <button onClick={onPrevMonth} className="btn_prev_month">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg_left"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </button>

        {/* 중앙 날짜 표시 */}
        <div className="div_header_center">
          <div className="div_header_year" onClick={onDateClick}>
            {year}
          </div>
          <div className="div_header_month" onClick={onDateClick}>
            {monthNames[month]}
          </div>
        </div>

        {/* 오른쪽 버튼 */}
        <button onClick={onNextMonth} className="btn_next_month">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg_right"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;
