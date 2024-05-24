"use client";

import { setStep } from "@/redux/slice/changeSlice";
import { setRecoveryHash } from "@/redux/slice/signUpSlice";
import { Input, Button } from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Step1() {
  const recoveryHash = useSelector((state) => state.change.recoveryHash);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-gray-200 w-full p-4 py-2 rounded-lg relative overflow-hidden">
        <p className="text-lg font-medium z-20">Info</p>
        <p className="text-xs z-20 relative w-[85%] font-light">
          Change your recovery email address to secure your account. You will be
          required to verify your new email address as well as your old email
          address.
        </p>

        <Image
          src="/ShieldIcon.png"
          alt="Fusion Gas"
          width={150}
          height={50}
          className="absolute -top-2 -right-6 z-10 opacity-60"
        />
      </div>

      <Input
        label="Enter your email address"
        placeholder="abc@xyz.com"
        className="font-outfit placeholder:opacity-100"
        containerProps={{
          className: "mt-2",
        }}
        size="lg"
        shrink={true}
        disabled={recoveryHash ? true : false}
      />

      {recoveryHash && (
        <p
          className="-mt-2 text-left w-full text-xs text-gray-500 hover:cursor-pointer hover:underline"
          onClick={() => {
            dispatch(setRecoveryHash(null));
          }}
        >
          Clear Email
        </p>
      )}

      {!recoveryHash && (
        <Button
          color="black"
          size="sm"
          className="rounded-lg font-outfit normal-case w-full py-3 mt-1 font-light flex items-center justify-center"
          onClick={() => {
            dispatch(setStep(1));
          }}
        >
          Verify Email
          <ChevronRight size={16} className="-mr-2 ml-2" />
        </Button>
      )}

      {recoveryHash && (
        <Button
          color="black"
          size="sm"
          className="rounded-lg font-outfit normal-case w-full py-3 mt-1 font-light flex items-center justify-center"
          onClick={() => {
            dispatch(setStep(1));
          }}
        >
          Next
          <ChevronRight size={16} className="-mr-2 ml-2" />
        </Button>
      )}
    </>
  );
}
