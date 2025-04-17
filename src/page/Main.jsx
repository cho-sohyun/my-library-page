import React from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Main = () => {
  // api 호출
  const fetchBooks = async () => {
    const response = await axios.get(
      "https://openlibrary.org/subjects/love.json"
    );
    console.log(response);
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["books", "love"],
    queryFn: fetchBooks,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="mt-24">
      <div className="bg-[#183C38] h-[200px] flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 flex items-center justify-center relative">
          <h1 className="text-3xl font-bold text-[#E7C78D] text-center w-full">
            도서관 페이지
          </h1>
        </div>

        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="책 제목이나 작가를 검색하세요"
            className="flex-1 rounded-l-md px-4 py-2 focus:outline-none"
          />
          <button className="font-semibold px-4 py-2 rounded-r-md hover:opacity-90 transition">
            검색
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {data.works.map((book) => (
          <Card key={book.key} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{book.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
