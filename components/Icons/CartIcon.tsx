import React from "react";

const CartIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0.875C0 0.70924 0.065848 0.550268 0.183058 0.433058C0.300269 0.315848 0.45924 0.25 0.625 0.25H2.5C2.63941 0.250039 2.77481 0.296688 2.88466 0.382531C2.99452 0.468374 3.07251 0.58848 3.10625 0.72375L3.6125 2.75H18.125C18.2174 2.75006 18.3087 2.77061 18.3922 2.81019C18.4758 2.84977 18.5495 2.90738 18.6081 2.97887C18.6666 3.05037 18.7086 3.13397 18.731 3.22365C18.7534 3.31333 18.7556 3.40686 18.7375 3.4975L17.4875 9.7475C17.4602 9.88379 17.3882 10.0071 17.2829 10.0979C17.1776 10.1886 17.0451 10.2417 16.9062 10.2487L5.16 10.8387L5.51875 12.75H16.25C16.4158 12.75 16.5747 12.8158 16.6919 12.9331C16.8092 13.0503 16.875 13.2092 16.875 13.375C16.875 13.5408 16.8092 13.6997 16.6919 13.8169C16.5747 13.9342 16.4158 14 16.25 14H5C4.85429 13.9999 4.71321 13.9488 4.60114 13.8557C4.48907 13.7626 4.41306 13.6332 4.38625 13.49L2.5125 3.50875L2.0125 1.5H0.625C0.45924 1.5 0.300269 1.43415 0.183058 1.31694C0.065848 1.19973 0 1.04076 0 0.875ZM3.8775 4L4.9275 9.59875L16.3575 9.025L17.3625 4H3.8775ZM6.25 14C5.58696 14 4.95107 14.2634 4.48223 14.7322C4.01339 15.2011 3.75 15.837 3.75 16.5C3.75 17.163 4.01339 17.7989 4.48223 18.2678C4.95107 18.7366 5.58696 19 6.25 19C6.91304 19 7.54893 18.7366 8.01777 18.2678C8.48661 17.7989 8.75 17.163 8.75 16.5C8.75 15.837 8.48661 15.2011 8.01777 14.7322C7.54893 14.2634 6.91304 14 6.25 14ZM15 14C14.337 14 13.7011 14.2634 13.2322 14.7322C12.7634 15.2011 12.5 15.837 12.5 16.5C12.5 17.163 12.7634 17.7989 13.2322 18.2678C13.7011 18.7366 14.337 19 15 19C15.663 19 16.2989 18.7366 16.7678 18.2678C17.2366 17.7989 17.5 17.163 17.5 16.5C17.5 15.837 17.2366 15.2011 16.7678 14.7322C16.2989 14.2634 15.663 14 15 14ZM6.25 15.25C6.58152 15.25 6.89946 15.3817 7.13388 15.6161C7.3683 15.8505 7.5 16.1685 7.5 16.5C7.5 16.8315 7.3683 17.1495 7.13388 17.3839C6.89946 17.6183 6.58152 17.75 6.25 17.75C5.91848 17.75 5.60054 17.6183 5.36612 17.3839C5.1317 17.1495 5 16.8315 5 16.5C5 16.1685 5.1317 15.8505 5.36612 15.6161C5.60054 15.3817 5.91848 15.25 6.25 15.25ZM15 15.25C15.3315 15.25 15.6495 15.3817 15.8839 15.6161C16.1183 15.8505 16.25 16.1685 16.25 16.5C16.25 16.8315 16.1183 17.1495 15.8839 17.3839C15.6495 17.6183 15.3315 17.75 15 17.75C14.6685 17.75 14.3505 17.6183 14.1161 17.3839C13.8817 17.1495 13.75 16.8315 13.75 16.5C13.75 16.1685 13.8817 15.8505 14.1161 15.6161C14.3505 15.3817 14.6685 15.25 15 15.25Z"
        fill="#666B84"
      />
    </svg>
  );
};

export default CartIcon;