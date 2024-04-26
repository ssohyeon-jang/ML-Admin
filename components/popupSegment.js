import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"


export default function PopupSegment({ onClose, segmentModalOpen }){

    return(
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-8 shadow-lg rounded-lg w-[600px]">
            <h3 className="text-xl font-semibold mb-4">선택 사항</h3>
            
            <form>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 pb-2" htmlFor="description">
                  사용할 모델
                </label>
                <Select id="parameter-type">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select AI Model" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="text">GroundingDINO-SAM-RAM</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
              </div>

            <div className="grid grid-cols-3 gap-6 pt-4 pb-7">
                <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="box_threshold">
                    Box Threshold
                </label>
                <input
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    id="box_threshold"
                    placeholder="0.25"
                    type="number"
                />
                </div>
                <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="text_threshold">
                    Text Threshold
                </label>
                <input
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    id="text_threshold"
                    placeholder="0.2"
                    type="number"
                />
                </div>
                <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="iou_threshold">
                    IoU Threshold
                </label>
                <input
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    id="iou_threshold"
                    placeholder="0.5"
                    type="number"
                />
                </div>
            </div>

              <div className="flex items-center justify-between">
                <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" type="button" onClick={ onClose }>
                  취소
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                  세그먼트
                </button>
              </div>

            </form>
          </div>
        </div>
    )
}

function XIcon(props) {
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }