import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, Card } from "@/components/ui/card";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <div className="p-6 space-y-6">
        <div className="w-full h-40 bg-blue-300">지표영역</div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">최근 업로드 비디오</h2>
            <Link href="/resourceVideo">
              <Button variant="outline">신규 비디오 등록</Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Card className="w-full">
              <img
                alt="video thumbnail"
                className="w-full h-40 object-cover"
                height="150"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "250/150",
                  objectFit: "cover",
                }}
                width="250"
              />
              <CardContent>
                <p className="text-sm">테스트용 비디오1</p>
                <p className="text-xs text-gray-500">업로드한 사용자 효성 전</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <img
                alt="video thumbnail"
                className="w-full h-40 object-cover"
                height="150"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "250/150",
                  objectFit: "cover",
                }}
                width="250"
              />
              <CardContent>
                <p className="text-sm">우거진 숲 5분 영상</p>
                <p className="text-xs text-gray-500">업로드한 사용자 효성 전</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">최근 업로드 이미지</h2>
            <Link href="/resourceImage">
              <Button variant="outline">신규 이미지 등록</Button>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Card className="w-full">
              <img
                alt="image"
                className="w-full h-40 object-cover"
                height="150"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "250/150",
                  objectFit: "cover",
                }}
                width="250"
              />
              <CardContent>
                <p className="text-sm">test 1</p>
                <p className="text-xs text-gray-500">업로드한 사용자 소현 장</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <img
                alt="image"
                className="w-full h-40 object-cover"
                height="150"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "250/150",
                  objectFit: "cover",
                }}
                width="250"
              />
              <CardContent>
                <p className="text-sm">test 2</p>
                <p className="text-xs text-gray-500">업로드한 사용자 소현 장</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
