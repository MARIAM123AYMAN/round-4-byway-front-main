// components/FullPageLoader.tsx
import { Loader2 } from "lucide-react";

const FullPageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 opacity-50">
      <Loader2 className="h-12 w-12 animate-spin text-green-600 mb-4" />
      <p className="text-green-500">Loading.....</p>
    </div>
  );
};

export default FullPageLoader;
