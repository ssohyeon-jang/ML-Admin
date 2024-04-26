import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import PopupImage from "../components/popupImage";

export default function ResourceImage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태 변수

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-end mb-4">
            <Button
              className="bg-blue-500 text-white"
              onClick={openModal}
              variant="default"
            >
              신규 이미지 등록
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card className="w-full">
              <CardContent>
                <Badge className="mt-2" variant="default">
                  미처리
                </Badge>
                <img
                  alt="image"
                  className="rounded-md"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                <div className="mt-4">
                  <p className="text-sm font-semibold">test 1</p>
                  <p className="text-xs text-gray-500">
                    업로드한 사용자 소현 장
                  </p>
                </div>

                <div className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="ghost"
                      >
                        <MoreVerticalIcon className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-35">
                      <DropdownMenuItem>이미지 자르기</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        파일 삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardFooter>
            </Card>

            <Card className="w-full">
              <CardContent>
                <Badge className="mt-2" variant="default">
                  미처리
                </Badge>
                <img
                  alt="image"
                  className="rounded-md"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                <div className="mt-4">
                  <p className="text-sm font-semibold">test 2</p>
                  <p className="text-xs text-gray-500">
                    업로드한 사용자 소현 장
                  </p>
                </div>
                <div className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="ghost"
                      >
                        <MoreVerticalIcon className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-35">
                      <DropdownMenuItem>이미지 자르기</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        파일 삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            <Button className="bg-white text-black border" variant="outline">
              1
            </Button>
            <Button className="bg-white text-black border" variant="outline">
              2
            </Button>
            <Button className="bg-white text-black border" variant="outline">
              3
            </Button>
          </div>
        </div>
      </div>
      {/* 모달 열기/닫기 */}
      {isModalOpen && <PopupImage closeModal={closeModal} />}
    </div>
  );
}

function MoreVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}
