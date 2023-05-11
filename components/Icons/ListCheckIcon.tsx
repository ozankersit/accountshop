import React from 'react'

const ListCheckIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
            fill="#0038FF"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <title>Check icon</title>
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
  )
}

export default ListCheckIcon