import Title from "@/components/modules/Title/Title";
import React from "react";

function Skills({skills}) {
  return (
    <section className="block my-12 w-full">
      <div className="block">
        <div className="block">
          <Title title="مهارت های من" />
        </div>
        <div className="block mt-8">
          <div className="flex items-center flex-wrap gap-4">
            {skills.map(skill=>(
            <div className="box text-center w-[130px]  h-[170px]" key={skill._id}>
              <img
                src={skill.img}
                alt="vs-code"
                className=""
              />
              <span className="block mt-3 uppercase">{skill.name}</span>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
