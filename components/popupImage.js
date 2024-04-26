import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PopupImage({ closeModal, isModalOpen }){

    return(
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-8 shadow-lg rounded-lg w-[600px]">
            <h3 className="text-xl font-semibold mb-4">리소스 업로드</h3>
            
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                  이미지 업로드
                </label>
              </div>

              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <Input id="image" type="file" />
                  <Button variant="secondary">Add File</Button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="url">
                  URL
                </label>
                <div className="flex items-center space-x-2">
                  <Input id="url" placeholder="URL을 입력해주세요." type="text" />
                  <Button variant="secondary">Confirm</Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" type="button" onClick={closeModal}>
                  취소
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                  업로드
                </button>
              </div>

            </form>
          </div>
        </div>
    )
}