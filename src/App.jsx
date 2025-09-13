import * as React from "react";

export default function MyComponent() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <div
        layer-name="Desktop - 1"
        className="relative bg-white h-[1024px] w-[1440px] max-md:p-5 max-md:w-full max-md:max-w-screen-lg max-md:h-auto max-md:min-h-screen max-sm:p-2.5"
      >
        <div className="flex absolute justify-center items-center rounded-xl border border-black border-solid shadow-lg h-[42px] left-[1082px] top-[87px] w-[249px] max-md:top-5 max-md:right-5 max-md:left-auto max-md:h-9 max-md:w-[200px] max-sm:top-2.5 max-sm:right-2.5 max-sm:h-8 max-sm:w-[150px]">
          <div
            layer-name="View Backend"
            className="text-3xl font-medium text-white max-md:text-2xl max-sm:text-lg"
          >
            View Backend
          </div>
        </div>
        <div
          layer-name="Customer Support Copilot"
          className="absolute text-4xl font-semibold text-blue-700 h-[46px] left-[99px] top-[91px] w-[482px] max-md:left-5 max-md:top-20 max-md:w-full max-md:text-3xl max-sm:left-2.5 max-sm:text-2xl max-sm:top-[60px]"
        >
          Customer Support Copilot
        </div>
        <div className="absolute top-60 rounded-xl border border-black border-solid bg-white bg-opacity-10 h-[600px] left-[76px] w-[1166px] max-md:left-5 max-md:top-40 max-md:h-auto max-md:min-h-[500px] max-md:w-[calc(100%_-_40px)] max-sm:overflow-x-auto max-sm:left-2.5 max-sm:top-[120px] max-sm:w-[calc(100%_-_20px)]">
          <div
            layer-name="Bulk Ticket Classification Dashboard"
            className="absolute top-6 left-6 text-3xl font-medium text-blue-800 h-[34px] w-[490px] max-md:top-5 max-md:left-5 max-md:text-2xl max-sm:text-xl max-sm:left-[15px] max-sm:top-[15px]"
          >
            Bulk Ticket Classification Dashboard
          </div>
          <div className="relative top-[113px] max-md:top-20 max-sm:min-w-[800px] max-sm:top-[60px]">
            <div
              layer-name="Ticket No"
              className="absolute top-0 left-7 h-6 text-xl font-medium text-black w-[92px] max-md:left-5 max-md:text-lg max-sm:text-base max-sm:left-[15px]"
            >
              Ticket No
            </div>
            <div
              layer-name="Ticket"
              className="absolute top-0 h-6 text-xl font-medium text-black left-[200px] w-[60px] max-md:text-lg max-md:left-[120px] max-sm:text-base max-sm:left-[100px]"
            >
              Ticket
            </div>
            <div
              layer-name="Topic Tags"
              className="absolute top-0 h-6 text-xl font-medium text-black left-[550px] w-[104px] max-md:text-lg max-md:left-[350px] max-sm:text-base max-sm:left-[300px]"
            >
              Topic Tags
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=&quot;6:78&quot; layer-name=&quot;Sentiment&quot; width=&quot;97&quot; height=&quot;17&quot; viewBox=&quot;0 0 97 17&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;sentiment-header&quot; style=&quot;position: absolute; left: 801px; top: 4px&quot;> <path d=&quot;M8.53123 5.27557C8.45547 4.60322 8.14297 4.08239 7.59373 3.71307C7.04449 3.33902 6.3532 3.15199 5.51986 3.15199C4.92327 3.15199 4.40717 3.24669 3.97157 3.43608C3.53596 3.62074 3.19742 3.87642 2.95594 4.20313C2.7192 4.5251 2.60083 4.89205 2.60083 5.30398C2.60083 5.64962 2.68132 5.94792 2.84231 6.19887C3.00803 6.44981 3.22346 6.66051 3.48861 6.83097C3.7585 6.99669 4.04733 7.13637 4.35509 7.25C4.66286 7.3589 4.95878 7.44887 5.24288 7.51989L6.66333 7.88921C7.12735 8.00284 7.6032 8.15673 8.09089 8.35085C8.57858 8.54498 9.03075 8.80067 9.44742 9.1179C9.86409 9.43514 10.2003 9.82813 10.4559 10.2969C10.7164 10.7656 10.8466 11.3267 10.8466 11.9801C10.8466 12.804 10.6335 13.5355 10.2074 14.1747C9.78596 14.8139 9.1728 15.3182 8.36788 15.6875C7.56769 16.0568 6.59941 16.2415 5.46305 16.2415C4.37403 16.2415 3.4318 16.0687 2.63634 15.723C1.84089 15.3774 1.21825 14.8873 0.768444 14.2528C0.318633 13.6136 0.0700535 12.8561 0.0227051 11.9801H2.22441C2.26702 12.5057 2.43748 12.9437 2.73577 13.294C3.0388 13.6397 3.42469 13.8977 3.89344 14.0682C4.36693 14.2339 4.88539 14.3168 5.44884 14.3168C6.06911 14.3168 6.62072 14.2197 7.10367 14.0256C7.59136 13.8267 7.97488 13.5521 8.25424 13.2017C8.5336 12.8466 8.67327 12.4323 8.67327 11.9588C8.67327 11.5279 8.55017 11.1752 8.30396 10.9006C8.06248 10.6259 7.73341 10.3987 7.31674 10.2188C6.90481 10.0388 6.43842 9.88021 5.91759 9.7429L4.19884 9.27415C3.03407 8.95692 2.11077 8.49053 1.42896 7.875C0.751872 7.25947 0.41333 6.44508 0.41333 5.43182C0.41333 4.59375 0.640603 3.86222 1.09515 3.23722C1.54969 2.61222 2.16522 2.1269 2.94174 1.78125C3.71825 1.43087 4.5942 1.25568 5.56958 1.25568C6.55443 1.25568 7.42327 1.42851 8.17612 1.77415C8.93369 2.11979 9.53028 2.59565 9.96589 3.20171C10.4015 3.80303 10.6288 4.49432 10.6477 5.27557H8.53123Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M18.0003 16.2202C16.9255 16.2202 15.9999 15.9905 15.2233 15.5313C14.4516 15.0672 13.855 14.4162 13.4336 13.5781C13.0169 12.7353 12.8086 11.7481 12.8086 10.6165C12.8086 9.49906 13.0169 8.51421 13.4336 7.66193C13.855 6.80966 14.4421 6.14442 15.1949 5.6662C15.9525 5.18798 16.8379 4.94887 17.8512 4.94887C18.4667 4.94887 19.0633 5.05067 19.641 5.25426C20.2186 5.45786 20.7371 5.77747 21.1964 6.21307C21.6556 6.64868 22.0179 7.21449 22.283 7.91051C22.5482 8.6018 22.6807 9.44224 22.6807 10.4318V11.1847H14.0089V9.59375H20.5998C20.5998 9.03504 20.4861 8.54025 20.2589 8.10938C20.0316 7.67377 19.712 7.33049 19.3 7.07955C18.8929 6.8286 18.4146 6.70313 17.8654 6.70313C17.2688 6.70313 16.748 6.84991 16.3029 7.14347C15.8625 7.43229 15.5216 7.81108 15.2802 8.27983C15.0434 8.74385 14.925 9.24811 14.925 9.79262V11.0355C14.925 11.7647 15.0529 12.3849 15.3086 12.8963C15.569 13.4077 15.9312 13.7983 16.3952 14.0682C16.8592 14.3333 17.4014 14.4659 18.0216 14.4659C18.4241 14.4659 18.7911 14.4091 19.1225 14.2955C19.4539 14.1771 19.7404 14.0019 19.9819 13.7699C20.2233 13.5379 20.408 13.2514 20.5358 12.9105L22.5458 13.2727C22.3848 13.8646 22.096 14.3831 21.6793 14.8281C21.2674 15.2685 20.7489 15.6117 20.1239 15.858C19.5036 16.0994 18.7958 16.2202 18.0003 16.2202Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M27.1605 9.52273V16H25.0369V5.09091H27.0753V6.86648H27.2102C27.4612 6.28883 27.8541 5.82481 28.3892 5.47443C28.929 5.12406 29.6084 4.94887 30.4275 4.94887C31.1709 4.94887 31.8219 5.10512 32.3807 5.41762C32.9394 5.72538 33.3726 6.18466 33.6804 6.79546C33.9881 7.40625 34.142 8.16146 34.142 9.06108V16H32.0184V9.31676C32.0184 8.52605 31.8125 7.90815 31.4005 7.46307C30.9886 7.01326 30.4228 6.78835 29.7031 6.78835C29.2107 6.78835 28.7727 6.89489 28.3892 7.10796C28.0104 7.32103 27.7097 7.63353 27.4872 8.04546C27.2694 8.45265 27.1605 8.94508 27.1605 9.52273Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M42.0824 5.09091V6.79546H36.1236V5.09091H42.0824ZM37.7216 2.47728H39.8451V12.7969C39.8451 13.2088 39.9067 13.5189 40.0298 13.7273C40.1529 13.9309 40.3115 14.0706 40.5057 14.1463C40.7045 14.2173 40.92 14.2528 41.152 14.2528C41.3224 14.2528 41.4716 14.241 41.5994 14.2173C41.7273 14.1937 41.8267 14.1747 41.8977 14.1605L42.2812 15.9148C42.1581 15.9621 41.9829 16.0095 41.7557 16.0568C41.5284 16.1089 41.2443 16.1373 40.9034 16.142C40.3447 16.1515 39.8238 16.0521 39.3409 15.8438C38.8579 15.6354 38.4673 15.3134 38.169 14.8778C37.8707 14.4422 37.7216 13.8954 37.7216 13.2372V2.47728Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M44.4314 16V5.09091H46.555V16H44.4314ZM45.5039 3.40767C45.1346 3.40767 44.8173 3.28457 44.5522 3.03835C44.2918 2.78741 44.1616 2.48911 44.1616 2.14347C44.1616 1.79309 44.2918 1.49479 44.5522 1.24858C44.8173 0.997635 45.1346 0.872162 45.5039 0.872162C45.8732 0.872162 46.1881 0.997635 46.4485 1.24858C46.7136 1.49479 46.8462 1.79309 46.8462 2.14347C46.8462 2.48911 46.7136 2.78741 46.4485 3.03835C46.1881 3.28457 45.8732 3.40767 45.5039 3.40767Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M49.4119 16V5.09091H51.4503V6.86648H51.5852C51.8125 6.26515 52.1842 5.7964 52.7003 5.46023C53.2164 5.11932 53.8343 4.94887 54.554 4.94887C55.2831 4.94887 55.8939 5.11932 56.3863 5.46023C56.8835 5.80114 57.2505 6.26989 57.4872 6.86648H57.6008C57.8612 6.28409 58.2755 5.82008 58.8437 5.47443C59.4119 5.12406 60.089 4.94887 60.875 4.94887C61.8646 4.94887 62.6719 5.259 63.2969 5.87926C63.9266 6.49953 64.2415 7.43466 64.2415 8.68466V16H62.1179V8.88353C62.1179 8.14489 61.9166 7.60985 61.5142 7.27841C61.1117 6.94697 60.6311 6.78125 60.0724 6.78125C59.3811 6.78125 58.8437 6.99432 58.4602 7.42046C58.0767 7.84186 57.8849 8.384 57.8849 9.04688V16H55.7684V8.74858C55.7684 8.15673 55.5838 7.68087 55.2145 7.32103C54.8451 6.96118 54.3646 6.78125 53.7727 6.78125C53.3702 6.78125 52.9986 6.88779 52.6576 7.10085C52.3215 7.30919 52.0492 7.60038 51.8409 7.97443C51.6373 8.34849 51.5355 8.78173 51.5355 9.27415V16H49.4119Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M71.7894 16.2202C70.7146 16.2202 69.7889 15.9905 69.0124 15.5313C68.2406 15.0672 67.644 14.4162 67.2226 13.5781C66.806 12.7353 66.5976 11.7481 66.5976 10.6165C66.5976 9.49906 66.806 8.51421 67.2226 7.66193C67.644 6.80966 68.2312 6.14442 68.984 5.6662C69.7416 5.18798 70.627 4.94887 71.6403 4.94887C72.2558 4.94887 72.8524 5.05067 73.43 5.25426C74.0077 5.45786 74.5261 5.77747 74.9854 6.21307C75.4447 6.64868 75.8069 7.21449 76.0721 7.91051C76.3372 8.6018 76.4698 9.44224 76.4698 10.4318V11.1847H67.7979V9.59375H74.3888C74.3888 9.03504 74.2752 8.54025 74.0479 8.10938C73.8206 7.67377 73.501 7.33049 73.0891 7.07955C72.6819 6.8286 72.2037 6.70313 71.6544 6.70313C71.0579 6.70313 70.537 6.84991 70.0919 7.14347C69.6516 7.43229 69.3107 7.81108 69.0692 8.27983C68.8325 8.74385 68.7141 9.24811 68.7141 9.79262V11.0355C68.7141 11.7647 68.842 12.3849 69.0976 12.8963C69.3581 13.4077 69.7203 13.7983 70.1843 14.0682C70.6483 14.3333 71.1904 14.4659 71.8107 14.4659C72.2132 14.4659 72.5801 14.4091 72.9116 14.2955C73.243 14.1771 73.5295 14.0019 73.7709 13.7699C74.0124 13.5379 74.1971 13.2514 74.3249 12.9105L76.3348 13.2727C76.1739 13.8646 75.885 14.3831 75.4684 14.8281C75.0564 15.2685 74.538 15.6117 73.913 15.858C73.2927 16.0994 72.5849 16.2202 71.7894 16.2202Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M80.9496 9.52273V16H78.826V5.09091H80.8643V6.86648H80.9993C81.2502 6.28883 81.6432 5.82481 82.1782 5.47443C82.718 5.12406 83.3975 4.94887 84.2166 4.94887C84.96 4.94887 85.611 5.10512 86.1697 5.41762C86.7284 5.72538 87.1617 6.18466 87.4694 6.79546C87.7772 7.40625 87.9311 8.16146 87.9311 9.06108V16H85.8075V9.31676C85.8075 8.52605 85.6015 7.90815 85.1896 7.46307C84.7777 7.01326 84.2119 6.78835 83.4922 6.78835C82.9997 6.78835 82.5618 6.89489 82.1782 7.10796C81.7995 7.32103 81.4988 7.63353 81.2763 8.04546C81.0584 8.45265 80.9496 8.94508 80.9496 9.52273Z&quot; fill=&quot;black&quot;></path> <path d=&quot;M95.8714 5.09091V6.79546H89.9126V5.09091H95.8714ZM91.5106 2.47728H93.6342V12.7969C93.6342 13.2088 93.6958 13.5189 93.8189 13.7273C93.942 13.9309 94.1006 14.0706 94.2947 14.1463C94.4936 14.2173 94.709 14.2528 94.941 14.2528C95.1115 14.2528 95.2606 14.241 95.3885 14.2173C95.5163 14.1937 95.6157 14.1747 95.6868 14.1605L96.0703 15.9148C95.9472 15.9621 95.772 16.0095 95.5447 16.0568C95.3175 16.1089 95.0334 16.1373 94.6925 16.142C94.1337 16.1515 93.6129 16.0521 93.13 15.8438C92.647 15.6354 92.2564 15.3134 91.9581 14.8778C91.6598 14.4422 91.5106 13.8954 91.5106 13.2372V2.47728Z&quot; fill=&quot;black&quot;></path> </svg>",
                }}
              />
            </div>
            <div
              layer-name="Priority"
              className="absolute top-0 h-6 text-xl font-medium text-black left-[1029px] w-[69px] max-md:text-lg max-md:left-[650px] max-sm:text-base max-sm:left-[600px]"
            >
              Priority
            </div>
          </div>
          <div className="absolute left-7 bg-neutral-200 h-[5px] top-[151px] w-[1113px] max-md:left-5 max-md:top-[118px] max-md:w-[calc(100%_-_40px)] max-sm:left-[15px] max-sm:top-[98px] max-sm:w-[750px]" />
          <div className="relative top-[174px] max-md:top-[140px] max-sm:min-w-[800px] max-sm:top-[120px]">
            <div
              layer-name="255"
              className="absolute h-6 text-xl font-medium text-black left-[39px] top-[15px] w-[38px] max-md:text-lg max-md:left-[30px] max-sm:text-base max-sm:left-[25px]"
            >
              255
            </div>
            <div
              layer-name="Connecting Snowflake to Atlan - required permissions?"
              className="absolute top-0 text-lg font-medium text-black h-[92px] left-[200px] w-[222px] max-md:text-base max-md:left-[120px] max-md:w-[180px] max-sm:text-sm max-sm:left-[100px] max-sm:w-[150px]"
            >
              Connecting Snowflake to Atlan - required permissions?
            </div>
            <div className="flex absolute justify-center items-center bg-blue-500 rounded-xl h-[49px] left-[537px] top-[5px] w-[130px] max-md:h-10 max-md:left-[350px] max-md:w-[100px] max-sm:w-20 max-sm:h-[35px] max-sm:left-[300px]">
              <div
                layer-name="Connector"
                className="text-lg font-medium text-black max-sm:text-sm"
              >
                Connector
              </div>
            </div>
            <div className="inline-flex absolute justify-end items-center pt-1.5 pr-0 pb-0 pl-4 bg-yellow-500 rounded-xl h-[35px] left-[800px] top-[11px] w-[111px] max-md:h-[30px] max-md:left-[500px] max-md:w-[90px] max-sm:w-20 max-sm:h-[25px] max-sm:left-[450px]">
              <div
                layer-name="Curious"
                className="absolute top-1.5 text-lg font-medium text-black h-[33px] left-[17px] w-[99px] max-sm:text-sm"
              >
                Curious
              </div>
            </div>
            <div
              layer-name="Low"
              className="absolute w-10 h-6 text-xl font-medium text-black left-[1044px] top-[15px] max-md:text-lg max-md:left-[650px] max-sm:text-base max-sm:left-[600px]"
            >
              Low
            </div>
          </div>
          <div className="absolute bg-neutral-200 h-[5px] left-[33px] top-[251px] w-[1108px] max-sm:left-[15px] max-sm:top-[200px] max-sm:w-[750px]" />
          <div className="relative top-[280px] max-sm:min-w-[800px] max-sm:top-[220px]">
            <div
              layer-name="256"
              className="absolute h-6 text-xl font-medium text-black left-[39px] top-[21px] w-[38px] max-sm:text-base max-sm:left-[25px]"
            >
              256
            </div>
            <div
              layer-name="Which connectors automatically capture lineage?"
              className="absolute top-0 text-lg font-medium text-black h-[92px] left-[200px] w-[222px] max-sm:text-sm max-sm:left-[100px] max-sm:w-[150px]"
            >
              Which connectors automatically capture lineage?
            </div>
            <div className="flex absolute top-1 justify-center items-center bg-blue-500 rounded-xl h-[49px] left-[535px] w-[130px] max-sm:w-20 max-sm:h-[35px] max-sm:left-[300px]">
              <div
                layer-name="API/SDK"
                className="text-lg font-medium text-black max-sm:text-sm"
              >
                API/SDK
              </div>
            </div>
            <div className="inline-flex absolute justify-end items-center pt-2 pr-0 pb-0 pl-6 bg-red-600 rounded-xl h-[35px] left-[800px] top-[11px] w-[111px] max-sm:w-20 max-sm:h-[25px] max-sm:left-[450px]">
              <div
                layer-name="Angry"
                className="absolute text-lg font-medium text-black h-[33px] left-[25px] top-[7px] w-[99px] max-sm:text-sm"
              >
                Angry
              </div>
            </div>
            <div
              layer-name="Medium"
              className="absolute top-4 h-6 text-xl font-medium text-black left-[1028px] w-[77px] max-sm:text-base max-sm:left-[600px]"
            >
              Medium
            </div>
          </div>
          <div className="absolute bg-neutral-200 h-[5px] left-[35px] top-[369px] w-[1106px] max-sm:left-[15px] max-sm:top-[300px] max-sm:w-[750px]" />
          <div className="relative top-[398px] max-sm:top-80 max-sm:min-w-[800px]">
            <div
              layer-name="257"
              className="absolute h-6 text-xl font-medium text-black left-[39px] top-[15px] w-[37px] max-sm:text-base max-sm:left-[25px]"
            >
              257
            </div>
            <div
              layer-name="Deployment of Atlan agent for private data lake"
              className="absolute top-0 text-lg font-medium text-black h-[92px] left-[200px] w-[222px] max-sm:text-sm max-sm:left-[100px] max-sm:w-[150px]"
            >
              Deployment of Atlan agent for private data lake
            </div>
            <div className="flex absolute top-1 justify-center items-center bg-blue-500 rounded-xl h-[49px] left-[525px] w-[158px] max-sm:h-[35px] max-sm:left-[300px] max-sm:w-[100px]">
              <div
                layer-name="Sensitive data"
                className="text-lg font-medium text-black max-sm:text-sm"
              >
                Sensitive data
              </div>
            </div>
            <div className="inline-flex absolute justify-end items-center pt-1.5 pr-0 pb-0 pl-6 bg-red-100 rounded-xl h-[35px] left-[800px] top-[9px] w-[111px] max-sm:w-20 max-sm:h-[25px] max-sm:left-[450px]">
              <div
                layer-name="Neutral"
                className="absolute text-lg font-medium text-black h-[33px] left-[22px] top-[5px] w-[99px] max-sm:text-sm"
              >
                Neutral
              </div>
            </div>
            <div
              layer-name="High"
              className="absolute h-6 text-xl font-medium text-black left-[1044px] top-[18px] w-[45px] max-sm:text-base max-sm:left-[600px]"
            >
              High
            </div>
          </div>
          <div className="absolute bg-neutral-200 h-[5px] left-[35px] top-[485px] w-[1145px] max-sm:left-[15px] max-sm:top-[400px] max-sm:w-[750px]" />
        </div>
        <div className="flex absolute flex-col items-center px-1.5 pt-64 pb-72 bg-indigo-500 h-[596px] left-[1270px] top-[244px] w-[60px] max-md:hidden">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=&quot;6:97&quot; layer-name=&quot;Arrow right&quot; data-component-name=&quot;Arrow right&quot; data-variant-name=&quot;Size=48&quot; width=&quot;48&quot; height=&quot;48&quot; viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;arrow-icon&quot; style=&quot;position: absolute; left: 6px; top: 250px&quot;> <path d=&quot;M38 24L10 24M10 24L24 38M10 24L24 10&quot; stroke=&quot;#1E1E1E&quot; stroke-width=&quot;4&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}


