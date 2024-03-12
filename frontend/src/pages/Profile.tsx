import React from 'react';
import toast from 'react-hot-toast';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const modalDelete = React.useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  return (
    // screen
    <div className="w-full p-0 m-0">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-10 xl:gap-8">
        {/* block 1 */}
        <div className="flex items-start justify-between">
          <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
            My Profile
          </h2>
          <button
            onClick={() => navigate('/profile/edit')}
            className="btn text-xs xl:text-sm dark:btn-neutral"
          >
            <HiOutlinePencil className="text-lg" /> Edit My Profile
          </button>
        </div>
        {/* block 2 */}
        <div className="flex items-center gap-3 xl:gap-8 xl:mb-4">
          <div className="avatar">
            <div className="w-24 xl:w-36 2xl:w-48 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/74099030?v=4"
                alt="foto-cowok-ganteng"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <h3 className="font-semibold text-xl xl:text-3xl">
              Frans AHW
            </h3>
            <span className="font-normal text-base">Supervisor</span>
          </div>
        </div>
        {/* block 3 */}
        <div className="w-full flex flex-col items-stretch gap-3 xl:gap-7">
          {/* heading */}
          <div className="flex items-center w-full gap-3 xl:gap-5">
            <h4 className="font-semibold text-lg xl:text-2xl whitespace-nowrap">
              Basic Information
            </h4>
            <div className="w-full h-[2px] bg-base-300 dark:bg-slate-700 mt-1"></div>
          </div>
          {/* grid */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-5 xl:gap-5 xl:text-base">
            {/* column 1 */}
            <div className="w-full grid grid-cols-3 xl:flex gap-5 xl:gap-8">
              {/* column 1 label */}
              <div className="col-span-1 flex flex-col items-start xl:gap-5">
                <span>First Name*</span>
                <span>Last Name*</span>
                <span>Nickname</span>
              </div>
              {/* column 1 text */}
              <div className="col-span-2 flex flex-col items-start xl:gap-5">
                <span className="font-semibold">Frans</span>
                <span className="font-semibold">AHW</span>
                <span className="font-semibold">Frans</span>
              </div>
            </div>
            {/* column 2 */}
            <div className="w-full grid grid-cols-3 xl:flex gap-5 xl:gap-8">
              {/* column 2 label */}
              <div className="col-span-1 flex flex-col items-start xl:gap-5">
                <span>Email*</span>
                <span>Phone</span>
                <span>Address</span>
              </div>
              {/* column 2 text */}
              <div className="col-span-2 flex flex-col items-start xl:gap-5">
                <span className="font-semibold">
                  franswinata6@gmail.com
                </span>
                <span className="font-semibold">081-234-5678</span>
                <span className="font-semibold">
                  Suite 948 Jl. Gajahmada No. 91, Malang, SM 74810
                </span>
              </div>
            </div>
            {/* column 3 */}
            <div className="w-full grid grid-cols-3 xl:flex gap-5 xl:gap-8">
              {/* column 3 label */}
              <div className="col-span-1 flex flex-col items-start xl:gap-5">
                <span>Password</span>
              </div>
              {/* column 3 text */}
              <div className="col-span-2 flex flex-col items-start xl:gap-5">
                <span className="link no-underline link-primary font-semibold">
                  Change Password
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* block 4 */}
        <div className="w-full flex flex-col items-stretch gap-6 xl:gap-7">
          {/* heading */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center w-full gap-3 xl:gap-5">
              <h4 className="font-semibold text-lg xl:text-2xl whitespace-nowrap">
                Account Integrations
              </h4>
              <div className="w-full h-[2px] bg-base-300 dark:bg-slate-700 mt-1"></div>
            </div>
            <span className="text-sm xl:text-sm text-neutral-400 dark:text-neutral-content">
              Authorize faster and easier with your external service
              account.
            </span>
          </div>
          {/* services block */}
          <div className="grid grid-cols-3 sm:grid-cols-6 xl:grid-cols-3 xl:flex gap-5">
            {/* column 1 */}
            <div className="col-span-2 flex flex-col items-start gap-5 xl:w-[240px]">
              <button
                onClick={() =>
                  toast('Gaboleh', {
                    icon: '😠',
                  })
                }
                className="btn btn-block flex-nowrap justify-start dark:btn-neutral"
              >
                <img
                  className="w-6"
                  src="/icons8-microsoft.svg"
                  alt="microsoft"
                />
                <span className="text-start whitespace-nowrap text-xs xl:text-sm">
                  Connect with Microsoft
                </span>
              </button>
              <div className="px-4 gap-2 min-h-12 text-sm font-semibold flex items-center justify-start">
                <img
                  className="w-6"
                  src="/icons8-google.svg"
                  alt="google"
                />
                <span className="text-start whitespace-nowrap text-xs xl:text-sm">
                  Connected with Google
                </span>
              </div>
              <button
                onClick={() =>
                  toast('Gaboleh', {
                    icon: '😠',
                  })
                }
                className="btn btn-block justify-start dark:btn-neutral"
              >
                <img
                  className="dark:hidden w-6"
                  src="/icons8-apple-black.svg"
                  alt="apple"
                />
                <img
                  className="hidden dark:block w-6"
                  src="/icons8-apple-white.svg"
                  alt="apple"
                />
                <span className="text-start whitespace-nowrap text-xs xl:text-sm">
                  Connect with Apple
                </span>
              </button>
            </div>
            {/* column 2 */}
            <div className="col-span-1 flex flex-col items-start gap-5">
              <button className="btn btn-ghost text-error"></button>
              <button
                onClick={() =>
                  toast('Gaboleh', {
                    icon: '😠',
                  })
                }
                className="btn btn-ghost text-error text-xs xl:text-sm"
              >
                Disconnect
              </button>
              <button className="btn btn-ghost text-error"></button>
            </div>
          </div>
        </div>
        {/* block 5 */}
        <div className="w-full flex justify-start items-center mt-10">
          <button
            className="btn dark:btn-neutral text-error dark:text-error text-xs xl:text-sm"
            onClick={() => modalDelete.current?.showModal()}
          >
            <HiOutlineTrash className="text-lg" />
            Delete My Account
          </button>
          <dialog
            id="modal_delete"
            className="modal"
            ref={modalDelete}
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg dark:text-white">
                Action Confirmation!
              </h3>
              <p className="py-4">
                Do you want to delete your account?
              </p>
              <div className="modal-action mx-0 flex-col items-stretch justify-stretch gap-3">
                <button
                  onClick={() =>
                    toast('Lancang kamu ya!', {
                      icon: '😠',
                    })
                  }
                  className="btn btn-error btn-block text-base-100 dark:text-white"
                >
                  Yes, I want to delete my account
                </button>
                <form method="dialog" className="m-0 w-full">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="m-0 btn btn-block dark:btn-neutral">
                    No, I don't think so
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
