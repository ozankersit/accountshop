import React, { FC } from "react";
import ListCheckIcon from "../../components/Icons/ListCheckIcon";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";

const listItems = [
  { id: 1, content: "Lifetime Warranty" },
  { id: 2, content: "Fresh MMR" },
  { id: 3, content: "Unverified Email" },
  { id: 4, content: "20~30 Capsule" },
  { id: 5, content: "0~5 Champs" },
  { id: 6, content: "Unranked" },
  { id: 7, content: "7/24 Support" },
];

interface IProps {
  title: string;
}

const AccountCards: FC<IProps> = ({ title }) => {
  const { user } = useAuth();
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow sm:p-8 hover:shadow-2xl hover:translate-y-2 transition duration-300 ease-in-out">
      <h5 className="mb-4 text-title font-medium text-dark md:whitespace-nowrap whitespace-normal flex-wrap">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-90">
        <span className="text-head font-semibold text-black">$</span>
        <span className="text-xl font-extrabold tracking-tight text-black">2</span>
        <span className="ml-1 text-title font-normal text-dark">/per</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex space-x-3">
          <span className="text-base font-normal leading-tight text-dark">
            {listItems.map((listItems) => (
              <div key={listItems.id} className="flex gap-3 mb-5">
                <ListCheckIcon />
                {listItems.content}
              </div>
            ))}
          </span>
        </li>
      </ul>

      <Link
        href={`${
          user.uid
            ? "https://www.shopier.com/ShowProductNew/storefront.php?shop=accountshoplol&sid=V2tIYUJBRDBDSlpDbU9kZzBfLTFfIF8g"
            : "/login"
        }`}
        passHref
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:!bg-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-200 px-5 py-2.5 flex justify-center w-full text-center bg-primary rounded-lg"
        >
          Buy Now
        </a>
      </Link>
    </div>
  );
};

export default AccountCards;
