import React from "react";

function WorkCard({title, img ,handlerShowDetails}) {
  return (
    <div className="block h-2/3 bg-white p-3 rounded-md text-back">
      <img src={img} alt="" className="block" />
      <h6 className="block text-xl my-3">{title}</h6>
      <div className="flex gap-6">
        <button className="flex items-center justify-center w-[130px] h-10 bg-green-700 text-white rounded-md ease-out duration-300 hover:bg-green-900">
          ویرایش
        </button>
        <button className="flex items-center justify-center w-[130px] h-10 bg-back text-white rounded-md ease-out duration-300 hover:bg-success"
        onClick={handlerShowDetails}
        >
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
