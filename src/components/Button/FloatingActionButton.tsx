export default function FloatingActionButton({
  handleAddToDo,
}: {
  handleAddToDo: () => void;
}) {
  return (
    <div
      className="fixed right-5 bottom-5"
      onClick={() => {
        handleAddToDo();
      }}
    >
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M74.1647 37.1671C74.1647 38.0182 74.3824 38.8594 74.3231 39.6957C74.2637 40.5319 74.4022 41.4127 74.2884 42.244C74.1746 43.0753 74.0707 43.9413 73.9025 44.7627C73.7342 45.5841 73.279 46.361 73.0514 47.1725C72.8237 47.984 72.6258 48.8153 72.3438 49.607C72.0617 50.3987 71.9875 51.2993 71.651 52.0712C71.3145 52.8431 70.5723 53.4369 70.1863 54.1841C69.8004 54.9313 69.3253 55.629 68.8849 56.3465C68.4445 57.064 68.0635 57.8161 67.5786 58.5089C67.0937 59.2016 66.777 60.023 66.2426 60.6811C65.7082 61.3393 64.8274 61.6807 64.2484 62.2992C63.6695 62.9177 63.2786 63.7045 62.6601 64.2785C62.0415 64.8525 61.6209 65.6739 60.9678 66.2083C60.3146 66.7427 59.3942 66.9407 58.7015 67.4305C58.0087 67.9204 57.2615 68.2965 56.5391 68.7369C55.8167 69.1773 55.1585 69.7117 54.4064 70.1026C53.6543 70.4935 52.912 70.8844 52.1352 71.2209C51.3583 71.5574 50.4528 71.5227 49.6561 71.8048C48.8594 72.0868 48.1024 72.4184 47.2859 72.646C46.4694 72.8736 45.7915 73.6356 44.9602 73.8088C44.1289 73.982 43.2481 73.8632 42.4069 73.9771C41.5657 74.0909 40.7394 74.3234 39.8932 74.3779C39.0471 74.4323 38.2009 74.1552 37.3498 74.1552C36.4987 74.1552 35.6378 74.4768 34.8015 74.4174C33.9652 74.3581 33.1142 74.1601 32.2779 74.0463C31.4417 73.9325 30.6747 73.4129 29.8483 73.2447C29.022 73.0765 28.1461 73.1161 27.3396 72.8884C26.533 72.6608 25.5879 72.7796 24.7912 72.4975C23.9946 72.2155 23.2424 71.7602 22.4705 71.4238C21.6986 71.0873 21.1147 70.3302 20.3675 69.9442C19.6203 69.5583 18.6752 69.5038 17.9528 69.0635C17.2303 68.6231 16.6563 67.9501 15.9636 67.4652C15.2708 66.9802 14.6226 66.4409 13.9694 65.9065C13.3163 65.3721 12.381 65.1445 11.7625 64.5655C11.144 63.9866 10.7085 63.2047 10.1345 62.5862C9.56055 61.9677 9.18944 61.1661 8.65998 60.5129C8.13051 59.8597 7.51693 59.2659 7.02706 58.5732C6.53718 57.8804 6.02751 57.2075 5.58712 56.485C5.14673 55.7626 4.69149 55.0451 4.30058 54.293C3.90967 53.5408 3.4099 52.8332 3.07342 52.0564C2.73694 51.2795 2.66271 50.3987 2.38067 49.5971C2.09862 48.7955 2.17779 47.9048 1.94522 47.0883C1.71265 46.2719 1.35638 45.5148 1.18319 44.6835C1.01 43.8522 0.376631 43.11 0.262821 42.2638C0.149012 41.4177 0.06984 40.5666 0.0104612 39.7204C-0.0489177 38.8743 0.163856 38.0182 0.163856 37.1671C0.163856 36.316 0.62899 35.4946 0.683421 34.6584C0.737852 33.8221 0.213339 32.9117 0.327148 32.0803C0.440958 31.249 0.777438 30.4276 0.945677 29.6062C1.11392 28.7848 1.5939 28.0277 1.82151 27.2162C2.04913 26.4047 2.18274 25.5685 2.46479 24.7718C2.74683 23.9751 2.93487 23.1389 3.27135 22.367C3.60783 21.595 4.03832 20.8578 4.42429 20.1106C4.81025 19.3634 5.05766 18.5222 5.49311 17.7997C5.92855 17.0773 6.79944 16.6419 7.28931 15.9541C7.77919 15.2662 8.25917 14.5933 8.79358 13.9401C9.32799 13.287 9.49623 12.3122 10.0702 11.6986C10.6442 11.085 11.5102 10.7485 12.1287 10.1696C12.7472 9.59062 13.0342 8.63066 13.6923 8.09626C14.3504 7.56185 15.0432 7.04228 15.7359 6.55735C16.4287 6.07243 17.1907 5.65678 17.9132 5.21638C18.6356 4.77599 19.4075 4.39498 20.1597 4.00407C20.9118 3.61315 21.758 3.41028 22.5348 3.0738C23.3117 2.73732 24.1331 2.52949 24.9347 2.24744C25.7363 1.96539 26.4588 1.45572 27.2752 1.22811C28.0917 1.00049 29.0071 1.22316 29.8384 1.04997C30.6697 0.876781 31.4021 0.174131 32.2433 0.0553737C33.0845 -0.0633839 33.9554 0.0553737 34.8015 0.000943108C35.6476 -0.0534875 36.4938 0.124649 37.3449 0.124649C38.196 0.124649 39.0223 0.327527 39.8635 0.386905C40.7047 0.446284 41.536 0.515559 42.3723 0.629369C43.2085 0.743178 44.0695 0.693696 44.8959 0.861936C45.7223 1.03018 46.5684 1.15883 47.375 1.38645C48.1815 1.61407 48.9831 1.92086 49.7749 2.20291C50.5666 2.48496 51.3237 2.87587 52.0956 3.21235C52.8675 3.54883 53.6048 3.95953 54.352 4.35044C55.0992 4.74135 55.7523 5.28071 56.4698 5.7211C57.1873 6.1615 58.0236 6.41386 58.7114 6.90373C59.3992 7.39361 59.9633 8.03688 60.6164 8.57129C61.2696 9.1057 61.9129 9.63021 62.5314 10.2092C63.1499 10.7881 64.0208 11.1048 64.5998 11.7233C65.1787 12.3418 65.8269 12.9158 66.3613 13.569C66.8958 14.2222 67.3262 14.9793 67.8112 15.6671C68.2961 16.3549 68.5584 17.201 68.9987 17.9235C69.4391 18.6459 69.6222 19.497 70.0082 20.2442C70.3941 20.9914 71.2254 21.5258 71.5619 22.3026C71.8984 23.0795 72.3685 23.8168 72.6506 24.6184C72.9326 25.42 72.5318 26.4245 72.7594 27.241C72.987 28.0574 73.6006 28.765 73.7688 29.5963C73.9371 30.4276 73.6897 31.3134 73.8035 32.1546C73.9173 32.9958 74.5507 33.7677 74.6051 34.6188C74.6595 35.4699 74.1647 36.316 74.1647 37.1671Z"
          fill="rgb(var(--Brand-White))"
        />
        <path
          d="M54.998 37.1118C54.9771 37.787 54.9436 38.5 54.5006 38.9445C54.0408 39.4059 53.3009 39.4352 52.5987 39.4352C51.3907 39.4352 51.3907 39.6407 50.1786 39.6407C48.9664 39.6407 48.9706 39.5359 47.7626 39.5359C46.5546 39.5359 46.5546 39.6156 45.3424 39.6156C44.1302 39.6156 44.1303 39.431 42.9223 39.431C41.7143 39.431 41.7101 39.582 40.5021 39.582C40.0465 39.582 39.7372 39.9553 39.7372 40.4124C39.7372 41.6119 39.5867 41.6119 39.5867 42.8155C39.5867 44.0192 39.8333 44.015 39.8333 45.2186C39.8333 46.4223 39.5909 46.4223 39.5909 47.6217C39.5909 48.8212 39.6787 48.8254 39.6787 50.029C39.6787 51.2327 39.6787 51.2327 39.6787 52.4363C39.6787 53.1535 39.3401 53.7868 38.8719 54.2774C38.4038 54.7681 37.7893 55.0198 37.062 54.9988C36.3891 54.9778 35.9042 54.6842 35.4611 54.2397C35.0013 53.7784 34.5708 53.2667 34.5708 52.5579C34.5708 51.3459 34.458 51.3459 34.458 50.1297C34.458 48.9134 34.6837 48.9176 34.6837 47.7056C34.6837 46.4936 34.4454 46.4936 34.4454 45.2773C34.4454 44.0611 34.6502 44.0611 34.6502 42.8491C34.6502 41.637 34.621 41.6328 34.621 40.4208C34.621 39.9637 34.2281 39.7036 33.7725 39.7036C32.5728 39.7036 32.5728 39.5443 31.3774 39.5443C30.1819 39.5443 30.1819 39.5065 28.9823 39.5065C27.7827 39.5065 27.7827 39.5023 26.5872 39.5023C25.3918 39.5023 25.3876 39.6785 24.1879 39.6785C22.9883 39.6785 22.9883 39.6701 21.7887 39.6701C21.0948 39.6701 20.4553 39.3094 19.9704 38.8691C19.4856 38.4287 19.0174 37.8206 19.0007 37.1118C18.984 36.403 19.2724 35.623 19.7322 35.1491C20.192 34.6752 20.9569 34.3229 21.6675 34.3229C22.8755 34.3229 22.8755 34.6542 24.0876 34.6542C25.2998 34.6542 25.2956 34.3606 26.5036 34.3606C27.7116 34.3606 27.7116 34.6668 28.9238 34.6668C30.1359 34.6668 30.1359 34.4822 31.3439 34.4822C32.5519 34.4822 32.5561 34.5116 33.7641 34.5116C34.2197 34.5116 34.5708 34.1258 34.5708 33.6686C34.5708 32.465 34.7547 32.465 34.7547 31.2571C34.7547 30.0493 34.6837 30.0535 34.6837 28.8498C34.6837 27.6462 34.5666 27.6462 34.5666 26.4383C34.5666 25.2305 34.6461 25.2305 34.6461 24.0268C34.6461 22.8232 34.6252 22.819 34.6252 21.6153C34.6252 21.0114 34.8592 20.4872 35.2062 20.0259C35.5531 19.5645 35.9878 19.1787 36.5813 19.0529C37.3923 18.8809 38.107 19.1451 38.6755 19.6023C39.2439 20.0594 39.7539 20.7304 39.7539 21.5357C39.7539 22.7477 39.8166 22.7477 39.8166 23.9597C39.8166 25.1718 39.7121 25.1718 39.7121 26.3838C39.7121 27.5958 39.6452 27.5958 39.6452 28.8121C39.6452 30.0283 39.6285 30.0283 39.6285 31.2403C39.6285 32.4524 39.7706 32.4566 39.7706 33.6686C39.7706 34.1258 40.0423 34.5074 40.4979 34.5074C41.6934 34.5074 41.6934 34.6332 42.893 34.6332C44.0926 34.6332 44.0884 34.6626 45.2881 34.6626C46.4877 34.6626 46.4877 34.5242 47.6832 34.5242C48.8786 34.5242 48.8828 34.6332 50.0824 34.6332C51.2821 34.6332 51.2821 34.4906 52.4817 34.4906C53.1964 34.4906 53.9029 34.7548 54.3919 35.2246C54.881 35.6943 55.0189 36.3905 54.998 37.1202V37.1118Z"
          fill="rgb(var(--Brand-Black))"
        />
      </svg>
    </div>
  );
}
