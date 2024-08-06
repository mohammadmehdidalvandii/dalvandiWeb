import React from "react";

function WorkCard() {
  return (
    <div className="block bg-white p-3 rounded-md text-back">
      <img src="/assets/images/work-1.png" alt="" className="block" />
      <h6 className="block text-xl my-3">سایت آموزشی Eduport</h6>
      <div className="flex gap-6">
        <button className="flex items-center justify-center w-[130px] h-10 bg-green-700 text-white rounded-md ease-out duration-300 hover:bg-green-900">
          ویرایش
        </button>
        <button className="flex items-center justify-center w-[130px] h-10 bg-back text-white rounded-md ease-out duration-300 hover:bg-success">
          جزئیات
        </button>
        <button className="flex items-center justify-center w-[130px] h-10 bg-primary-default text-white rounded-md ease-out duration-300 hover:bg-primary-100">
          حذف
        </button>
      </div>
    </div>
  );
}

export default WorkCard;
