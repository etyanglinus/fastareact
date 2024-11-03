import React from "react";
import { useTheme } from "@mui/material";

const EarnMoney = () => {
  const theme = useTheme();
  return (
    <svg
      height="318"
      viewBox="0 0 330 416"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.3797 391.437C52.729 428.616 231.599 443.346 319.285 287.825C344.583 242.941 329.189 144.495 187.409 142.724C87.1039 141.485 25.8372 206.072 7.13697 272.017C-11.7847 338.834 11.3434 372.353 25.3797 391.437Z"
        fill="#E7E9F2"
      />
      <path
        d="M191.556 348.604C237.694 347.379 351.933 208.95 274.328 48.1603C251.937 1.75646 162.318 -41.8283 79.9155 73.5614C21.6155 155.196 39.6516 242.366 83.1183 295.382C127.131 349.092 167.867 349.239 191.556 348.604Z"
        fill="#E7E9F2"
      />
      <path
        d="M172.192 340.561C251.514 340.561 315.817 276.258 315.817 196.936C315.817 117.614 251.514 53.3113 172.192 53.3113C92.8703 53.3113 28.5674 117.614 28.5674 196.936C28.5674 276.258 92.8703 340.561 172.192 340.561Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M315.803 198.117C315.183 276.888 251.112 340.561 172.193 340.561C165.831 340.561 159.573 340.147 153.448 339.35L91.9749 277.095L196.192 116.674L210.73 132.437L223.718 138.444L243.673 126.031L315.803 198.117Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M146.983 188.995C146.983 211.194 164.989 229.2 187.188 229.2C191.114 229.2 194.907 228.639 198.493 227.577V269.449C198.493 274.91 194.066 279.353 188.59 279.353H98.2764C92.8006 279.353 88.3728 274.91 88.3728 269.449V123.02C88.3728 117.545 92.8154 113.117 98.2764 113.117H188.59C194.066 113.117 198.493 117.559 198.493 123.02V150.414C194.907 149.351 191.114 148.791 187.188 148.791C164.989 148.791 146.983 166.797 146.983 188.995Z"
        fill="#64798A"
      />
      <path
        d="M146.982 188.995C146.982 211.194 164.989 229.2 187.187 229.2V252.077C187.187 253.863 185.726 255.325 183.925 255.325H105.213C103.412 255.325 101.951 253.863 101.951 252.063V133.441C101.951 131.64 103.412 130.179 105.213 130.179H183.925C185.726 130.179 187.187 131.64 187.187 133.441V148.791C164.989 148.791 146.982 166.797 146.982 188.995Z"
        fill="white"
      />
      <path
        d="M198.493 150.414V227.577C194.907 228.639 191.114 229.2 187.188 229.2V148.79C191.114 148.79 194.907 149.351 198.493 150.414Z"
        fill="#999999"
      />
      <path
        d="M187.188 148.79V229.2C164.99 229.2 146.983 211.194 146.983 188.995C146.983 166.797 164.99 148.79 187.188 148.79Z"
        fill="#F4F4F4"
      />
      <path
        d="M187.188 225.082C208.251 225.082 225.327 208.007 225.327 186.944C225.327 165.88 208.251 148.805 187.188 148.805C166.125 148.805 149.05 165.88 149.05 186.944C149.05 208.007 166.125 225.082 187.188 225.082Z"
        fill={theme.palette.primary.main}
      />
      <path
        opacity="0.5"
        d="M187.189 219.297C205.057 219.297 219.542 204.812 219.542 186.944C219.542 169.076 205.057 154.591 187.189 154.591C169.321 154.591 154.836 169.076 154.836 186.944C154.836 204.812 169.321 219.297 187.189 219.297Z"
        fill="#FCD462"
      />
      <path
        d="M186.657 206.116C183.735 206.116 180.931 205.733 178.259 204.95C175.588 204.168 173.433 203.15 171.795 201.895L174.658 195.534C176.223 196.641 178.067 197.556 180.208 198.279C182.348 198.988 184.517 199.342 186.702 199.342C188.37 199.342 189.713 199.179 190.746 198.84C191.764 198.515 192.532 198.043 193.019 197.453C193.506 196.862 193.742 196.183 193.742 195.416C193.742 194.442 193.358 193.674 192.591 193.099C191.823 192.523 190.82 192.051 189.565 191.696C188.311 191.327 186.938 190.988 185.418 190.648C183.912 190.324 182.392 189.91 180.887 189.423C179.381 188.936 177.994 188.316 176.739 187.549C175.485 186.781 174.466 185.778 173.684 184.523C172.902 183.269 172.518 181.675 172.518 179.726C172.518 177.645 173.079 175.741 174.215 174.015C175.352 172.288 177.049 170.915 179.322 169.897C181.595 168.878 184.458 168.362 187.897 168.362C190.185 168.362 192.458 168.627 194.672 169.173C196.901 169.72 198.864 170.517 200.561 171.594L197.948 178.014C196.251 177.04 194.539 176.317 192.842 175.845C191.144 175.372 189.462 175.136 187.838 175.136C186.215 175.136 184.872 175.328 183.824 175.712C182.776 176.096 182.038 176.597 181.58 177.203C181.123 177.808 180.901 178.516 180.901 179.313C180.901 180.258 181.285 181.011 182.053 181.586C182.82 182.162 183.824 182.619 185.078 182.974C186.333 183.328 187.705 183.667 189.226 184.021C190.746 184.376 192.251 184.774 193.757 185.217C195.262 185.675 196.65 186.28 197.904 187.047C199.159 187.815 200.177 188.818 200.959 190.073C201.742 191.327 202.125 192.907 202.125 194.825C202.125 196.877 201.55 198.751 200.399 200.464C199.247 202.176 197.535 203.533 195.262 204.581C193.004 205.6 190.126 206.116 186.657 206.116ZM184.768 211.755V162.724H189.978V211.755H184.768Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M228.943 157.218C239.474 157.218 248.012 148.681 248.012 138.149C248.012 127.617 239.474 119.08 228.943 119.08C218.411 119.08 209.874 127.617 209.874 138.149C209.874 148.681 218.411 157.218 228.943 157.218Z"
        fill={theme.palette.primary.main}
      />
      <path
        opacity="0.5"
        d="M228.942 154.325C237.876 154.325 245.118 147.083 245.118 138.149C245.118 129.215 237.876 121.973 228.942 121.973C220.008 121.973 212.766 129.215 212.766 138.149C212.766 147.083 220.008 154.325 228.942 154.325Z"
        fill="#FCD462"
      />
      <path
        d="M228.676 147.728C227.215 147.728 225.813 147.536 224.485 147.137C223.142 146.739 222.064 146.237 221.252 145.617L222.684 142.429C223.466 142.99 224.396 143.448 225.459 143.802C226.522 144.156 227.614 144.333 228.706 144.333C229.547 144.333 230.211 144.245 230.728 144.082C231.245 143.92 231.614 143.684 231.864 143.389C232.101 143.093 232.233 142.754 232.233 142.37C232.233 141.883 232.042 141.499 231.658 141.204C231.274 140.909 230.772 140.688 230.152 140.496C229.533 140.319 228.839 140.141 228.086 139.979C227.333 139.817 226.581 139.61 225.813 139.359C225.06 139.108 224.367 138.798 223.747 138.415C223.127 138.031 222.61 137.529 222.227 136.909C221.828 136.289 221.636 135.477 221.636 134.503C221.636 133.455 221.917 132.511 222.477 131.64C223.038 130.784 223.894 130.09 225.031 129.574C226.167 129.057 227.599 128.806 229.326 128.806C230.477 128.806 231.599 128.939 232.721 129.205C233.828 129.47 234.816 129.884 235.672 130.415L234.374 133.618C233.518 133.131 232.676 132.776 231.82 132.54C230.964 132.304 230.138 132.186 229.311 132.186C228.485 132.186 227.82 132.275 227.304 132.466C226.787 132.658 226.403 132.909 226.182 133.204C225.961 133.514 225.843 133.854 225.843 134.267C225.843 134.739 226.035 135.108 226.418 135.404C226.802 135.699 227.304 135.92 227.924 136.097C228.544 136.274 229.237 136.452 229.99 136.614C230.743 136.791 231.496 136.983 232.263 137.219C233.016 137.44 233.709 137.75 234.329 138.134C234.949 138.518 235.466 139.02 235.85 139.64C236.233 140.26 236.44 141.057 236.44 142.016C236.44 143.049 236.16 143.979 235.584 144.835C235.008 145.691 234.152 146.37 233.016 146.901C231.85 147.477 230.403 147.728 228.676 147.728ZM227.732 150.547V126.031H230.344V150.547H227.732Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M228.943 274.571C241.472 274.571 251.628 264.414 251.628 251.886C251.628 239.357 241.472 229.2 228.943 229.2C216.414 229.2 206.258 239.357 206.258 251.886C206.258 264.414 216.414 274.571 228.943 274.571Z"
        fill={theme.palette.primary.main}
      />
      <path
        opacity="0.5"
        d="M228.943 271.132C239.573 271.132 248.19 262.515 248.19 251.885C248.19 241.256 239.573 232.639 228.943 232.639C218.314 232.639 209.697 241.256 209.697 251.885C209.697 262.515 218.314 271.132 228.943 271.132Z"
        fill="#FCD462"
      />
      <path
        d="M228.618 263.295C226.877 263.295 225.209 263.058 223.615 262.601C222.021 262.129 220.737 261.523 219.763 260.786L221.475 257.007C222.405 257.671 223.512 258.217 224.781 258.631C226.05 259.059 227.334 259.265 228.648 259.265C229.637 259.265 230.449 259.162 231.054 258.97C231.659 258.778 232.116 258.498 232.397 258.144C232.692 257.789 232.825 257.391 232.825 256.933C232.825 256.358 232.603 255.9 232.146 255.546C231.688 255.206 231.098 254.926 230.345 254.705C229.607 254.483 228.781 254.277 227.88 254.085C226.98 253.893 226.08 253.642 225.179 253.361C224.279 253.066 223.453 252.697 222.715 252.24C221.977 251.782 221.371 251.192 220.899 250.439C220.427 249.686 220.205 248.742 220.205 247.591C220.205 246.351 220.545 245.214 221.209 244.196C221.888 243.177 222.892 242.351 224.25 241.746C225.607 241.141 227.305 240.831 229.356 240.831C230.729 240.831 232.072 240.993 233.386 241.318C234.714 241.642 235.88 242.115 236.898 242.764L235.349 246.587C234.33 246.011 233.327 245.583 232.308 245.303C231.29 245.022 230.301 244.89 229.327 244.89C228.353 244.89 227.556 245.008 226.936 245.229C226.316 245.465 225.873 245.746 225.607 246.115C225.342 246.484 225.209 246.897 225.209 247.369C225.209 247.93 225.43 248.373 225.888 248.727C226.345 249.066 226.936 249.347 227.689 249.554C228.427 249.76 229.253 249.967 230.153 250.173C231.054 250.38 231.954 250.616 232.854 250.882C233.755 251.148 234.581 251.517 235.319 251.974C236.057 252.432 236.662 253.022 237.135 253.775C237.607 254.513 237.828 255.457 237.828 256.594C237.828 257.819 237.489 258.926 236.81 259.944C236.131 260.963 235.113 261.774 233.755 262.394C232.397 262.985 230.685 263.295 228.618 263.295ZM227.511 266.645V237.48H230.611V266.645H227.511Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M162.614 124.364H134.069C132.947 124.364 132.032 123.448 132.032 122.327C132.032 121.205 132.947 120.29 134.069 120.29H162.614C163.736 120.29 164.651 121.205 164.651 122.327C164.651 123.463 163.736 124.364 162.614 124.364Z"
        fill="#3A556A"
      />
      <path
        d="M124.667 124.792C126.02 124.792 127.117 123.695 127.117 122.341C127.117 120.988 126.02 119.891 124.667 119.891C123.314 119.891 122.217 120.988 122.217 122.341C122.217 123.695 123.314 124.792 124.667 124.792Z"
        fill="#3A556A"
      />
      <path
        d="M143.426 275.944C148.562 275.944 152.725 271.781 152.725 266.645C152.725 261.51 148.562 257.347 143.426 257.347C138.291 257.347 134.128 261.51 134.128 266.645C134.128 271.781 138.291 275.944 143.426 275.944Z"
        fill="#3A556A"
      />
      <path
        d="M143.426 274.364C147.689 274.364 151.145 270.908 151.145 266.645C151.145 262.382 147.689 258.926 143.426 258.926C139.163 258.926 135.707 262.382 135.707 266.645C135.707 270.908 139.163 274.364 143.426 274.364Z"
        fill="white"
      />
    </svg>
  );
};

export default EarnMoney;
