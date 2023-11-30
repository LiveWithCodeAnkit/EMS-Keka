import { useToast } from "@chakra-ui/react";

export const useToastMessages = () => {
  const toast = useToast({ position: 'top-right'});
  const notifyWarn = (message: string) => {
    // toast.warn(message, {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  };

  const notifySuccess = (message: string,title:string) => {
    const examplePromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(200), 5000);
    });
    toast.promise(examplePromise, {
     
      success: { title, description: message },
      error: { title: "Promise rejected", description: "Something wrong" },
      loading: { title, description: "Please wait" },
    });
  };

  return {
    Success: notifySuccess,
    Warn: notifyWarn,
  };
};
