import React from "react";

const NumberTxt = ({ num }) => {
  return <span className="mr-4">{num}</span>;
}

const KeywordText = ({ keyword, customStyle }) => {
  return <span className={`${customStyle} text-[#C98BDF]`} style={{fontWeight: 'bold'}}>{keyword}</span>;
}

const UserdefinedText = ({ text, customStyle }) => {
  return <span className={`text-yellow ${customStyle}`} style={{fontWeight: 'bold'}}>{text}</span>;
}

const VarType = ({ vr, customStyle }) => {
  return <span className={`${customStyle} text-[#5565E8]`} style={{fontWeight: 'bold'}}>{vr}</span>;
}

const ContactMessageCode = ({
  name,
  email,
  message,
}) => {
  return (
    <div className="monospace hidden max-w-[30vw] md:block">
      <p className="flex items-center">
        <NumberTxt num={"1"} /> <KeywordText keyword="const" />{" "}
        <VarType vr="button" customStyle="ml-2" />
        <KeywordText keyword="=" customStyle="px-2"/>{" "}
        <VarType vr="document.querySelector" />
        {`{`}
        <UserdefinedText text="'#sendBtn'" />
        {`};`}
      </p>
      <p>
        <NumberTxt num={"2"} />
      </p>
      <p>
        <NumberTxt num={"3"} />
        <KeywordText keyword="const" />
        <VarType vr="message" customStyle="ml-2" />
        <KeywordText keyword="=" customStyle="px-2" />
        {`{`}
      </p>
      <p className="">
        <NumberTxt num={"4"} />
        <VarType vr="name" customStyle="ml-4" />
        {`:`}
        <UserdefinedText text={`'${name}'`} customStyle="ml-2" />
        {`,`}
      </p>
      <p className="">
        <NumberTxt num={"5"} />
        <VarType vr="email" customStyle="ml-4" />
        {`:`}
        <UserdefinedText text={`'${email}'`} customStyle="ml-2" />
        {`,`}
      </p>
      <p className="">
        <NumberTxt num={"6"} />
        <VarType vr="message" customStyle="ml-4" />
        {`:`}
        <UserdefinedText
          text={`'${message?.substring(0, 40)}'`}
          customStyle="ml-2"
        />
        {message?.length > 40 && (
          <>
            <br />
            <UserdefinedText
              text={`'${message?.substring(40, 80)}'`}
              customStyle="ml-32"
            />
          </>
        )}
        {message?.length > 80 && (
          <>
            <br />
            <UserdefinedText
              text={`'${message?.substring(80, message.length)}'`}
              customStyle="ml-32"
            />
          </>
        )}
        {`,`}
      </p>
      <p>
        <NumberTxt num={"7"} />
        {`}`}
      </p>
      <p>
        <NumberTxt num={"8"} />
      </p>
      <p>
        <NumberTxt num={"9"} />
        <VarType vr="button.addEventListener" customStyle="" />
        {`(`}
        <UserdefinedText text={`'click'`} customStyle="" />
        {`, () `}
        <KeywordText keyword="=> " />
        {`{`} <br />
        <VarType vr="form.send" customStyle="ml-8" />
        {`(`}
        <VarType vr="message" customStyle="" />
        {`);`}
      </p>
      <p style={{marginLeft: "-8px"}}>
        <NumberTxt num={"10"} />
      {`});`}
      </p>
    </div>
  );
}
export default ContactMessageCode;