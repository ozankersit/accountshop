import React from "react";

const BagIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.125 0.25C7.62772 0.25 7.15081 0.447544 6.79917 0.799175C6.44754 1.15081 6.25 1.62772 6.25 2.125V2.75H1.875C1.37772 2.75 0.900805 2.94754 0.549175 3.29917C0.197544 3.65081 0 4.12772 0 4.625L0 14.625C0 15.1223 0.197544 15.5992 0.549175 15.9508C0.900805 16.3025 1.37772 16.5 1.875 16.5H18.125C18.6223 16.5 19.0992 16.3025 19.4508 15.9508C19.8025 15.5992 20 15.1223 20 14.625V4.625C20 4.12772 19.8025 3.65081 19.4508 3.29917C19.0992 2.94754 18.6223 2.75 18.125 2.75H13.75V2.125C13.75 1.62772 13.5525 1.15081 13.2008 0.799175C12.8492 0.447544 12.3723 0.25 11.875 0.25H8.125ZM8.125 1.5H11.875C12.0408 1.5 12.1997 1.56585 12.3169 1.68306C12.4342 1.80027 12.5 1.95924 12.5 2.125V2.75H7.5V2.125C7.5 1.95924 7.56585 1.80027 7.68306 1.68306C7.80027 1.56585 7.95924 1.5 8.125 1.5ZM10.4825 10.1425L18.75 7.93875V14.625C18.75 14.7908 18.6842 14.9497 18.5669 15.0669C18.4497 15.1842 18.2908 15.25 18.125 15.25H1.875C1.70924 15.25 1.55027 15.1842 1.43306 15.0669C1.31585 14.9497 1.25 14.7908 1.25 14.625V7.9375L9.5175 10.1425C9.83366 10.2267 10.1663 10.2267 10.4825 10.1425ZM1.875 4H18.125C18.2908 4 18.4497 4.06585 18.5669 4.18306C18.6842 4.30027 18.75 4.45924 18.75 4.625V6.645L10.1612 8.935C10.0556 8.96321 9.9444 8.96321 9.83875 8.935L1.25 6.645V4.625C1.25 4.45924 1.31585 4.30027 1.43306 4.18306C1.55027 4.06585 1.70924 4 1.875 4Z"
        fill="#666B84"
      />
    </svg>
  );
};

export default BagIcon;
