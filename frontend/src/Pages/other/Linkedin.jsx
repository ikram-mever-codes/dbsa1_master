import React, { useEffect } from "react";

const Linkedin = () => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const linkedContainer = document.querySelector(
        ".WidgetBackground__Content-sc-1ho7q3r-2"
      );

      if (linkedContainer) {
        const as = linkedContainer.querySelectorAll("a");
        const fa = Array.from(as).find((a) => {
          return a.textContent === "Free LinkedIn Feed widget";
        });
        if (fa) {
          fa.style.display = "none";
        }
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-center mt-[5rem] pt-[3rem] pb-[3rem]">
      <div className="w-[80%] vsm:w-[90%] flex flex-col gap-[3rem]">
        <div className="text-[30px] font2 font-[600] text-center">
          Latest Developments
        </div>
        <div
          className="elfsight-app-ce3fd1e1-0b38-4666-9157-8273f7368971"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default Linkedin;
