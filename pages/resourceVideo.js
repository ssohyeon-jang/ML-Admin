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
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import PopupVideo from "../components/popupVideo";

export default function ResourceVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 or 닫기 상태 변수
  const [view, setView] = useState("tiles");

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
              className="bg-blue-500 text-white mx-1"
              onClick={openModal}
              variant="default"
            >
              신규 비디오 등록
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                  <LayoutGridIcon className="w-5 h-5" />
                  <span>View</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-20">
                <DropdownMenuItem onClick={() => setView("tiles")}>
                  <div className="flex items-center gap-2">
                    <LayoutGridIcon className="w-5 h-5" />
                    <span>Tiles</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setView("list")}>
                  <div className="flex items-center gap-2">
                    <ListIcon className="w-5 h-5" />
                    <span>List</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Tiles 뷰 */}
          {view === "tiles" && (
            <div className="grid grid-cols-3 gap-4">
              <Card className="w-full">
                <CardContent>
                  <Badge className="mt-2" variant="default">
                    미처리
                  </Badge>
                  <img
                    alt="video 화면"
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
                    <p className="text-sm font-semibold">테스트용 비디오1</p>
                    <p className="text-xs text-gray-500">
                      업로드 한 날짜 : 1초 전
                    </p>
                    <p className="text-xs text-gray-500">
                      업로드한 사용자 효성 전
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
                        <DropdownMenuItem>분석 하기</DropdownMenuItem>
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
                    alt="video 화면"
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
                    <p className="text-sm font-semibold">우거진 숲 5분 영상</p>
                    <p className="text-xs text-gray-500">
                      업로드 한 날짜 : 1초 전
                    </p>
                    <p className="text-xs text-gray-500">
                      업로드한 사용자 효성 전
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
                        <DropdownMenuItem>분석 하기</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          파일 삭제
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* List 뷰 */}
          {view === "list" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]"></TableHead>
                  <TableHead className="w-[100px]">이름</TableHead>
                  <TableHead className="w-[150px]">사용자</TableHead>
                  <TableHead className="w-[150px]">업로드 한 날짜</TableHead>
                  <TableHead className="w-[100px]">상태</TableHead>
                  <TableHead className="w-[100px]" />
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <img
                      src="이미지 주소"
                      alt="video"
                      className="cursor-pointer"
                    />
                  </TableCell>
                  <TableCell>테스트용 비디오</TableCell>
                  <TableCell>어드민_효성</TableCell>
                  <TableCell>1초 전</TableCell>
                  <TableCell>
                    <Badge variant="secondary">업로드 완료/분석 전</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm">분석하기</Button>
                    <Button className="ml-2" size="sm" variant="destructive">
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <img
                      src="이미지 주소"
                      alt="video"
                      className="cursor-pointer"
                    />
                  </TableCell>
                  <TableCell>원본 영상2</TableCell>
                  <TableCell>어드민_효성</TableCell>
                  <TableCell>1초 전</TableCell>
                  <TableCell>
                    <Badge variant="secondary">업로드 완료/분석 전</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm">분석하기</Button>
                    <Button className="ml-2" size="sm" variant="destructive">
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <img
                      src="이미지 주소"
                      alt="video"
                      className="cursor-pointer"
                    />
                  </TableCell>
                  <TableCell>우거진 숲 5분 영상</TableCell>
                  <TableCell>어드민_효성</TableCell>
                  <TableCell>1초 전</TableCell>
                  <TableCell>
                    <Badge variant="secondary">업로드 완료/분석 전</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm">분석하기</Button>
                    <Button className="ml-2" size="sm" variant="destructive">
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <img
                      src="이미지 주소"
                      alt="video"
                      className="cursor-pointer"
                    />
                  </TableCell>
                  <TableCell>옛날에 올린 영상</TableCell>
                  <TableCell>어드민_효성</TableCell>
                  <TableCell>8일 전</TableCell>
                  <TableCell>
                    <Badge variant="secondary">분석완료</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm">분석하기</Button>
                    <Button className="ml-2" size="sm" variant="destructive">
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <img
                      src="이미지 주소"
                      alt="video"
                      className="cursor-pointer"
                    />
                  </TableCell>
                  <TableCell>분석에 실패한 영상</TableCell>
                  <TableCell>어드민_효성</TableCell>
                  <TableCell>13시간 전</TableCell>
                  <TableCell>
                    <Badge variant="secondary">분석 실패</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm">분석하기</Button>
                    <Button className="ml-2" size="sm" variant="destructive">
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}

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
      {isModalOpen && <PopupVideo closeModal={closeModal} />}
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
function LayoutGridIcon(props) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}
function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}
