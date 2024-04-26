
export default function PopupPreviewImage({ onClose, isModalOpen }){

    return(
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-8 shadow-lg rounded-lg w-[600px]">
            <h3 className="text-xl font-semibold mb-4">이미지 미리보기</h3>
            
            <form>

              <div className="mb-4">
                <div
                  className="mt-1 block w-full px-3 py-20 border border-gray-300 shadow-sm"
                />
              </div>

              <div className="flex items-center justify-between">
                <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" type="button" onClick={ onClose }>
                  취소
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                  확인
                </button>
              </div>

            </form>
          </div>
        </div>
    )
}