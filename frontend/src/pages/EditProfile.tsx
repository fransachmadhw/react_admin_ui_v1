import React, { ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const modalDelete = React.useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(
    null
  );
  const [preview, setPreview] = React.useState<string | null>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUpload = e.target.files[0];
      setSelectedFile(imageUpload);
      setPreview(URL.createObjectURL(imageUpload));
      console.log('Selected File: ', selectedFile);
    }
  };
  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const [firstName, setFirstName] = React.useState('Frans');
  const [lastName, setLastName] = React.useState('AHW');
  const [nickName, setNickName] = React.useState('Frans');
  const [email, setEmail] = React.useState('franswinata6@gmail.com');
  const [phone, setPhone] = React.useState('081-234-5678');
  const [address, setAddress] = React.useState(
    'Suite 948 Jl. Gajahmada No. 91, Malang, SM 74810'
  );

  return (
    // screen
    <div className="w-full p-0 m-0">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-7 xl:gap-8">
        {/* block 1 */}
        <div className="flex flex-col xl:flex-row items-start justify-between gap-3 xl:gap-0">
          <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
            My Profile
          </h2>
          <div className="w-full xl:w-auto grid grid-cols-2 xl:flex gap-3">
            <button
              onClick={() => navigate('/profile')}
              className="btn btn-block xl:w-auto dark:btn-neutral"
            >
              Discard Changes
            </button>
            <button
              onClick={() => {
                navigate('/profile');
                toast('Gabisa diedit dong!', { icon: '😛' });
              }}
              className="btn btn-block xl:w-auto btn-primary"
            >
              Save Changes
            </button>
          </div>
        </div>
        {/* block 2 */}
        <div className="flex items-center gap-3 xl:gap-8 xl:mb-4">
          {/* Photo */}
          <div className="relative inline-flex">
            <button
              onClick={handleIconClick}
              className="btn btn-circle btn-sm xl:btn-md top-0 right-0 absolute z-[1]"
            >
              <HiOutlinePencil className="text-xs xl:text-lg" />
            </button>
            <div className="avatar">
              <div className="w-24 xl:w-36 2xl:w-48 rounded-full">
                <img
                  src={
                    preview ||
                    'https://avatars.githubusercontent.com/u/74099030?v=4'
                  }
                  alt="foto-cowok-ganteng"
                />
              </div>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileSelect}
          />

          {/* Heading */}
          <div className="flex flex-col items-start gap-1">
            <h3 className="font-semibold text-xl xl:text-3xl">
              {firstName} {lastName}
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
          <div className="w-full grid xl:grid-cols-3 gap-3 xl:gap-5 2xl:gap-20 xl:text-base">
            {/* column 1 */}
            <div className="w-full flex flex-col sm:grid sm:grid-cols-3 xl:flex xl:flex-col gap-3 xl:gap-5">
              {/* row 1 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">
                    First Name*
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={firstName}
                  onChange={(element) =>
                    setFirstName(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
              {/* row 2 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">
                    Last Name*
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={lastName}
                  onChange={(element) =>
                    setLastName(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
              {/* row 3 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">Nickname</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={nickName}
                  onChange={(element) =>
                    setNickName(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
            </div>
            {/* column 2 */}
            <div className="w-full flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-col gap-3 xl:gap-5">
              {/* row 1 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">Email*</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={email}
                  onChange={(element) =>
                    setEmail(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
              {/* row 2 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">Phone</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={phone}
                  onChange={(element) =>
                    setPhone(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
              {/* row 3 */}
              <div className="w-full grid sm:col-span-full xl:grid-cols-3 2xl:grid-cols-4 xl:items-start gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap xl:mt-3">
                  <span className="whitespace-nowrap">Address</span>
                </div>
                <textarea
                  className="textarea textarea-bordered w-full col-span-2 2xl:col-span-3"
                  placeholder="Address"
                  value={address}
                  onChange={(element) =>
                    setAddress(element.target.value)
                  }
                ></textarea>
                {/* <input
                  type="text"
                  placeholder="Type here"
                  value={address}
                  onChange={(element) =>
                    setAddress(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                /> */}
              </div>
            </div>
            {/* column 3 */}
            <div className="w-full flex flex-col sm:grid sm:grid-cols-3 xl:flex xl:flex-col gap-3 xl:gap-5">
              {/* row 1 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">Password</span>
                </div>
                <div className="btn btn-disabled col-span-2">
                  Change Password
                </div>
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
                className="btn btn-block btn-disabled flex-nowrap justify-start"
              >
                <img
                  className="w-6 opacity-20"
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
                className="btn btn-block btn-disabled justify-start"
              >
                <img
                  className="dark:hidden w-6 opacity-20"
                  src="/icons8-apple-black.svg"
                  alt="apple"
                />
                <img
                  className="hidden dark:block w-6 opacity-20"
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
                className="btn btn-ghost btn-disabled text-error text-xs xl:text-sm"
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
            className="btn btn-disabled text-error text-xs xl:text-sm"
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

export default EditProfile;
