import React from "react";
// 헤더 컴포넌트로 바꾸기 <고정>
// 로그인 유저 정보 zustand store로 관리
// 로그인 버튼 클릭 시 로그인 페이지 이동
// 로그인 유저는 상단에 로그아웃 문구로 바꾸고, 로그아웃은 로그인 문구로 바꾸기

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
