import React from "react";

export const InstagramIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="27"
      height="29"
      {...props}
      viewBox="0 0 27 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 0.753906C9.83644 0.753906 9.37575 0.771406 7.93631 0.837906C6.49688 0.907906 5.51644 1.14241 4.6575 1.48891C3.75653 1.84034 2.94045 2.3916 2.26631 3.10416C1.57963 3.80362 1.04812 4.64983 0.70875 5.58391C0.374625 6.47291 0.146812 7.49141 0.081 8.97891C0.016875 10.4752 0 10.9512 0 14.7557C0 18.5567 0.016875 19.0327 0.081 20.5254C0.1485 22.0164 0.374625 23.0332 0.70875 23.9239C1.05469 24.8444 1.51538 25.6249 2.26631 26.4037C3.01556 27.1824 3.76819 27.6619 4.65581 28.0189C5.51644 28.3654 6.49519 28.6017 7.93294 28.6699C9.37406 28.7364 9.83306 28.7539 13.5 28.7539C17.1669 28.7539 17.6243 28.7364 19.0654 28.6699C20.5014 28.5999 21.4853 28.3654 22.3442 28.0189C23.2446 27.6673 24.0601 27.116 24.7337 26.4037C25.4846 25.6249 25.9453 24.8444 26.2913 23.9239C26.6237 23.0332 26.8515 22.0164 26.919 20.5254C26.9831 19.0327 27 18.5567 27 14.7539C27 10.9512 26.9831 10.4752 26.919 8.98066C26.8515 7.49141 26.6237 6.47291 26.2913 5.58391C25.9519 4.6498 25.4204 3.80359 24.7337 3.10416C24.0598 2.39134 23.2436 1.84004 22.3425 1.48891C21.4819 1.14241 20.4998 0.906156 19.0637 0.837906C17.6226 0.771406 17.1653 0.753906 13.4966 0.753906H13.5017H13.5ZM12.2901 3.27741H13.5017C17.1062 3.27741 17.5331 3.28966 18.9557 3.35791C20.2719 3.41916 20.9874 3.64841 21.4633 3.83916C22.0928 4.09291 22.5433 4.39741 23.0158 4.88741C23.4883 5.37741 23.7803 5.84291 24.0249 6.49741C24.2106 6.98916 24.4299 7.73116 24.489 9.09616C24.5548 10.5714 24.5683 11.0142 24.5683 14.7504C24.5683 18.4867 24.5548 18.9312 24.489 20.4064C24.4299 21.7714 24.2089 22.5117 24.0249 23.0052C23.8085 23.613 23.463 24.1627 23.0141 24.6134C22.5416 25.1034 22.0928 25.4062 21.4616 25.6599C20.9891 25.8524 20.2736 26.0799 18.9557 26.1429C17.5331 26.2094 17.1062 26.2252 13.5017 26.2252C9.89719 26.2252 9.46856 26.2094 8.046 26.1429C6.72975 26.0799 6.01594 25.8524 5.54006 25.6599C4.95365 25.4358 4.42315 25.0782 3.98756 24.6134C3.53827 24.162 3.19228 23.6118 2.97506 23.0034C2.79113 22.5117 2.57006 21.7697 2.511 20.4047C2.44688 18.9294 2.43338 18.4867 2.43338 14.7469C2.43338 11.0089 2.44688 10.5679 2.511 9.09266C2.57175 7.72766 2.79113 6.98566 2.97675 6.49216C3.22144 5.83941 3.51506 5.37216 3.98756 4.88216C4.46006 4.39216 4.90894 4.08941 5.54006 3.83566C6.01594 3.64316 6.72975 3.41566 8.046 3.35266C9.29138 3.29316 9.774 3.27566 12.2901 3.27391V3.27741ZM20.7073 5.60141C20.4946 5.60141 20.2839 5.64486 20.0874 5.72929C19.8908 5.81372 19.7122 5.93746 19.5618 6.09347C19.4114 6.24947 19.292 6.43467 19.2106 6.6385C19.1292 6.84233 19.0873 7.06079 19.0873 7.28141C19.0873 7.50203 19.1292 7.72049 19.2106 7.92431C19.292 8.12814 19.4114 8.31334 19.5618 8.46935C19.7122 8.62535 19.8908 8.7491 20.0874 8.83352C20.2839 8.91795 20.4946 8.96141 20.7073 8.96141C21.137 8.96141 21.549 8.78441 21.8528 8.46935C22.1566 8.15428 22.3273 7.72697 22.3273 7.28141C22.3273 6.83584 22.1566 6.40853 21.8528 6.09347C21.549 5.77841 21.137 5.60141 20.7073 5.60141ZM13.5017 7.56491C12.5821 7.55003 11.6689 7.72501 10.8152 8.07965C9.96142 8.4343 9.18424 8.96153 8.52888 9.63065C7.87351 10.2998 7.35305 11.0974 6.99779 11.9771C6.64254 12.8568 6.45958 13.801 6.45958 14.7548C6.45958 15.7085 6.64254 16.6527 6.99779 17.5325C7.35305 18.4122 7.87351 19.2098 8.52888 19.8789C9.18424 20.548 9.96142 21.0753 10.8152 21.4299C11.6689 21.7846 12.5821 21.9595 13.5017 21.9447C15.3217 21.9152 17.0576 21.1448 18.3346 19.7996C19.6117 18.4544 20.3275 16.6425 20.3275 14.7548C20.3275 12.8671 19.6117 11.0551 18.3346 9.70997C17.0576 8.36481 15.3217 7.59435 13.5017 7.56491ZM13.5017 10.0867C14.6953 10.0867 15.84 10.5784 16.6841 11.4537C17.5281 12.3289 18.0023 13.5161 18.0023 14.7539C18.0023 15.9917 17.5281 17.1789 16.6841 18.0541C15.84 18.9294 14.6953 19.4212 13.5017 19.4212C12.3081 19.4212 11.1633 18.9294 10.3193 18.0541C9.47529 17.1789 9.00113 15.9917 9.00113 14.7539C9.00113 13.5161 9.47529 12.3289 10.3193 11.4537C11.1633 10.5784 12.3081 10.0867 13.5017 10.0867Z"
        fill="white"
      />
    </svg>
  );
};

export default InstagramIcon;
