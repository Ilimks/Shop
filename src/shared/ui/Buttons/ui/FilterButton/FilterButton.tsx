"use client";


type FBProps = {
  className: string;
  children: string;
  action: () => void;
}
export const FilterButton = ({className, children, action}: FBProps) => {


  return (
    <button onClick={action} className={className}>
      {children}
    </button>
  );
};
