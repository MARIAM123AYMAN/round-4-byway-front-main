import { Mail } from "lucide-react";

const SendMessageButton = () => {
  return (
    <button className="flex items-center justify-center w-[179px] h-[40px] bg-blue-600 text-white text-base font-medium rounded-[8px] px-[24px] py-[10px] gap-[6px]">
      Send Message
      <Mail size={20} />
    </button>
  );
};

export default SendMessageButton;
