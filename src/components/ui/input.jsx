import * as React from "react"

import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={type === "password" && showPassword ? "text" : type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeClosed className=" w-5 h-5" /> : <Eye className=" w-5 h-5" />}
        </button>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
