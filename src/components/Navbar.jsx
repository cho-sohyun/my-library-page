import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div>도서관 페이지</div>
      <div className="flex gap-4">
        <div>메인</div>
        <div>나의책</div>
        <div>로그인</div>
      </div>
    </div>
  );
};

export default Navbar;
