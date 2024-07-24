import Title from "@/components/modules/Title/Title";
import React from "react";

function Skills() {
  return (
    <section className="block mt-12 w-full">
      <div className="block">
        <div className="block">
          <Title title="مهارت های من" />
        </div>
        <div className="block mt-8">
          <div className="flex items-center flex-wrap gap-4">
            <div className="box">
              <img
                src="/assets/images/vscode.avif"
                alt="vs-code"
                className=""
              />
              <span className="block mt-3 uppercase">vs-code</span>{" "}
            </div>
            <div className="box">
              <img
                src="/assets/images/html.avif"
                alt="html"
                className="black"
              />
              <span className="block mt-3 uppercase text-center">html</span>
            </div>
            <div className="box">
              <img src="/assets/images/css.avif" alt="css" className="black" />
              <span className="block mt-3 uppercase text-center">css</span>
            </div>
            <div className="box">
              <img
                src="/assets/images/sass.avif"
                alt="sass"
                className="black"
              />
              <span className="block mt-3 uppercase text-center">sass</span>
            </div>
            <div className="box">
              <img
                src="/assets/images/tailwind.avif"
                alt="tailwind"
                className="black"
              />
              <span className="block mt-3 uppercase text-center">tailwind</span>
            </div>
            <div className="box">
              <img
                src="/assets/images/bootstrap.png"
                alt="bootstrap"
                className="black w-[96px] h-[96px]"
              />
              <span className="block mt-3 uppercase text-center">
                bootstrap
              </span>
            </div>
            <div className="box">
              <img
                src="/assets/images/js.avif"
                alt="javascript"
                className="black"
              />
              <span className="block mt-3 uppercase text-center">
                javascript
              </span>
            </div>
            <div className="box">
              <img
                src="/assets/images/react.avif"
                alt="react"
                className="black"
              />
              <span className="block mt-3 uppercase text-center">react</span>
            </div>
            <div className="box">
              <img
                src="/assets/images/next.avif"
                alt="next"
                className="black"
              />
              <span className="block mt-3 uppercase text-center">next</span>
            </div>
            <div className="box">
              <img
                src="/assets/images/ts.avif"
                alt="typescript"
                className="black"
              />
              <span className="block mt-3 uppercase text-center">
                typescript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
