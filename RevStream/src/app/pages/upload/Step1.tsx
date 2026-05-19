import { useNavigate } from "react-router";
import { FileUp, FileText, UploadCloud, Info } from "lucide-react";

export function Step1() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-[1440px] mx-auto h-full flex gap-10">
      
      {/* Left panel 55% */}
      <div className="w-[55%] flex flex-col">
        <h2 className="text-forest-900 font-semibold text-2xl mb-6">Tải lên Invoice</h2>
        
        {/* Upload Zone */}
        <button 
          onClick={() => navigate("/upload/step-2")}
          className="flex-1 bg-white border-2 border-dashed border-border-subtle rounded-[24px] hover:border-forest-500 hover:bg-forest-50/50 transition-all flex flex-col items-center justify-center p-8 group relative h-[480px] cursor-pointer text-left"
        >
          <div className="bg-forest-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-10 h-10 text-forest-500" />
          </div>
          
          <p className="text-forest-900 text-lg font-medium mb-2 flex items-center gap-1.5">
            Kéo thả invoice PDF vào đây <span className="text-text-muted font-normal">hoặc</span>
          </p>
          <p className="text-forest-500 font-semibold mb-12 hover:underline">
            Chọn file từ máy tính
          </p>
          
          <div className="absolute bottom-8 text-center w-full text-text-muted text-sm flex flex-col items-center gap-2">
            <FileText className="w-5 h-5 opacity-50" />
            <p>Chấp nhận: PDF, tối đa 10MB</p>
          </div>
        </button>
      </div>

      {/* Right panel 45% */}
      <div className="w-[45%] flex flex-col pt-14">
        <div className="bg-white rounded-[24px] shadow-sm p-8 border border-border-subtle flex-1">
          <h3 className="text-forest-900 text-xl font-semibold mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-forest-500" />
            Hướng dẫn nộp invoice
          </h3>
          
          <ul className="space-y-6 mb-8 relative">
            <div className="absolute left-4 top-4 bottom-4 w-px bg-border-subtle -z-0" />
            {[
              "Tải lên file PDF invoice gốc",
              "Hệ thống tự động trích xuất thông tin",
              "Xác minh và điều chỉnh nếu cần",
              "Chọn số tiền muốn ứng trước"
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4 items-start relative z-10">
                <div className="w-8 h-8 rounded-full bg-forest-50 border border-border-subtle flex items-center justify-center text-forest-900 font-bold text-sm flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-forest-900 font-medium pt-1.5">{step}</p>
              </li>
            ))}
          </ul>
          
          <div className="bg-forest-50 rounded-xl p-6 border border-forest-400/20">
            <p className="text-forest-900 font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest-500" />
              Invoice hợp lệ cần có:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted text-sm font-medium">
              <li>Tên và mã số thuế doanh nghiệp</li>
              <li>Số invoice và ngày phát hành</li>
              <li>Giá trị và ngày đáo hạn (NET 30-60)</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}
