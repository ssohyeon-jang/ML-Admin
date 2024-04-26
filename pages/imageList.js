import React, { useCallback, useState } from 'react';
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import PopupSegment from '../components/popupSegment'
import PopupPreviewImage from '../components/popupPreviewImage';


export default function ImageList() {
  const [segmentModalOpen, setSegmentModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const openSegmentModal = () => setSegmentModalOpen(true);
  const openImageModal = () => setImageModalOpen(true);

  const closeSegmentModal = () => setSegmentModalOpen(false)
  const closeImageModal = () => setImageModalOpen(false);

  return (
    <div className="bg-white p-6">
      <div className="flex justify-end mb-4">
        <Button className="bg-blue-500 text-white" size="sm" variant="default" onClick={openSegmentModal}> {/* 클릭 시 모달 열기 */}
          세그먼트 전체 진행
        </Button>
      </div>

      <Table>
        
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">test3</TableHead>
            <TableHead className="w-[100px]">이름</TableHead>
            <TableHead className="w-[150px]">사이즈</TableHead>
            <TableHead className="w-[150px]">사용자</TableHead>
            <TableHead className="w-[100px]">상태</TableHead>
            <TableHead className="w-[100px]" />
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              <img src="이미지 주소" alt="img" className="cursor-pointer" onClick={openImageModal} /> {/* 클릭 시 모달 열기 */}
            </TableCell>
            <TableCell>section_1.png</TableCell>
            <TableCell>860 × 1203</TableCell>
            <TableCell>어드민_소현</TableCell>
            <TableCell>
              <Badge variant="secondary">미처리</Badge>
            </TableCell>
            <TableCell>
              <Button size="sm">이름변경</Button>
              <Button className="ml-2" size="sm" variant="destructive">
                삭제
              </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="이미지 주소" alt="img" className="cursor-pointer" onClick={openImageModal} /> {/* 클릭 시 모달 열기 */}
            </TableCell>
            <TableCell>section_2.png</TableCell>
            <TableCell>860 × 301</TableCell>
            <TableCell>어드민_소현</TableCell>
            <TableCell>
              <Badge variant="secondary">미처리</Badge>
            </TableCell>
            <TableCell>
              <Button size="sm">이름변경</Button>
              <Button className="ml-2" size="sm" variant="destructive">
                삭제
              </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="이미지 주소" alt="img" className="cursor-pointer" onClick={openImageModal} /> {/* 클릭 시 모달 열기 */}
            </TableCell>
            <TableCell>section_3.png</TableCell>
            <TableCell>860 × 334</TableCell>
            <TableCell>어드민_소현</TableCell>
            <TableCell>
              <Badge variant="secondary">미처리</Badge>
            </TableCell>
            <TableCell>
              <Button size="sm">이름변경</Button>
              <Button className="ml-2" size="sm" variant="destructive">
                삭제
              </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="이미지 주소" alt="img" className="cursor-pointer" onClick={openImageModal} /> {/* 클릭 시 모달 열기 */}
            </TableCell>
            <TableCell>section_4.png</TableCell>
            <TableCell>860 × 303</TableCell>
            <TableCell>어드민_소현</TableCell>
            <TableCell>
              <Badge variant="secondary">미처리</Badge>
            </TableCell>
            <TableCell>
              <Button size="sm">이름변경</Button>
              <Button className="ml-2" size="sm" variant="destructive">
                삭제
              </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="이미지 주소" alt="img" className="cursor-pointer" onClick={openImageModal} /> {/* 클릭 시 모달 열기 */}
            </TableCell>
            <TableCell>section_5.png</TableCell>
            <TableCell>860 × 1145</TableCell>
            <TableCell>어드민_소현</TableCell>
            <TableCell>
              <Badge variant="secondary">미처리</Badge>
            </TableCell>
            <TableCell>
              <Button size="sm">이름변경</Button>
              <Button className="ml-2" size="sm" variant="destructive">
                삭제
              </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img src="이미지 주소" alt="img" className="cursor-pointer" onClick={openImageModal} /> {/* 클릭 시 모달 열기 */}
            </TableCell>
            <TableCell>section_6.png</TableCell>
            <TableCell>860 × 839</TableCell>
            <TableCell>어드민_소현</TableCell>
            <TableCell>
              <Badge variant="secondary">미처리</Badge>
            </TableCell>
            <TableCell>
              <Button size="sm">이름변경</Button>
              <Button className="ml-2" size="sm" variant="destructive">
                삭제
              </Button>
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>

      <div className="flex justify-center mt-6">
        <Button variant="ghost">1</Button>
        <Button variant="ghost">2</Button>
        <Button variant="ghost">3</Button>
      </div>
      {/* 모달 열기/닫기 */}
      {segmentModalOpen && <PopupSegment onClose={closeSegmentModal} />}
      {imageModalOpen && <PopupPreviewImage onClose={closeImageModal} />}

    </div>
  )
}