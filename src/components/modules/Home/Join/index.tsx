"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import UploadIcon from "@icons/pages/home/join/UploadIcon.svg";
import dashedVector from "@icons/pages/home/join/Vector_1.svg";
import plan from "@icons/pages/home/join/Group.svg";

import pdfLogo from "@images/pages/home/join/pdf_318-148750.png";
import ptsLogo from "@images/pages/home/join/PSD_file_icon.png";
import aiLogo from "@images/pages/home/join/Ai-file-logo.png";
import wordLogo from "@images/pages/home/join/docx_icon.svg.png";
import powerpointLogo from "@images/pages/home/join/pptx_icon.png";

type variantsProps = {
  exit: {
    y: number;
    opacity: number;
  };
  show: {
    y: number;
    opacity: number;
    transition: {
      type: string;
      bounce: number;
      duration: number;
      delay: number;
    };
  };
};
const variantsTop: variantsProps = {
  exit: {
    y: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.5,
    },
  },
};
const variantsBottom: variantsProps = {
  exit: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.5,
    },
  },
};

type TResume = {
  fullName: string;
  email: string;
  studentId: string;
};
function Join() {
  const [selectedProfileFile, setSelectedProfileFile] = useState<File | null>(
    null
  );
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [uploadData, setUploadData] = useState<TResume>({
    fullName: "",
    email: "",
    studentId: "",
  });
  const [fullNameAlert, setFullNameAlert] = useState<string>("");
  const [emailAlert, setEmailAlert] = useState<string>("");
  const [sidAlert, setSidAlert] = useState<string>("");
  const [resumeFileAlert, setResumeFileAlert] = useState<string>("");
  const [isPassed, setIsPassed] = useState<boolean>(false);

  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleCheckBeforeUpload = (): boolean => {
    if (uploadData.fullName.trim().length == 0) {
      setFullNameAlert("Yêu cầu nhập Họ và Tên!");
      setIsPassed(false);
    } else setIsPassed(true);
    if (uploadData.email.trim().length == 0) {
      setEmailAlert("Yêu cầu nhập Email!");
      setIsPassed(false);
    } else setIsPassed(true);
    if (uploadData.studentId.trim().length == 0) {
      setSidAlert("Yêu cầu nhập mã số sinh viên!");
      setIsPassed(false);
    } else setIsPassed(true);
    if (selectedProfileFile == null) {
      setResumeFileAlert("Yêu cầu CV!");
      setIsPassed(false);
      return false;
    } else setIsPassed(true);
    return true;
  };

  const handleSubmit = async () => {

  };
  const handleSelectFile = () => {
  };

  const handleOnChangeSelectFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file && isValidFileType(file)) {
      setSelectedProfileFile(file);
      setResumeFileAlert("");
    } else {
      setSelectedProfileFile(null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    const file = event.dataTransfer.files[0];
    if (file && isValidFileType(file)) {
      setSelectedProfileFile(file);
      setResumeFileAlert("");
    } else {
      setSelectedProfileFile(null);
    }
    setIsDragging(false);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const isValidFileType = (file: File) => {
    const acceptedTypes = [
      // 'image/png',
      // 'image/jpeg',
      // 'image/gif',
      // 'video/mp4',
      "application/pdf",
      // 'image/vnd.adobe.photoshop',
      // 'application/illustrator',
      // 'application/msword',
      // 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      // 'application/vnd.ms-powerpoint',
      // 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ];
    return acceptedTypes.includes(file.type);
  };

  const handleDelectItem = () => {
    setSelectedProfileFile(null);
  };
  const handleDisplayTypeOfResume = (file: File) => {
    if (file.type === "application/pdf") return pdfLogo;
    if (file.type === "image/vnd.adobe.photoshop") return ptsLogo;
    if (file.type === "application/illustrator") return aiLogo;
    if (
      file.type === "application/msword" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
      return wordLogo;
    if (
      file.type === "application/vnd.ms-powerpoint" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    )
      return powerpointLogo;
    if (file.type === "video/mp4") return wordLogo;
    return "";
  };

  const handleOpenViewTab = (file: File) => {
    const url = URL.createObjectURL(file);
    window.open(url, "_blank");
  };

  const handleGetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const nameRegex = /^(?:\p{Lu}\p{L}*[\s']?)+$/u;
    const isValidName = nameRegex.test(value.trim());
    if (isValidName) {
      setUploadData((prev) => ({
        ...prev,
        fullName: value.trim(),
      }));
      setFullNameAlert("");
    } else {
      setFullNameAlert("Invalid name!");
    }
  };

  const handleGetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(value.trim());
    if (isValidEmail) {
      setUploadData((prev) => ({
        ...prev,
        email: value.trim(),
      }));
      setEmailAlert("");
    } else {
      setEmailAlert("Invalid email!");
    }
  };
  const handleGetStudentId = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const studentIdRegex = /^[A-Za-z]{2}\d{6}$/;
    const isValidStudentId = studentIdRegex.test(value.trim());
    if (isValidStudentId) {
      setUploadData((prev) => ({
        ...prev,
        studentId: value.trim(),
      }));
      setSidAlert("");
    } else {
      setSidAlert("Mã số sinh viên không hợp lệ");
    }
  };

  return (
    <section id="joinClub" className="h-fit flex justify-center ">
      <div className="max-w-[1440px] w-[100%] h-fit py-[40px] md:py-[60px] lg:py-[60px] xl:py-[60px] px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px]">
        <div className="h-fit md:h-fit lg:h-[fit] xl:h-[fit] w-[100%] flex flex-col items-center relative">
          <motion.div
            initial="exit"
            custom={-1}
            whileInView={"show"}
            variants={variantsTop}
            className="md:max-w-[500px] w-[320px] md:w-[500px] lg:w-[650px] xl:w-[650px] flex flex-col justify-center items-center"
          >
            <h1 className="font-[700] text-[40px] leading-[40px] text-primary">
              JOIN WITH US
            </h1>
            <p className="text-center mt-[12px] font-[400] text-[16px] md:text-[16px] lg:text-[19px] xl:text-[19px] leading-[23px]">
              Dù bạn là người mới bắt đầu hay lập trình viên giàu kinh nghiệm,
              hãy tham gia cùng chúng tôi và khai phá tiềm năng vô tận của bản
              thân!
            </p>
          </motion.div>
          <motion.div
            initial="exit"
            custom={1}
            whileInView={"show"}
            variants={variantsBottom}
            className="max-w-[320px] md:max-w-[320px] lg:max-w-[462px] xl:max-w-[462px] w-[100%] flex flex-col mt-[32px] md:mt-[32px] lg:mt-[40px] xl:mt-[40px]"
          >
            <div className="w-full ">
              <input
                onChange={(e) => handleGetName(e)}
                type="text"
                placeholder="Họ và tên"
                className="w-full outline-none border-b-2 border-[#676767] placeholder:text-[#676767] h-[32px]"
              />
              {fullNameAlert.length > 0 ? (
                <p className="text-[12px] text-red-600">{fullNameAlert}</p>
              ) : null}
            </div>
            <div className="w-full ">
              <input
                onChange={(e) => handleGetEmail(e)}
                type="email"
                placeholder="Email"
                className="w-full outline-none border-b-2 border-[#676767] placeholder:text-[#676767] h-[32px] mt-[16px]"
              />
              {emailAlert.length > 0 ? (
                <p className="text-[12px] text-red-600">{emailAlert}</p>
              ) : null}
            </div>
            <div className="w-full ">
              <input
                onChange={(e) => handleGetStudentId(e)}
                type="text"
                placeholder="Mã số sinh viên"
                className="w-full outline-none border-b-2 border-[#676767] placeholder:text-[#676767] h-[32px] mt-[16px]"
              />
              {sidAlert.length > 0 ? (
                <p className="text-[12px] text-red-600">{sidAlert}</p>
              ) : null}
            </div>
            <div className="w-[100%] flex flex-col items-center mt-[16px]">
              <h3 className="font-[700] text-[20px] leading-[24px] text-[#0f0f0f]">
                Upload CV
              </h3>
              <div
                className="w-[320px] md:w-[320px] lg:w-[462px] xl:w-[462px] h-[175px] md:h-[175px] lg:h-[175px] xl:h-[157px] xl:py-[20px] py-[16px]  px-[10px] md:px-[16px] lg:px-[20px] xl:px-[20px] borderStrock flex flex-col items-center mt-[12px] relative"
                onDrop={(e) => handleDropFile(e)}
                onDragLeave={(e) => handleDragLeave(e)}
                onDragOver={(e) => handleDragOver(e)}
              >
                {selectedProfileFile ? (
                  <>
                    <div className="absolute w-[100%] h-[100%] top-0 right-0 left-0 p-[20px] flex flex-row justify-between">
                      <div className="md:w-[calc(100%-80px)] lg:w-[calc(100%-140px)] xl:w-[calc(100%-140px)] h-full mr-[20px] flex flex-row justify-between">
                        <Image
                          loading="lazy"
                          src={
                            selectedProfileFile.type === "image/png" ||
                            selectedProfileFile.type === "image/jpeg" ||
                            selectedProfileFile.type === "image/gif"
                              ? URL.createObjectURL(selectedProfileFile)
                              : handleDisplayTypeOfResume(selectedProfileFile)
                          }
                          width={100}
                          height={117}
                          alt="file"
                          className="w-[110px] h-[100%] rounded-lg cursor-pointer hidden md:hidden lg:block xl:block object-cover"
                          onClick={() => handleOpenViewTab(selectedProfileFile)}
                        />
                        <div className="w-[140px] flex flex-col justify-between">
                          <div className="h-fit">
                            <h3 className="font-[700] text-primary">
                              File name:{" "}
                            </h3>
                            <h3 className="font-[400] text-primary whitespace-nowrap overflow-hidden text-ellipsis">
                              {selectedProfileFile.name}
                            </h3>
                          </div>
                          <div className="h-fit">
                            <button
                              className=" w-full py-[14px] px-[10px] border-2 border-primary border-opacity-1 font-[400] text-primary hover:bg-primary hover:text-white hover:font-bold"
                              onClick={handleDelectItem}
                              style={{
                                transitionDuration: "0.3s",
                              }}
                            >
                              Cancle upload
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="hidden"
                          multiple
                          ref={fileInputRef}
                          onChange={handleOnChangeSelectFile}
                        />
                        <label
                          htmlFor="file"
                          className="w-[120px] md:w-[120px] lg:w-[140px] xl:w-[140px] h-[100%] flex flex-col justify-center cursor-pointer items-center border-2 border-primary"
                        >
                          {isDragging ? (
                            <>
                              <div className="p-[20px] flex justify-center items-center">
                                <h4 className="font-[700] text-[18px] text-center text-primary ">
                                  Drag <br />&<br /> drop
                                </h4>
                              </div>
                            </>
                          ) : (
                            <>
                              <Image
                                loading="lazy"
                                src={UploadIcon}
                                width={70}
                                height={60}
                                alt="icon"
                                className="mt-[-1px] pointer-events-none"
                              />
                              <h4 className="font-[700] text-primary ">
                                Add other file
                              </h4>
                            </>
                          )}
                        </label>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      loading="lazy"
                      src={UploadIcon}
                      width={70}
                      height={60}
                      alt="icon"
                      className=""
                    />
                    <h4 className="font-[700] text-[16px] leading-[19px] text-[#0f0f0f] mt-[10px] ">
                      Kéo và thả files hoặc
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="hidden"
                        multiple
                        ref={fileInputRef}
                        onChange={handleOnChangeSelectFile}
                      />
                      <label
                        htmlFor="file"
                        className="text-primary cursor-pointer underline decoration-[2px] pl-[5px]"
                        onClick={() => handleSelectFile()}
                      >
                        Browse
                      </label>
                    </h4>
                    <p className="font-[400] text-[12px] leading-[18px] text-[#676767] mt-[10px] text-center">
                      Yêu cầu upload PDF files, các loại files khác sẽ không hợp
                      lệ.
                    </p>
                  </>
                )}
              </div>
              {resumeFileAlert.length > 0 ? (
                <p className="text-[12px] text-red-600">{resumeFileAlert}</p>
              ) : null}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-[100%] bg-primary opacity-[0.5] py-[8px] md:py-[8px] lg:py-[12px] xl:py-[12px] lg:px-[174px] xl:px-[174px] mt-[14px] md:mt-[14px] lg:mt-[32px] xl:mt-[32px] hover:opacity-[1] transition flex flex-row gap-2 items-center justify-center"
              >
                <div className="flex flex-row gap-2">
                  <p className="font-[700] text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px] text-[#FFFFFF] leading-[18px] whitespace-nowrap">
                    UPLOAD FILES
                  </p>
                </div>
              </button>
            </div>
          </motion.div>
          <div className="w-[100%] h-[606px] z-[-1] absolute bottom-0 left-0 right-0 hidden md:hidden lg:hidden xl:block">
            <Image
              loading="lazy"
              src={plan}
              alt="plan"
              className="absolute  z-[2] left-[80px] top-[26px]"
            />
            <Image
              loading="lazy"
              src={dashedVector}
              alt="vector"
              className="z-[1 ] absolute bottom-0 right-0 left-0"
            />
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}

export default Join;
