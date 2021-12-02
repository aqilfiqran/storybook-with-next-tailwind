interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "sm" | "md" | "lg";
  borderSize?: "sm" | "md" | "lg";

  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "md",
  backgroundColor,
  borderSize,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "bg-blue-400 text-white" : "bg-light-50 text-black";
  return (
    <button
      type="button"
      className={`p-2 text-${size} ${mode} rounded-${borderSize}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
